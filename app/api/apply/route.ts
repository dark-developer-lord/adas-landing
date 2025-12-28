import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, linkedin, portfolio, resume, coverLetter, jobId, jobTitle } = body;

    // Validate input
    if (!name || !email || !resume || !jobId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to database
    const application = await prisma.jobApplication.create({
      data: {
        name,
        email,
        linkedin,
        portfolio,
        resume,
        coverLetter,
        jobId,
        jobTitle,
      },
    });

    console.log("Job Application Saved:", application.id);

    // Set a session cookie to track submission
    const cookieStore = await cookies();
    cookieStore.set("application_session", `applied_${jobId}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return NextResponse.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Application API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
