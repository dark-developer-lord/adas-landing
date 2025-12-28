import { teamMembers } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="noise-overlay"></div>
      
      <main className="pt-24 pb-16 relative z-10">
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Meet the <span className="text-primary ai-glitch" data-text="Squadron">Squadron</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            The engineers, pilots, and visionaries behind the world&apos;s most advanced autonomous drone network.
          </p>
        </section>

        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <Link href={`/team/${member.slug}`} key={i}>
                <Card className="overflow-hidden group glass-card depth-card border-border/50 cursor-pointer h-full">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    {/* Placeholder for team image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4 z-10">
                      <span className="text-white text-sm font-medium">View Profile</span>
                    </div>
                    <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary/20 text-6xl font-bold group-hover:scale-110 transition-transform duration-500">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
