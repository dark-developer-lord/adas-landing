import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rateLimitMap = new Map();

const rateLimit = (req: NextRequest) => {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip =
    (req as any).ip ||
    (forwardedFor ? forwardedFor.split(",")[0]?.trim() : null) ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const limit = 1000; // Increased limit: 1000 requests per minute per user
  const windowMs = 60 * 1000;

  // Optimization: Prevent memory overflow if we hit 100,000+ unique visitors
  if (rateLimitMap.size > 100000) {
    rateLimitMap.clear();
  }

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 0, lastReset: Date.now() });
  }

  const ipData = rateLimitMap.get(ip);

  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0;
    ipData.lastReset = Date.now();
  }

  if (ipData.count >= limit) {
    return false;
  }

  ipData.count += 1;
  return true;
};

const authMiddleware = withAuth(
  function onSuccess(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "ADMIN",
    },
  }
);

export default async function middleware(req: NextRequest) {
  // 1. Rate Limiting
  if (!rateLimit(req)) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  // 2. Admin Authentication
  if (req.nextUrl.pathname.startsWith("/admin")) {
    return (authMiddleware as any)(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
