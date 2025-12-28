"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-foreground">Meet the team</h2>
        <p className="mt-3 text-lg text-muted-foreground">A small cross-functional team shipping fast, iterating often.</p>
      </motion.div>

      <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-xl rounded-lg border border-border glass-card depth-card p-6 shadow-sm"
        >
          <div className="relative h-56 w-full overflow-hidden rounded-md bg-muted">
            <Image src="/team.jpg" alt="Team" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Our team brings together design, engineering, and product expertise.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid w-full gap-4 sm:grid-cols-2 lg:w-1/2"
        >
          {teamMembers.map((m) => (
            <Link href={`/team/${m.slug}`} key={m.slug} className="block">
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: "var(--muted)" }}
                className="flex gap-4 rounded-lg border border-border glass-card depth-card p-4 transition-colors h-full"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-muted border border-border flex items-center justify-center text-2xl font-bold text-muted-foreground">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.role}</div>
                  <div className="mt-2 text-xs text-muted-foreground line-clamp-1">{m.bio}</div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
