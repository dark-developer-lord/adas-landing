import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Box, Layers, Zap, BarChart3, Lock, Smartphone } from "lucide-react";

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-6">
                New Release v2.0
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                The Complete Drone Operations Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Manage your entire fleet, analyze data in real-time, and automate complex missions from a single dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Free Trial
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl border bg-muted/50 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-muted-foreground text-lg">
              Built for developers and operators who demand precision and reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fleet Management</h3>
              <p className="text-muted-foreground">
                Track battery health, maintenance schedules, and flight logs for thousands of drones in real-time.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mission Planning</h3>
              <p className="text-muted-foreground">
                Drag-and-drop mission planner with 3D terrain mapping and automated obstacle avoidance pathing.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics Engine</h3>
              <p className="text-muted-foreground">
                Process aerial imagery instantly. Detect objects, measure volumes, and generate heatmaps automatically.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Role-Based Access</h3>
              <p className="text-muted-foreground">
                Granular permission controls for pilots, analysts, and administrators. SSO integration available.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6">
                <Box className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">API & SDK</h3>
              <p className="text-muted-foreground">
                Extend functionality with our robust Python and Node.js SDKs. Full REST API access for custom integrations.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Command</h3>
              <p className="text-muted-foreground">
                Control operations from the field with our iOS and Android apps. Offline mode supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to deploy?</h2>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Join over 500 enterprise teams using ADAS to power their autonomous operations.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
