import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Globe, Shield } from "lucide-react";

export default function AdasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Automated Drone AI System
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ADAS is the world's first fully autonomous, decentralized drone network designed for enterprise scale. 
              We combine edge computing, swarm intelligence, and advanced computer vision to redefine aerial operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/product">
                  Explore Product
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Core Technology</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Edge AI Processing</h3>
                    <p className="text-muted-foreground">
                      Real-time decision making happens directly on the drone. Our proprietary neural engine processes 
                      visual data in milliseconds, enabling obstacle avoidance and target tracking without latency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Swarm Intelligence</h3>
                    <p className="text-muted-foreground">
                      Drones communicate with each other to coordinate missions. If one unit needs to recharge, 
                      another automatically takes its place to ensure continuous coverage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-muted-foreground">
                      Military-grade encryption for all data transmission. Compliant with ISO 27001 and GDPR standards 
                      for critical infrastructure protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border bg-background/50 backdrop-blur-sm p-8">
              {/* Abstract visualization placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">ADAS</div>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Neural Network Architecture v4.0
                  <br />
                  Status: <span className="text-green-500">Online</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-y bg-background/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt;10ms</div>
              <div className="text-sm text-muted-foreground">Latency</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Active Nodes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
