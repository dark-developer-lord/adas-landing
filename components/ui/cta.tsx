"use client"

import { motion } from "framer-motion";
import Button from "./button";

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-12 md:p-16 text-center shadow-2xl shadow-primary/10"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
        >
          Ready to Deploy Your Fleet?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Join industry leaders using ADAS to automate aerial surveillance and data collection. Start your free pilot program today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1">
            Start Free Pilot
          </Button>
          <Button variant="outline" size="lg" className="bg-background/80 backdrop-blur-sm hover:bg-background">
            Schedule Demo
          </Button>
        </motion.div>
        
        <p className="mt-8 text-sm text-muted-foreground/80">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </motion.div>
    </section>
  );
}
