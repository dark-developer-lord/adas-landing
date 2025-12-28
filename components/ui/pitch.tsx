"use client"

import * as React from "react"
import { Video, FileText, Users } from "lucide-react"
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

export default function Pitch() {
  return (
    <section className="container mx-auto my-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Why ADAS?</h2>
          <p className="text-muted-foreground mt-1">Resources for stakeholders, investors, and technical evaluators.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Card className="bg-card h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-primary" />
                  <CardTitle className="!text-base">The Vision</CardTitle>
                </div>
                <CardDescription className="mt-1">See how we are redefining aerial autonomy for the next decade.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full overflow-hidden rounded-md bg-muted/50 flex items-center justify-center group cursor-pointer relative">
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-sm text-muted-foreground group-hover:scale-105 transition-transform z-10">Play Vision Video</div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Watch Video</Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Card className="bg-card h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="!text-base">Technical Whitepaper</CardTitle>
                </div>
                <CardDescription className="mt-1">Deep dive into our neural network architecture and sensor fusion stack.</CardDescription>
              </CardHeader>
            <CardContent>
              <div className="py-4 flex flex-col gap-2">
                <div className="h-2 w-3/4 bg-muted rounded"></div>
                <div className="h-2 w-1/2 bg-muted rounded"></div>
                <div className="h-2 w-5/6 bg-muted rounded"></div>
                <p className="text-xs text-muted-foreground mt-2">PDF • 2.4 MB</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Download PDF</Button>
            </CardFooter>
          </Card>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Card className="bg-card h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="!text-base">Strategic Partnerships</CardTitle>
                </div>
                <CardDescription className="mt-1">Collaborate with us on government contracts and enterprise integrations.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">We are actively seeking partners in defense, agriculture, and logistics sectors.</p>
                <div className="mt-4 text-sm">
                  <div className="font-medium">Contact</div>
                  <div className="text-muted-foreground">partnerships@adas.ai</div>
                </div>
              </CardContent>
              <CardFooter>
                <a href="/contact" className="w-full">
                  <Button className="w-full">Contact Team</Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { Pitch }
