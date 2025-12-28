import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PageRenderer({ content }: { content: string | null }) {
  if (!content) return null;

  let sections = [];
  try {
    sections = JSON.parse(content);
  } catch (e) {
    // Fallback for legacy content
    return <div className="container mx-auto px-6 prose max-w-none dark:prose-invert">{content}</div>;
  }

  if (!Array.isArray(sections)) {
     return <div className="container mx-auto px-6 prose max-w-none dark:prose-invert">{content}</div>;
  }

  return (
    <div className="space-y-16 pb-16">
      {sections.map((section: any) => {
        switch (section.type) {
          case "hero":
            return (
              <section key={section.id} className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                  {section.data.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {section.data.subtitle}
                </p>
              </section>
            );
          case "text":
            return (
              <section key={section.id} className="container mx-auto px-6">
                <div className="prose max-w-none dark:prose-invert mx-auto">
                  {section.data.content}
                </div>
              </section>
            );
          case "features":
            const items = section.data.items ? section.data.items.split('\n') : [];
            return (
              <section key={section.id} className="container mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          case "cta":
            return (
              <section key={section.id} className="container mx-auto px-6 text-center">
                <div className="bg-primary/5 rounded-2xl p-12">
                  <h2 className="text-3xl font-bold mb-6">{section.data.title}</h2>
                  <Button asChild size="lg">
                    <Link href={section.data.buttonLink || "#"}>
                      {section.data.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </section>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
