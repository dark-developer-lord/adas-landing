import { teamMembers } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return { title: "Team Member Not Found" };
  return {
    title: `${member.name} - ${member.role} | ADAS`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="noise-overlay"></div>
      
      <main className="pt-32 pb-16 relative z-10 container mx-auto px-6">
        <Link href="/team" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Team
        </Link>

        <div className="grid md:grid-cols-[300px_1fr] gap-12">
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative group">
               <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary/20 text-8xl font-bold">
                  {member.name.charAt(0)}
               </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              {member.socials?.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {member.socials?.twitter && (
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {member.socials?.github && (
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 ai-glitch" data-text={member.name}>{member.name}</h1>
              <p className="text-xl text-primary font-medium">{member.role}</p>
            </div>

            {member.quote && (
              <blockquote className="border-l-4 border-primary pl-4 italic text-xl text-muted-foreground my-8">
                &quot;{member.quote}&quot;
              </blockquote>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Biography</h3>
              <p className="text-muted-foreground leading-relaxed">
                {member.fullBio || member.bio}
              </p>
            </div>

            {member.achievements && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {member.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {member.expertise && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
