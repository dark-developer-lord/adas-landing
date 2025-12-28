import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  createdAt: Date;
  coverImage?: string | null;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="glass-card depth-card h-full overflow-hidden border-border/50 hover:border-primary/50 transition-colors group">
        {post.coverImage && (
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {post.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </div>
          <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-primary flex items-center">
            Read Article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
