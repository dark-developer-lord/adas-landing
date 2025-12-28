import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid md:grid-cols-[250px_1fr] gap-12">
        <aside className="hidden md:block">
          <div className="sticky top-24 space-y-2">
            <h3 className="font-semibold mb-4 px-4">Legal</h3>
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/legal/terms-of-service" 
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/legal/privacy-policy" 
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/legal/subprocessors" 
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Subprocessors
              </Link>
              <Link 
                href="/legal/service-level-agreement" 
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Service Level Agreement
              </Link>
            </nav>
          </div>
        </aside>
        <main className="prose prose-gray dark:prose-invert max-w-3xl">
          {children}
        </main>
      </div>
    </div>
  );
}
