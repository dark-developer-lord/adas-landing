"use client"

import { motion } from "framer-motion";

function Sparkline({ points = [4,6,5,8,9,7] }: { points?: number[] }) {
  const max = Math.max(...points);
  const path = points.map((p, i) => `${i===0? 'M' : 'L'} ${i*10} ${50 - (p/max)*40}`).join(' ');
  return (
    <svg width="100" height="50" viewBox="0 0 60 50" fill="none" aria-hidden className="text-primary/50">
      <path d={path} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const data = [
  { label: "Flight Hours", value: "120k+", change: "+12%", points: [2,4,6,8,12] },
  { label: "Active Drones", value: "850", change: "+35%", points: [5,6,7,9,10] },
  { label: "Missions Flown", value: "15k", change: "+80%", points: [1,2,4,6,8] },
  { label: "Data Processed", value: "4.2 PB", change: "+60%", points: [3,4,6,8,9] },
];

export default function Metrics() {
  return (
    <section id="metrics" className="mx-auto max-w-7xl px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-foreground">Operational Scale</h2>
        <p className="mt-3 text-lg text-muted-foreground">Real-time metrics from our global fleet network.</p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((d, i) => (
          <motion.div 
            key={d.label} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-muted-foreground">{d.label}</div>
                <div className="mt-1 text-2xl font-bold text-foreground">{d.value}</div>
              </div>
              <div className="text-sm font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">{d.change}</div>
            </div>
            <div className="mt-4">
              <Sparkline points={d.points} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
