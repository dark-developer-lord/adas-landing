"use client";

import { jobs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Clock, Users, Globe, Zap, Heart, Coffee, Laptop, Shield, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Heart, title: "Comprehensive Health", desc: "Full medical, dental, and vision coverage for you and your dependents." },
  { icon: Zap, title: "Competitive Equity", desc: "Every employee gets stock options. We want you to own what you build." },
  { icon: Laptop, title: "Remote-First Culture", desc: "Work from anywhere. We provide the best equipment for your home office." },
  { icon: Coffee, title: "Unlimited PTO", desc: "Take the time you need to recharge. We believe in work-life balance." },
  { icon: Shield, title: "401(k) Matching", desc: "We help you save for your future with a generous matching program." },
  { icon: Rocket, title: "Growth Budget", desc: "$2,000 annual stipend for conferences, courses, and personal development." }
];

const stats = [
  { label: "Team Members", value: "50+" },
  { label: "Nationalities", value: "12" },
  { label: "Offices", value: "3" },
  { label: "Funding", value: "$100M" }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <div className="noise-overlay"></div>
      
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <main className="pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Build the Future of <br />
              <span className="text-primary ai-glitch" data-text="Autonomous Flight">Autonomous Flight</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join the team that is redefining aerial infrastructure. We are looking for visionaries, engineers, and pilots to help us scale ADAS globally.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#positions">
                <Button size="lg" className="h-12 px-8 text-lg shadow-lg shadow-primary/20">
                  View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="h-12 px-8 text-lg bg-background/50 backdrop-blur-sm">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-y border-border/50 py-8 bg-background/30 backdrop-blur-sm"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make, from engineering trade-offs to how we treat each other.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Safety First", desc: "We never compromise on the safety of our fleet or the communities we operate in." },
                { icon: Zap, title: "Radical Autonomy", desc: "We build systems that think for themselves, reducing human error and increasing efficiency." },
                { icon: Globe, title: "Global Impact", desc: "Our technology solves real-world problems, from disaster response to supply chain logistics." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card depth-card h-full hover:scale-[1.02] transition-transform duration-300 border-border/50">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perks & Benefits</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We take care of our team so they can focus on building the impossible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card border-border/50 hover:bg-background/50 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Jobs List */}
        <section id="positions" className="container mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Open Positions</h2>
              <p className="text-muted-foreground">Find your role in the future of flight.</p>
            </div>
            <Button variant="outline">View All Departments</Button>
          </motion.div>

          <div className="grid gap-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/careers/${job.slug}`}>
                  <Card className="glass-card depth-card hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group border-border/50">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                            {i === 0 && <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">New</span>}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Users className="h-4 w-4" /> {job.dept}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" /> {job.loc}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" /> {job.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" className="group-hover:translate-x-1 transition-transform hidden md:flex">
                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
