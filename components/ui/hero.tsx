"use client"

import Image from "next/image";
import Button from "./button";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }} 
        variants={container} 
        className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-12 lg:flex-row lg:gap-20"
      >
        <motion.div variants={item} className="max-w-2xl lg:flex-1">
          <motion.div variants={item} className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-muted-foreground mb-6 bg-background/50 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            v2.0 is now live
          </motion.div>
          
          <motion.h1 variants={item} className="text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-6xl xl:text-7xl">
            Autonomous Intelligence for <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Aerial Surveillance</span>
          </motion.h1>
          
          <motion.p variants={item} className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
            ADAS empowers your drone fleet with real-time AI analysis. Detect anomalies, track assets, and gather actionable insights without human intervention.
          </motion.p>

          <motion.ul variants={item} className="mt-10 space-y-4 text-base text-foreground/90">
            <li className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-medium">Real-time object detection & tracking</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-medium">Autonomous flight path optimization</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-medium">Enterprise-grade security & encryption</span>
            </li>
          </motion.ul>

          <motion.div variants={item} className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-muted/80">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="w-full lg:flex-1">
          <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none">
            {/* Abstract Drone/Tech Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <motion.div 
              className="relative h-full w-full overflow-hidden rounded-2xl border bg-background/50 backdrop-blur-sm shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-transparent to-transparent z-10"></div>
              <Image 
                src="/screenshot.png" 
                alt="ADAS Dashboard Interface" 
                fill 
                className="object-cover"
                priority
              />
              {/* UI Overlay Mockup */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/80 backdrop-blur-md rounded-xl border shadow-lg z-20">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold">Live Feed • Drone-04</div>
                  <div className="flex items-center gap-1 text-xs text-green-500">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Active
                  </div>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-primary rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Battery: 75%</span>
                  <span>Alt: 120m</span>
                  <span>Spd: 45km/h</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
