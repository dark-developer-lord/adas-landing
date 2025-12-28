import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, ArrowRight, ShieldCheck, Globe } from "lucide-react";
import ChartBarInteractive from "@/components/ui/charts/ChartBarInteractive";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Invest in the Future of <span className="text-primary">Autonomy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            ADAS is scaling the infrastructure for the autonomous economy. Join us as we redefine logistics, surveillance, and data collection.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Request Pitch Deck</Button>
            <Button variant="outline" size="lg">Contact IR</Button>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Explosive Market Growth</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The commercial drone market is projected to reach $500B by 2030. ADAS is positioned to capture the enterprise segment with our proprietary swarm technology.
                </p>
                <ul className="space-y-4">
                  {[
                    "Proprietary AI Navigation Stack",
                    "First-mover advantage in Swarm Logistics",
                    "Regulatory approval in 15+ countries",
                    "Recurring Revenue Model (SaaS + Hardware)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <TrendingUp size={14} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-xl border p-6 shadow-sm">
                <ChartBarInteractive />
              </div>
            </div>
          </div>
        </section>

        {/* Investment Tiers */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Investment Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Seed / Angel", range: "$50k - $250k", desc: "For individual accredited investors looking to join our early growth phase." },
              { title: "Series A", range: "$1M - $5M", desc: "Institutional rounds for scaling operations and R&D expansion." },
              { title: "Strategic Partners", range: "Custom", desc: "Corporate venture arms looking for technology integration and partnership." }
            ].map((tier, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{tier.title}</CardTitle>
                  <CardDescription className="text-primary font-bold text-lg">{tier.range}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{tier.desc}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full" variant="outline">Inquire <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Backed By Industry Leaders</h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale">
               {/* Placeholders for VC logos */}
               <div className="text-2xl font-bold">SEQUOIA</div>
               <div className="text-2xl font-bold">ANDREESSEN HOROWITZ</div>
               <div className="text-2xl font-bold">Y COMBINATOR</div>
               <div className="text-2xl font-bold">FOUNDERS FUND</div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
