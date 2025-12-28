import { partners } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="noise-overlay"></div>
      
      <main className="pt-24 pb-16 relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            The ADAS <span className="text-primary ai-glitch" data-text="Ecosystem">Ecosystem</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We collaborate with the world&apos;s leading hardware manufacturers, software developers, and regulatory bodies to deliver a seamless autonomous experience.
          </p>
          <Button size="lg">Become a Partner</Button>
        </section>

        {/* Partner Categories */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hardware Partners</h2>
              <p className="text-muted-foreground mb-6">
                Our software is optimized for the best airframes in the industry. We work directly with manufacturers to ensure deep integration.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {partners.filter(p => p.category === "Hardware").map((p) => (
                  <Link href={`/partners/${p.slug}`} key={p.slug}>
                    <div className="bg-card border rounded-lg p-4 flex items-center justify-center font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer h-full text-center">
                      {p.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Software Integrations</h2>
              <p className="text-muted-foreground mb-6">
                Connect ADAS with your existing workflow. From GIS mapping to ERP systems, we support standard data formats and APIs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {partners.filter(p => p.category === "Software").map((p) => (
                  <Link href={`/partners/${p.slug}`} key={p.slug}>
                    <div className="bg-card border rounded-lg p-4 flex items-center justify-center font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer h-full text-center">
                      {p.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner with ADAS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Access to Enterprise Clients", desc: "Get your hardware or software in front of Fortune 500 companies using our platform." },
                { title: "Early API Access", desc: "Build on top of our latest features before they are released to the public." },
                { title: "Co-Marketing Opportunities", desc: "Joint case studies, webinars, and press releases to amplify our shared success." }
              ].map((benefit, i) => (
                <Card key={i} className="glass-card depth-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary h-5 w-5" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-12 border border-primary/10 glass-card">
            <h2 className="text-3xl font-bold mb-4">Ready to Integrate?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our partner program today and start building the future of autonomous flight with us.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Apply for Partnership</Button>
              <Button variant="outline" size="lg">View API Docs</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
