"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type BlogPost = {
  title: string;
  category: string;
  coverImage: string | null;
  excerpt: string;
  slug: string;
};

export default function Blog({ posts = [] }: { posts?: BlogPost[] }) {
  // Fallback if no posts provided
  const displayPosts = posts.length > 0 ? posts : [
    { title: "The Future of Autonomous Swarms", category: "Technology", coverImage: null, excerpt: "How decentralized AI is enabling massive drone swarms to operate as a single organism.", slug: "#" },
    { title: "Integrating Thermal Imaging in Search & Rescue", category: "Case Study", coverImage: null, excerpt: "Reducing search times by 80% using ADAS-equipped thermal drones in dense forests.", slug: "#" },
    { title: "Pipeline Inspection Efficiency", category: "Industry", coverImage: null, excerpt: "Automating 500 miles of pipeline inspection per day with zero human pilots.", slug: "#" },
  ];

  const EASE_OUT = [0.16, 1, 0.3, 1] as const;

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
  };

  const getHref = (slug: string) => {
    if (!slug || slug === "#") return "/blog";
    return `/blog/${slug}`;
  };

  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-foreground">Latest Intelligence</h2>
        <p className="mt-3 text-lg text-muted-foreground">Insights, case studies, and updates from the autonomous frontier.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25, margin: "-96px" }}
        variants={container}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {displayPosts.map((p, i) => (
          <Link href={getHref(p.slug)} key={p.title}>
            <motion.article
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-xl border border-border bg-card p-4 transition-all hover:shadow-2xl hover:border-primary/30 cursor-pointer group h-full overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg bg-muted group-hover:ring-2 group-hover:ring-primary/20 transition-all">
                {/* Placeholder gradient if image fails or is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-muted z-0"></div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="h-full w-full relative z-10">
                  {p.coverImage && (
                    <Image src={p.coverImage} alt={p.title} fill className="object-cover transition-transform duration-500" />
                  )}
                </motion.div>
              </div>
              <div className="mt-4">
                <div className="text-xs font-medium text-primary">{p.category}</div>
                <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </motion.article>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
