import { prisma } from "@/lib/prisma";
import Hero from "../components/ui/hero";
import Partners from "../components/ui/partners";
import Features from "../components/ui/features";
import ProductDemo from "../components/ui/demo";
import Analytics from "../components/ui/analytics";
import Metrics from "../components/ui/metrics";
import Integration from "../components/ui/integration";
import Pricing from "../components/ui/pricing";
import Pitch from "../components/ui/pitch";
import Investors from "../components/ui/investors";
import Blog from "../components/ui/blog";
import Team from "@/components/ui/team";
import FAQ from "../components/ui/faq";
import CTA from "../components/ui/cta";
import Contact from "../components/ui/contact";
import ScrollProgress from "@/components/ui/scroll-progress";
import FloatingAction from "@/components/ui/floating-action";
import RevealOnScroll from "@/components/ui/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Battery, Wifi, Wind, Camera } from "lucide-react";

export default async function Home() {
  const latestPosts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
    select: {
      title: true,
      category: true,
      coverImage: true,
      excerpt: true,
      slug: true
    }
  });

  return (
    <div className="bg-background text-foreground relative">
      <ScrollProgress />
      <FloatingAction />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/50 text-primary">
              Next Gen Hardware
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              ADAS X1
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
              The world's most advanced autonomous drone. Built for endurance, precision, and intelligence at the edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/order?product=adas-x1">Pre-order Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                <Link href="#specs">View Specs</Link>
              </Button>
            </div>
          </div>
          
          {/* Drone Visual Placeholder */}
          <div className="mt-16 relative mx-auto max-w-5xl aspect-[16/9] glass-card depth-card rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            <div className="text-center z-10">
              <div className="text-9xl font-bold text-foreground/5 tracking-widest select-none">X1</div>
              <p className="text-sm text-muted-foreground mt-4 uppercase tracking-widest">3D Model Viewer Loading...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specs Grid */}
      <section id="specs" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 glass-card depth-card rounded-2xl shadow-sm border">
              <Battery className="h-8 w-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">55 min</div>
              <div className="text-sm text-muted-foreground">Flight Time</div>
            </div>
            <div className="flex flex-col items-center text-center p-6 glass-card depth-card rounded-2xl shadow-sm border">
              <Wifi className="h-8 w-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">15 km</div>
              <div className="text-sm text-muted-foreground">Transmission Range</div>
            </div>
            <div className="flex flex-col items-center text-center p-6 glass-card depth-card rounded-2xl shadow-sm border">
              <Wind className="h-8 w-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">15 m/s</div>
              <div className="text-sm text-muted-foreground">Wind Resistance</div>
            </div>
            <div className="flex flex-col items-center text-center p-6 glass-card depth-card rounded-2xl shadow-sm border">
              <Camera className="h-8 w-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">8K</div>
              <div className="text-sm text-muted-foreground">Dual Sensor Camera</div>
            </div>
          </div>
        </div>
      </section>

      <Hero />
      
      <RevealOnScroll>
        <Partners />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Features />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <ProductDemo />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Analytics />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Metrics />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Integration />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Pricing />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Pitch />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Investors />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Blog posts={latestPosts} />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Team />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <FAQ />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <CTA />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </div>
  );
}
