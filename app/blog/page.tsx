import { prisma } from "@/lib/prisma";
import { BlogList } from "@/components/blog/blog-list";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Blog | AI Platform",
  description: "Latest news and updates from our team.",
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  // Extract unique categories
  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="noise-overlay"></div>
      <main className="pt-24 pb-16 container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            <span className="text-primary ai-glitch" data-text="Latest News">Latest News</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, updates, and technical deep dives from our engineering team.
          </p>
        </div>

        <BlogList posts={posts} categories={categories} />
      </main>

    </div>
  );
}
