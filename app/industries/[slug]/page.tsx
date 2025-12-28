import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { iconMap } from "@/lib/site-data";
import { prisma } from "@/lib/prisma";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageRenderer } from "@/components/page-renderer";

export async function generateStaticParams() {
  const pages = await prisma.page.findMany({
    where: { category: "industries" },
    select: { slug: true },
  });
  
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const page = await prisma.page.findUnique({
    where: {
      category_slug: {
        category: "industries",
        slug: slug,
      },
    },
  });

  if (!page) {
    notFound();
  }

  // Check if content is JSON array (Page Constructor format)
  let isDynamic = false;
  try {
    if (page.content && page.content.trim().startsWith("[")) {
      const parsed = JSON.parse(page.content);
      if (Array.isArray(parsed)) isDynamic = true;
    }
  } catch (e) {}

  if (isDynamic) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <main className="flex-1 pt-24 pb-16">
          <PageRenderer content={page.content} />
        </main>
      </div>
    );
  }

  const Icon = page.iconName ? iconMap[page.iconName] : null;
  const features = page.features ? JSON.parse(page.features) : [];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <main className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-6 py-12 text-center">
          {Icon && (
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            ADAS for <span className="text-primary">{page.title}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            {page.description}
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/product">View Platform</Link>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-16 bg-muted/30 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature: string, index: number) => (
              <Card key={index} className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced {feature.toLowerCase()} capabilities designed specifically for the {page.title.split(' ')[0]} sector.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-24">
          <div className="rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to transform your operations?
              </h2>
              <p className="mx-auto max-w-xl text-lg opacity-90 mb-8">
                Join leading organizations in the {page.title} sector using ADAS to drive efficiency.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>
        </section>
      </main>
    </div>
  );
}
