"use client"

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  once?: boolean;
  margin?: string;
  amount?: number;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.55,
  x = 0,
  y = 24,
  once = true,
  margin = "-96px",
  amount = 0.25,
}: RevealOnScrollProps) {
  const reduceMotion = useReducedMotion();
  const EASE_OUT = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin, amount }}
      transition={reduceMotion ? undefined : { duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
