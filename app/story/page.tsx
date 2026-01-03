'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
  Lightbulb,
  Rocket,
  Users,
  Target,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Heart,
  Code,
  Cpu,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'

const timeline = [
  {
    year: '2020',
    quarter: 'Q2',
    title: 'The Spark',
    description: 'Frustration with manual drone operations in agriculture leads to an idea',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    year: '2021',
    quarter: 'Q3',
    title: 'First Prototype',
    description: 'Built initial AI navigation system in a garage with $5K budget',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2022',
    quarter: 'Q1',
    title: 'Proof of Concept',
    description: 'First successful autonomous 10km flight without human intervention',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2023',
    quarter: 'Q2',
    title: 'Pilot Program',
    description: '50 farms in California test the system, 92% satisfaction rate',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: 'Seed Funding',
    description: 'Raised $2.5M to scale operations and build core team',
    icon: TrendingUp,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    year: '2024',
    quarter: 'Q4',
    title: 'Product Launch',
    description: 'ADAS X1 officially launched, 500+ pre-orders in first month',
    icon: Sparkles,
    color: 'from-violet-500 to-purple-500',
  },
  {
    year: '2025',
    quarter: 'Q2',
    title: 'Global Expansion',
    description: 'Expanded to 15 countries across 3 continents',
    icon: Globe,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    year: '2025',
    quarter: 'Q4',
    title: 'Series A',
    description: '$12M raised to accelerate AI development and market penetration',
    icon: Award,
    color: 'from-orange-500 to-red-500',
  },
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Every decision is guided by our mission to democratize aerial autonomy and empower industries.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We push boundaries in AI, robotics, and edge computing to solve impossible problems.',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    description: 'Our customers success is our success. We build features they actually need.',
  },
  {
    icon: Users,
    title: 'Team Excellence',
    description: 'We hire exceptional people who care deeply about impact and craftsmanship.',
  },
]

const metrics = [
  { label: 'Countries', value: '45+', subtext: 'Global presence' },
  { label: 'Customers', value: '2,400+', subtext: 'Trust our platform' },
  { label: 'Flight Hours', value: '1.2M+', subtext: 'Autonomous missions' },
  { label: 'Team Members', value: '87', subtext: 'World-class talent' },
]

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-primary to-purple-500">Our Story</Badge>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              From Garage to Global
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              How a frustration with manual drone operations evolved into a mission to transform industries with
              autonomous AI systems.
            </p>
          </motion.div>

          {/* Current Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-sm bg-card/95 border-2 hover:border-primary/50 transition-all text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm font-semibold mb-1">{metric.label}</div>
                    <div className="text-xs text-muted-foreground">{metric.subtext}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">The Beginning</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every great company starts with a problem that needs solving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">The Problem We Saw</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In 2020, our founder was working with farmers who were paying $150/hour for drone pilots to survey
                their fields. The process was slow, expensive, and required scheduling weeks in advance. Meanwhile,
                the drones were capable of so much more—they just needed the right AI to guide them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That frustration sparked a question:{' '}
                <span className="text-foreground font-semibold">
                  &ldquo;Why can&apos;t drones fly themselves and make intelligent decisions in real-time?&rdquo;
                </span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Armed with a background in AI from MIT and experience at Tesla&apos;s Autopilot team, our founder spent
                nights and weekends building the first prototype in a garage. The vision was clear: make autonomous
                aerial systems accessible to everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-sm bg-card/95 border-primary/50">
                <CardContent className="pt-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Cpu className="h-24 w-24 text-primary/50" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm">
                        <strong>$5,000</strong> initial investment (personal savings)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm">
                        <strong>6 months</strong> from idea to first autonomous flight
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm">
                        <strong>2 people</strong> in a garage with a dream
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm">
                        <strong>143 failed flights</strong> before the breakthrough
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold mb-4">From Zero to Hero</h2>
            <p className="text-xl text-muted-foreground">Key milestones that shaped ADAS</p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-purple-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={`${item.year}-${item.quarter}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ml-20 md:ml-0`}>
                      <Card className="backdrop-blur-sm bg-card/95 hover:border-primary/50 transition-all">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={`bg-gradient-to-r ${item.color} text-white`}>
                              {item.year} {item.quarter}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot/icon */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-xl border-4 border-background z-10">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="backdrop-blur-sm bg-card/95 hover:border-primary/50 transition-all h-full">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">The Future</Badge>
            <h2 className="text-4xl font-bold mb-4">Where We&apos;re Headed</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-sm bg-card/95 border-primary/50 h-full">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-2">2026</div>
                  <CardTitle className="text-xl">Scale Phase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Launch ADAS X2 with 2x flight time</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Expand to 75+ countries</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Reach 10,000 active customers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">$50M ARR milestone</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="backdrop-blur-sm bg-card/95 border-primary/50 h-full">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-2">2027</div>
                  <CardTitle className="text-xl">Innovation Phase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Swarm intelligence for multi-drone coordination</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Launch AI marketplace for third-party models</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Introduce predictive maintenance AI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Open API ecosystem</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="backdrop-blur-sm bg-card/95 border-primary/50 h-full">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-2">2030</div>
                  <CardTitle className="text-xl">Vision Realized</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">100,000+ autonomous drones deployed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Industry standard for aerial autonomy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">Zero-accident autonomous flight record</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">IPO and public company status</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10" />
        <div className="container mx-auto max-w-4xl relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re just getting started. Join us as a customer, partner, investor, or team member and help shape the
              future of autonomous systems.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="gradient" className="gap-2" asChild>
                <Link href="/careers">
                  Join Our Team <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/contact">
                  Get in Touch <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
