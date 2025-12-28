import { partners } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return partners.map((partner) => ({
    slug: partner.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const partner = partners.find((p) => p.slug === slug);
  if (!partner) return { title: "Partner Not Found" };
  return {
    title: `${partner.name} | ADAS Partners`,
    description: partner.description,
  };
}

export default async function PartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = partners.find((p) => p.slug === slug);

  if (!partner) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="noise-overlay"></div>
      
      <main className="pt-32 pb-16 relative z-10 container mx-auto px-6">
        <Link href="/partners" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Partners
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card depth-card p-8 md:p-12 rounded-3xl">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8 border-b border-border/50 pb-8">
              <div>
                <Badge variant="outline" className="mb-4">{partner.category}</Badge>
                <h1 className="text-4xl font-bold mb-4 ai-glitch" data-text={partner.name}>{partner.name}</h1>
                <p className="text-xl text-muted-foreground">{partner.description}</p>
              </div>
              <Button variant="outline" className="shrink-0 gap-2">
                Visit Website <ExternalLink className="h-4 w-4" />
              </Button>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Partnership Details</h3>
              <p className="text-muted-foreground leading-relaxed">
                {partner.details}
              </p>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h4 className="text-lg font-semibold mb-2 text-primary">Integration Status</h4>
                <p className="text-sm text-muted-foreground">
                  Fully certified for ADAS Platform v2.0+. Enterprise support available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
