'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Rocket,
  Globe,
  Award,
  BarChart3,
  Lock,
  Zap,
  Shield,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

const metrics = [
  { label: 'Market Size (TAM)', value: '$127B', subtext: 'Global drone market by 2030', icon: Globe },
  { label: 'YoY Growth', value: '312%', subtext: 'Revenue growth Q4 2025', icon: TrendingUp },
  { label: 'Active Customers', value: '2,400+', subtext: 'Across 45 countries', icon: Users },
  { label: 'ARR', value: '$8.4M', subtext: 'Annual recurring revenue', icon: DollarSign },
]

const milestones = [
  { quarter: 'Q1 2024', achievement: 'Seed funding $2.5M, Product launch' },
  { quarter: 'Q2 2024', achievement: '500 enterprise pilots deployed' },
  { quarter: 'Q3 2024', achievement: 'Series A $12M, EU expansion' },
  { quarter: 'Q4 2024', achievement: 'AI breakthrough: 99.4% accuracy' },
  { quarter: 'Q1 2025', achievement: '2,000 customers, $5M ARR' },
  { quarter: 'Q4 2025', achievement: '$8.4M ARR, EBITDA positive' },
]

const competitors = [
  { name: 'DJI Enterprise', price: '$15K', ai: 'Basic', autonomy: 'Limited', support: 'Standard' },
  { name: 'Skydio', price: '$25K', ai: 'Good', autonomy: 'Good', support: 'Good' },
  { name: 'Parrot ANAFI', price: '$8K', ai: 'Basic', autonomy: 'Limited', support: 'Limited' },
  { name: 'ADAS (Us)', price: '$18K', ai: 'Advanced', autonomy: 'Full', support: 'Premium', highlight: true },
]

const teamMembers = [
  { name: 'Sultonsho Nazarshoev', role: 'CEO & Co-Founder', background: 'Ex-Tesla AI, MIT' },
  { name: 'Dr. Sarah Chen', role: 'CTO', background: 'PhD Robotics, Google X' },
  { name: 'Michael Rodriguez', role: 'VP Engineering', background: 'Ex-Amazon Prime Air' },
  { name: 'Emily Watson', role: 'Head of Growth', background: 'Ex-Stripe, Stanford MBA' },
]

