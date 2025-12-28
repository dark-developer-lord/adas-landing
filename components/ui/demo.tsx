"use client"

import * as React from "react"
import { Play } from "lucide-react"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductDemo() {
  return (
    <section className="container mx-auto my-12 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 items-start"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Card className="bg-card h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="!text-lg">Live Mission Control</CardTitle>
                <CardDescription>Watch how ADAS manages a fleet of 50 drones autonomously in complex terrain.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full overflow-hidden rounded-md bg-muted/50 flex items-center justify-center group cursor-pointer relative">
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full bg-background/90 p-3 shadow-lg z-10"
                  >
                    <Play className="h-6 w-6 text-primary fill-primary" />
                  </motion.div>
                  {/* Placeholder for video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-center justify-between gap-4">
                  <Button variant="outline" className="flex items-center gap-2 group">
                    <Play className="h-4 w-4 group-hover:fill-current transition-colors" /> Watch full demo
                  </Button>
                  <div className="text-sm text-muted-foreground">Duration: 3:45</div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <div className="space-y-4">
            <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
              <Card className="bg-card transition-shadow hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold">System Capabilities</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {[
                      "One-click mission deployment & pathfinding", 
                      "Real-time thermal & optical sensor fusion", 
                      "Instant anomaly detection & automated alerts"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
              <Card className="bg-card transition-shadow hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold">Experience Autonomy</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Access our flight simulator sandbox to test mission parameters safely.</p>
                  <div className="mt-4">
                    <Button className="w-full sm:w-auto">Launch Simulator</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="!text-lg">Operational Efficiency</CardTitle>
              <CardDescription className="mt-1">Impact metrics from our enterprise partners.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="p-4">
                  <h4 className="text-sm font-semibold">Manual Operation</h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>Mission Planning: <strong className="text-foreground">4+ hours</strong></li>
                    <li>Deployment Time: <strong className="text-foreground">45 mins</strong></li>
                    <li>Coverage Area: <strong className="text-foreground">2 sq km/day</strong></li>
                    <li>Incident Rate: <strong className="text-foreground">High</strong></li>
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-semibold">With ADAS</h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>Mission Planning: <strong className="text-foreground"><span className="text-primary"><span>15</span> mins</span></strong></li>
                    <li>Deployment Time: <strong className="text-foreground"><span className="text-primary"><span>5</span> mins</span></strong></li>
                    <li>Coverage Area: <strong className="text-foreground"><span className="text-primary">12 sq km/day</span></strong></li>
                    <li>Incident Rate: <strong className="text-foreground">Near Zero</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-muted-foreground">Results are illustrative; actual outcomes vary by customer.</div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
