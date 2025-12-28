"use client"

import { motion } from "framer-motion";
import Button from "./button";

function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const tiers = [
  { name: "Pilot", price: "$0", period: "Forever", features: ["1 Drone connection", "Basic telemetry", "Standard video feed"] },
  { name: "Squadron", price: "$499", period: "per month", features: ["Up to 10 drones", "Advanced analytics", "Mission planning", "Cloud storage (1TB)"] , popular: true},
  { name: "Command", price: "Custom", period: "Contact sales", features: ["Unlimited fleet size", "On-premise deployment", "Custom AI models", "24/7 Dedicated support"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Flexible Fleet Pricing</h2>
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed">Scale your autonomous operations with plans designed for every mission profile.</p>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {tiers.map((t, idx) => (
          <motion.div 
            key={t.name} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative rounded-2xl border-2 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl ${t.popular ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105' : 'border-border'}`}
          >
            {t.popular ? (
              <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">Most Popular</motion.span>
            ) : null}
            <div>
              <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">{t.price}</span>
                {t.period && <span className="text-sm font-medium text-muted-foreground">/ {t.period}</span>}
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="leading-5">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant={t.popular ? 'default' : 'outline'} className="w-full" size="lg">
                {t.popular ? 'Start Trial' : 'Contact Sales'}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 overflow-x-auto rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm"
      >
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-left border-b-2 border-border">
              <th className="px-6 py-5 text-muted-foreground font-semibold uppercase text-xs tracking-wider">Features</th>
              {tiers.map((t) => (
                <th key={t.name} className="px-6 py-5 text-foreground font-bold text-base">{t.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(
              // rows: [label, Pilot, Squadron, Command]
              [
                ["Fleet Size", "1 Drone", "Up to 10 Drones", "Unlimited"],
                ["Video Resolution", "720p", "4K", "8K / RAW"],
                ["Data Retention", "7 Days", "90 Days", "Unlimited"],
                ["AI Models", "Standard", "Advanced + Custom", "Full Custom Training"],
                ["API Access", "Read-only", "Full REST API", "Real-time WebSocket"],
                ["Support", "Community", "Priority Email", "Dedicated Account Manager"],
                ["Deployment", "Cloud", "Cloud / Hybrid", "On-Premise / Air-gapped"],
                ["SLA", "—", "99.9%", "99.999%"],
              ]
            ).map((row, idx) => (
              <tr key={idx} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                <td className="px-6 py-5 text-foreground font-semibold">{row[0]}</td>
                {row.slice(1).map((cell, colIndex) => (
                  <td key={`${cell}-${idx}-${colIndex}`} className="px-6 py-5 text-muted-foreground font-medium">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
