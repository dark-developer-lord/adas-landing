"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Integration() {
  const integrations = ["DJI SDK", "Pix4D", "ArcGIS", "AWS IoT", "Azure Digital Twins"];

  return (
    <section id="integration" className="mx-auto max-w-7xl px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-foreground">Mission Critical Integrations</h2>
        <p className="mt-3 text-lg text-muted-foreground">Seamlessly connect ADAS with your existing command center infrastructure.</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Card className="bg-card h-full transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="!text-lg">Enterprise Ecosystem</CardTitle>
              <CardDescription className="mt-1">Native support for industry-standard hardware and software platforms — minimal config, secure auth, and robust data pipelines.</CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="mt-4 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                {integrations.map((i) => (
                  <li key={i} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs">{i[0]}</span>
                    <span className="font-medium text-foreground">{i}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Our API-first architecture ensures that telemetry, video feeds, and analysis results can be ingested directly into your existing GIS, ERP, or Security Operations Center (SOC) without friction.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <figure className="text-center h-full flex flex-col justify-center items-center p-6 bg-muted/20 rounded-xl border border-dashed">
            <div className="relative h-48 w-48 overflow-hidden rounded-full bg-background border-4 border-muted shadow-xl flex items-center justify-center">
              {/* Abstract Integration Graphic */}
              <div className="absolute inset-0 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-spin-slow"></div>
              <div className="z-10 text-center">
                <div className="text-2xl font-bold text-primary">API</div>
                <div className="text-xs text-muted-foreground">Gateway</div>
              </div>
            </div>
            <figcaption className="mt-6 text-xs text-muted-foreground max-w-[200px]">
              Centralized data hub connecting field assets to HQ in real-time.
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
