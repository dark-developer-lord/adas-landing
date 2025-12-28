import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight, Battery, Wifi, Wind, Camera, Cpu, ShieldCheck, Maximize2, Gauge } from "lucide-react";

export default function DroneProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
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
          <div className="mt-16 relative mx-auto max-w-5xl aspect-[16/9] bg-gradient-to-b from-muted/20 to-muted/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
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
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border">
              <Battery className="h-8 w-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">55 min</div>
              <div className="text-sm text-muted-foreground">Flight Time</div>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border">
              <Wifi className="h-8 w-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">15 km</div>
              <div className="text-sm text-muted-foreground">Transmission Range</div>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border">
              <Wind className="h-8 w-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">15 m/s</div>
              <div className="text-sm text-muted-foreground">Wind Resistance</div>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border">
              <Camera className="h-8 w-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">8K</div>
              <div className="text-sm text-muted-foreground">Dual Sensor Camera</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for the Extreme</h2>
                <p className="text-lg text-muted-foreground">
                  The ADAS X1 is designed to operate in the most challenging environments. From scorching heat to freezing cold, our hardware delivers consistent performance.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">IP54 Weather Resistant</h3>
                    <p className="text-muted-foreground">Dust and water protection ensures mission capability in rain or sandstorms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Onboard AI Processor</h3>
                    <p className="text-muted-foreground">21 TOPS of compute power for real-time object detection and path planning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Maximize2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Omnidirectional Sensing</h3>
                    <p className="text-muted-foreground">6-way obstacle avoidance system with 360° coverage.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] bg-muted rounded-3xl overflow-hidden border">
              {/* Exploded View Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Gauge className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground font-mono text-sm">EXPLODED_VIEW_RENDER.GLB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-24 bg-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Aircraft</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Dimensions (Unfolded)</span>
                    <span className="font-medium">810 × 670 × 430 mm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Max Takeoff Weight</span>
                    <span className="font-medium">9.2 kg</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Max Speed</span>
                    <span className="font-medium">23 m/s (S-mode)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Max Flight Time</span>
                    <span className="font-medium">55 mins (no payload)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Camera System</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Sensor</span>
                    <span className="font-medium">4/3 CMOS, 20 MP</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Lens</span>
                    <span className="font-medium">FOV 84° 24mm f/2.8-f/11</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Video Resolution</span>
                    <span className="font-medium">5.1K: 5120×2700 @ 50fps</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Thermal Camera</span>
                    <span className="font-medium">640×512 px, 30Hz</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to deploy?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Get the ADAS X1 today and transform your aerial operations with autonomous intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/product">Compare Models</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