const useOfFunds = [
  { category: 'R&D & Product', percentage: 40, amount: '$8M' },
  { category: 'Sales & Marketing', percentage: 30, amount: '$6M' },
  { category: 'Operations & Infrastructure', percentage: 20, amount: '$4M' },
  { category: 'Team Expansion', percentage: 10, amount: '$2M' },
]

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-primary to-purple-500">Series B • $20M Target</Badge>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Autonomous Drones Meet AI
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Revolutionizing agriculture, construction, and logistics with fully autonomous drone systems powered by
              advanced AI.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="gradient" className="gap-2">
                Download Pitch Deck <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Schedule Meeting <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="backdrop-blur-sm bg-card/95 border-2 hover:border-primary/50 transition-all">
                    <CardContent className="pt-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold mb-1">{metric.value}</div>
                      <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{metric.subtext}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="backdrop-blur-sm bg-card/95">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 mb-4">
                  <Target className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-2xl">The Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Traditional drone operations require skilled pilots, manual flight planning, and hours of post-flight
                  data processing. This limits scalability and ROI.
                </p>
                <ul className="space-y-3">
                  {[
                    'Labor costs: $85-150/hour for certified pilots',
                    'Safety incidents cost industry $2.1B annually',
                    'Data processing delays reduce decision speed by 48 hours',
                    '60% of enterprises cite "lack of automation" as barrier',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/95 border-primary/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  ADAS delivers end-to-end autonomous drone systems with real-time AI processing, requiring zero pilot
                  intervention and instant actionable insights.
                </p>
                <ul className="space-y-3">
                  {[
                    'Full autonomy: No pilot required, 95% cost reduction',
                    'AI-powered: Real-time object detection, 99.4% accuracy',
                    'Instant insights: Live data processing and alerts',
                    'Scalable: Manage 100+ drones from one dashboard',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Traction Timeline */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Proven Traction</Badge>
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">From seed to Series B in 18 months</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-purple-500/50" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.quarter}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="backdrop-blur-sm bg-card/95 hover:border-primary/50 transition-all">
                      <CardContent className="pt-6">
                        <div className="font-bold text-primary mb-2">{milestone.quarter}</div>
                        <div className="text-sm">{milestone.achievement}</div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Market Position</Badge>
            <h2 className="text-4xl font-bold mb-4">Competitive Advantage</h2>
            <p className="text-xl text-muted-foreground">Superior technology at competitive pricing</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 px-4 font-semibold">Company</th>
                  <th className="text-center py-4 px-4 font-semibold">Price Point</th>
                  <th className="text-center py-4 px-4 font-semibold">AI Capability</th>
                  <th className="text-center py-4 px-4 font-semibold">Autonomy Level</th>
                  <th className="text-center py-4 px-4 font-semibold">Support</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr
                    key={competitor.name}
                    className={`border-b border-border/50 transition-colors ${
                      competitor.highlight
                        ? 'bg-primary/5 font-semibold'
                        : 'hover:bg-muted/30'
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {competitor.name}
                        {competitor.highlight && (
                          <Badge variant="default" className="bg-primary">You</Badge>
                        )}
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">{competitor.price}</td>
                    <td className="text-center py-4 px-4">
                      <Badge variant={competitor.ai === 'Advanced' ? 'default' : 'outline'}>
                        {competitor.ai}
                      </Badge>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Badge variant={competitor.autonomy === 'Full' ? 'default' : 'outline'}>
                        {competitor.autonomy}
                      </Badge>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Badge variant={competitor.support === 'Premium' ? 'default' : 'outline'}>
                        {competitor.support}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Revenue Streams</Badge>
            <h2 className="text-4xl font-bold mb-4">Diversified Business Model</h2>
            <p className="text-xl text-muted-foreground">Multiple revenue streams drive sustainable growth</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="backdrop-blur-sm bg-card/95">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hardware Sales</CardTitle>
                <CardContent className="px-0">
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <p className="text-sm text-muted-foreground">
                    ADAS X1 drones, sensors, and accessories with 65% gross margins
                  </p>
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="backdrop-blur-sm bg-card/95 border-primary/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SaaS Platform</CardTitle>
                <CardContent className="px-0">
                  <div className="text-4xl font-bold mb-2">45%</div>
                  <p className="text-sm text-muted-foreground">
                    Recurring subscriptions, 92% retention rate, 85% gross margins
                  </p>
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="backdrop-blur-sm bg-card/95">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Services</CardTitle>
                <CardContent className="px-0">
                  <div className="text-4xl font-bold mb-2">15%</div>
                  <p className="text-sm text-muted-foreground">
                    Training, integration, and managed services with high customer LTV
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Series B Round</Badge>
            <h2 className="text-4xl font-bold mb-4">$20M Use of Funds</h2>
            <p className="text-xl text-muted-foreground">Strategic allocation to accelerate growth</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {useOfFunds.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="backdrop-blur-sm bg-card/95">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold">{item.category}</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-primary">{item.percentage}%</span>
                          <span className="text-sm text-muted-foreground">{item.amount}</span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-purple-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="backdrop-blur-sm bg-card/95 border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl">18-Month Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    milestone: 'Q1-Q2 2026: X2 Product Launch',
                    description: 'Next-gen hardware with 2x flight time and advanced sensors',
                  },
                  {
                    milestone: 'Q2-Q3 2026: International Expansion',
                    description: 'Launch in APAC and LATAM markets, 50+ new enterprise accounts',
                  },
                  {
                    milestone: 'Q3-Q4 2026: AI Platform 2.0',
                    description: 'Predictive analytics, computer vision API, third-party integrations',
                  },
                  {
                    milestone: 'Q4 2026: Scale to $25M ARR',
                    description: '5,000+ customers, team expansion to 120 employees',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1">{item.milestone}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="text-4xl font-bold mb-4">World-Class Team</h2>
            <p className="text-xl text-muted-foreground">Proven track record in AI, robotics, and scaling startups</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-sm bg-card/95 hover:border-primary/50 transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-purple-500 mx-auto mb-4" />
                    <div className="font-bold mb-1">{member.name}</div>
                    <div className="text-sm text-primary mb-2">{member.role}</div>
                    <div className="text-xs text-muted-foreground">{member.background}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <Badge className="mb-6">Join Us</Badge>
            <h2 className="text-5xl font-bold mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're raising $20M to accelerate product development, expand internationally, and capture market share in
              the fastest-growing segment of the drone industry.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="gradient" className="gap-2">
                <Lock className="h-5 w-5" />
                Access Data Room
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Schedule Call <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 flex-wrap text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>YC W24</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>45 Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
