"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is shadcn/ui?", a: "A lightweight component toolkit built on top of Radix primitives and Tailwind, focused on composability." },
  { q: "Is this accessible?", a: "Yes — many primitives come from Radix which focuses on accessibility." },
  { q: "Can I theme the components?", a: "Absolutely — style tokens and Tailwind make theming straightforward." },
  { q: "Does it work with Next.js?", a: "Yes — it works well with Next.js, especially with the app router and Tailwind." },
  { q: "Where can I find docs?", a: "Visit the shadcn UI documentation site or the project README for usage and examples." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-foreground">Frequently asked questions</h2>
        <p className="mt-3 text-lg text-muted-foreground">Answers to common questions about using the toolkit.</p>
      </motion.div>

      <div className="mt-8 mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border glass-card depth-card overflow-hidden"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between p-4 text-left text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
            >
              {f.q}
              {openIndex === i ? <Minus className="h-4 w-4 text-muted-foreground" /> : <Plus className="h-4 w-4 text-muted-foreground" />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-4 pb-4 text-sm text-muted-foreground border-t border-border/50 pt-4">
                    {f.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
