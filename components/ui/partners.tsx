"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "AccelerateX", period: "2022–present", role: "Accelerator", desc: "Support on go-to-market and fundraising.", logo: "/partner-1.png" },
  { name: "CloudFund", period: "2023–present", role: "Investor", desc: "Strategic cloud credits and mentorship.", logo: "/partner-2.png" },
  { name: "DesignLab", period: "2021–2023", role: "Design Partner", desc: "Helped shape our UX components library.", logo: "/partner-3.png" },
  { name: "TechStars", period: "2023", role: "Accelerator", desc: "Global network access.", logo: "/partner-1.png" },
  { name: "Y Combinator", period: "2024", role: "Investor", desc: "Seed funding.", logo: "/partner-2.png" },
];

export default function Partners() {
  return (
    <section id="partners" className="mx-auto max-w-7xl px-6 py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-foreground">Our partners & accelerators</h2>
        <p className="mt-3 text-lg text-muted-foreground">Companies and programs that help us scale and ship faster.</p>
      </motion.div>

      <div className="relative flex w-full overflow-hidden py-10 mask-linear-gradient">
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent"></div>
        
        <motion.div 
          className="flex gap-8 min-w-full shrink-0 items-center justify-around px-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p.name}-${i}`} className="flex w-[300px] shrink-0 flex-col gap-4 rounded-xl border border-border/50 glass-card p-6 transition-colors hover:border-border">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted/50 p-2">
                  <Image src={p.logo} alt={p.name} width={48} height={48} className="object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.role}</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{p.desc}</p>
            </div>
          ))}
        </motion.div>
        <motion.div 
          className="flex gap-8 min-w-full shrink-0 items-center justify-around px-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p.name}-${i}-duplicate`} className="flex w-[300px] shrink-0 flex-col gap-4 rounded-xl border border-border/50 glass-card p-6 transition-colors hover:border-border">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted/50 p-2">
                  <Image src={p.logo} alt={p.name} width={48} height={48} className="object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.role}</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{p.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
