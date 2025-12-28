"use client"

import Link from "next/link";
import Button from "./button";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/80 backdrop-blur-2xl transition-all duration-300 ${scrolled ? 'shadow-lg border-border/50' : 'border-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link href="/" className="flex items-center gap-3 z-50 group" onClick={() => setIsOpen(false)}>
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold shadow-lg group-hover:shadow-xl transition-all">A</div>
          <div>
            <div className="text-base font-bold group-hover:text-primary transition-colors">ADAS</div>
            <div className="text-xs text-muted-foreground">Automated Drone AI System</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              Solutions
            </button>
            <div className="absolute top-full left-0 w-[400px] p-4 glass-card border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 z-50 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">Industries</div>
                <div className="flex flex-col gap-2.5">
                  <Link href="/industries/farmers" className="text-sm hover:text-primary font-medium transition-colors px-2 py-1 rounded hover:bg-primary/5">Farmers</Link>
                  <Link href="/industries/agri-holdings" className="text-sm hover:text-primary font-medium transition-colors px-2 py-1 rounded hover:bg-primary/5">Agri Holdings</Link>
                  <Link href="/industries/government" className="text-sm hover:text-primary font-medium transition-colors px-2 py-1 rounded hover:bg-primary/5">Government</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">Use Cases</div>
                <div className="flex flex-col gap-2.5">
                  <Link href="/use-cases/precision-farming" className="text-sm hover:text-primary font-medium transition-colors px-2 py-1 rounded hover:bg-primary/5">Precision Farming</Link>
                  <Link href="/use-cases/smart-irrigation" className="text-sm hover:text-primary font-medium transition-colors px-2 py-1 rounded hover:bg-primary/5">Smart Irrigation</Link>
                  <Link href="/use-cases/crop-monitoring" className="text-sm hover:text-primary font-medium transition-colors px-2 py-1 rounded hover:bg-primary/5">Crop Monitoring</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              Platform
            </button>
            <div className="absolute top-full left-0 w-[200px] p-4 glass-card border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 z-50 flex flex-col gap-2.5">
              <Link href="/product/drone" className="text-sm hover:text-primary font-semibold px-2 py-1.5 rounded hover:bg-primary/5 transition-colors">Drone Hardware</Link>
              <div className="h-px bg-border my-0.5" />
              <Link href="/platform/ai-models" className="text-sm hover:text-primary px-2 py-1.5 rounded hover:bg-primary/5 transition-colors">AI Models</Link>
              <Link href="/platform/data-pipeline" className="text-sm hover:text-primary px-2 py-1.5 rounded hover:bg-primary/5 transition-colors">Data Pipeline</Link>
              <Link href="/platform/api-documentation" className="text-sm hover:text-primary px-2 py-1.5 rounded hover:bg-primary/5 transition-colors">API Docs</Link>
              <Link href="/platform/security-compliance" className="text-sm hover:text-primary px-2 py-1.5 rounded hover:bg-primary/5 transition-colors">Security</Link>
            </div>
          </div>

          <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">Pricing</Link>
          <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">Docs</Link>
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">Blog</Link>
          <Link href="/track" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">Track Order</Link>
          
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              Company
            </button>
            <div className="absolute top-full right-0 w-[400px] p-4 glass-card border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 z-50 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">About</div>
                <div className="flex flex-col gap-2.5">
                  <Link href="/team" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">Team</Link>
                  <Link href="/careers" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">Careers</Link>
                  <Link href="/investors" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">Investors</Link>
                  <Link href="/partners" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">Partners</Link>
                  <Link href="/blog" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">Blog</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">Legal</div>
                <div className="flex flex-col gap-2.5">
                  <Link href="/legal/terms-of-service" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">Terms of Service</Link>
                  <Link href="/legal/privacy-policy" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">Privacy Policy</Link>
                  <Link href="/legal/subprocessors" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">Subprocessors</Link>
                  <Link href="/legal/service-level-agreement" className="text-sm hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors">SLA</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 min-h-screen bg-background border-b p-6 pt-24 md:hidden flex flex-col gap-6"
            >
              <nav className="flex flex-col gap-6 text-lg font-medium">
                <Link href="/product/drone" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Drone Hardware</Link>
                <Link href="/#features" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Solutions</Link>
                <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Pricing</Link>
                <Link href="/track" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Track Order</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Blog</Link>
                <Link href="/team" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Team</Link>
                <Link href="/legal/terms-of-service" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Terms</Link>
                <Link href="/legal/privacy-policy" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Privacy</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Contact</Link>
              </nav>
              <div className="flex flex-col gap-4 mt-4 border-t pt-6">
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Sales</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
