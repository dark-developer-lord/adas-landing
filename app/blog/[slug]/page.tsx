import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, User as UserIcon } from "lucide-react";

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true },
  });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: true },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="noise-overlay"></div>
      
      <main className="pt-24 pb-16 relative z-10">
        <article className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8 text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 leading-tight">
              <span className="ai-glitch" data-text={post.title}>{post.title}</span>
            </h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  <span>{post.author.name || "Anonymous"}</span>
                </div>
              )}
            </div>
          </div>

          {post.coverImage && (
            <div className="rounded-xl overflow-hidden mb-12 shadow-2xl border border-border/50 glass-card">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert mx-auto glass-card p-8 md:p-12 rounded-2xl depth-card">
            {/* Simple rendering for now, ideally use a markdown renderer */}
            <div className="whitespace-pre-wrap">{post.content}</div>
          </div>
        </article>
      </main>


    </div>
  );
}
