import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">A</div>
              <span className="text-lg font-bold">ADAS</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Automated Drone AI System. Revolutionizing aerial surveillance and data collection with autonomous intelligence.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="h-8 w-8 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors"></div>
              <div className="h-8 w-8 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors"></div>
              <div className="h-8 w-8 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors"></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm">Product</h3>
            <Link href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link href="/track" className="text-sm text-muted-foreground hover:text-primary transition-colors">Track Order</Link>
            <Link href="/#integration" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integrations</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Changelog</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm">Company</h3>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Team</Link>
            <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link>
            <Link href="/partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partners</Link>
            <Link href="/investors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Investors</Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm">Legal</h3>
            <Link href="/legal/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/legal/subprocessors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Subprocessors</Link>
            <Link href="/legal/service-level-agreement" className="text-sm text-muted-foreground hover:text-primary transition-colors">SLA</Link>
            <Link href="/platform/security-compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">Security</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ADAS Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
