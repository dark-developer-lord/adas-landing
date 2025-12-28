"use client"

import { Zap, Layout, Moon, FileText, Layers, ShieldCheck, Code, BarChart2 } from "lucide-react"
import { BentoGrid, BentoCard } from "@/registry/magicui/bento-grid"
import { motion } from "framer-motion"

const features = [
  {
    Icon: ShieldCheck,
    name: "Autonomous Navigation",
    description: "Advanced obstacle avoidance and path planning algorithms for complex environments.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Layers,
    name: "Real-time Analytics",
    description: "Process video feeds and sensor data on the edge for instant actionable insights.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: BarChart2,
    name: "Fleet Management",
    description: "Centralized dashboard to monitor health, battery status, and location of every drone.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Moon,
    name: "Predictive Maintenance",
    description: "AI-driven analysis to predict component failures before they happen.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Zap,
    name: "Edge Computing",
    description: "Onboard processing power to handle complex AI models without latency.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Code,
    name: "Secure Data Link",
    description: "End-to-end encryption for all telemetry and payload data transmission.",
    href: "/",
    cta: "Learn more",
  },
  {
    Icon: FileText,
    name: "Mission Planning",
    description: "Intuitive drag-and-drop interface for scheduling and defining complex missions.",
    href: "/",
    cta: "Learn more",
  },
  {
    Icon: Layout,
    name: "Custom Payloads",
    description: "Modular design supports thermal, LiDAR, and multispectral camera integrations.",
    href: "/",
    cta: "Learn more",
  },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Intelligence in the Sky</h2>
        <p className="mt-4 text-xl text-muted-foreground leading-relaxed">A complete ecosystem for autonomous aerial operations.</p>
      </motion.div>

      <div className="mt-16">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((f, i) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.08, duration: 0.5 }}>
              <BentoCard Icon={f.Icon} name={f.name} description={f.description} href={f.href} cta={f.cta} className={f.className} />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
