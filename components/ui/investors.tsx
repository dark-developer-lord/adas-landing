"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "How we will use investor funds"

const chartData = [
  { name: "R&D (AI & Hardware)", value: 45, fill: "var(--chart-1)" },
  { name: "Global Expansion", value: 25, fill: "var(--chart-2)" },
  { name: "Engineering Talent", value: 15, fill: "var(--chart-3)" },
  { name: "Manufacturing", value: 10, fill: "var(--chart-4)" },
  { name: "Legal & Compliance", value: 5, fill: "var(--chart-5)" },
]

const chartConfig = {
  allocation: { label: "Allocation" },
  product: { label: "R&D (AI & Hardware)", color: "var(--chart-1)" },
  marketing: { label: "Global Expansion", color: "var(--chart-2)" },
  hiring: { label: "Engineering Talent", color: "var(--chart-3)" },
  operations: { label: "Manufacturing", color: "var(--chart-4)" },
  other: { label: "Legal & Compliance", color: "var(--chart-5)" },
} satisfies ChartConfig

export function InvestorsSection() {
  const finance = [
    { line: "R&D (AI & Hardware)", percent: "45%", amount: "$4.5M" },
    { line: "Global Expansion", percent: "25%", amount: "$2.5M" },
    { line: "Engineering Talent", percent: "15%", amount: "$1.5M" },
    { line: "Manufacturing", percent: "10%", amount: "$1.0M" },
    { line: "Legal & Compliance", percent: "5%", amount: "$0.5M" },
  ]

  const colorMap: Record<string, string> = {
    "R&D (AI & Hardware)": "var(--chart-1)",
    "Global Expansion": "var(--chart-2)",
    "Engineering Talent": "var(--chart-3)",
    Manufacturing: "var(--chart-4)",
    "Legal & Compliance": "var(--chart-5)",
  }

  const kpis = [
    { label: "ARR (est)", value: "$5.4M", delta: "+120%" },
    { label: "CAC", value: "$2.5k", delta: "-15%" },
    { label: "LTV", value: "$85k", delta: "+25%" },
    { label: "Runway", value: "24 mo", delta: "Series A" },
  ]

  const traction = [
    "Deployed in 12 countries",
    "Contracted by 3 Defense Ministries",
    "50,000+ Autonomous Flight Hours",
    "FAA & EASA Certified Platform",
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 my-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-2xl font-semibold">Investor Relations</h2>
        <p className="text-muted-foreground mt-1">Strategic allocation and growth metrics.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <Card className="bg-card p-4 h-full">
            <div className="flex flex-col items-center gap-3 h-full justify-center">
              <div className="w-48 h-48 relative">
                <ChartContainer config={chartConfig} className="w-full h-full">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={4}
                        label={false}
                        stroke="transparent"
                        animationDuration={1500}
                      >
                        {chartData.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold">100%</span>
                </div>
              </div>
              <div className="text-sm font-medium mt-2">Fund Allocation</div>
              <div className="mt-4 w-full">
                <ul className="flex flex-col gap-2 text-sm">
                  {chartData.map((c) => (
                    <li key={c.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="inline-block h-3 w-3 rounded" style={{ background: c.fill }} aria-hidden />
                        <span className="text-sm font-medium">{c.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{c.value}%</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>



        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Card className="bg-card h-full">
            <CardHeader className="pb-2">
              <CardTitle className="!text-lg">Finance Model</CardTitle>
              <CardDescription className="mt-1">Planned allocation by category — concise and clear.</CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              <div className="overflow-hidden">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="text-left text-sm text-muted-foreground">
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Allocation</th>
                      <th className="py-3 px-4">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finance.map((r) => {
                      const pct = Number(r.percent.replace("%", ""))
                      const swatch = colorMap[r.line] || "var(--accent)"
                      return (
                        <tr key={r.line} className="border-t border-border">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <span className="inline-block h-3 w-3 rounded" style={{ background: swatch }} aria-hidden />
                              <span className="font-medium">{r.line}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="w-full max-w-[260px]">
                              <div className="h-2 w-full rounded bg-muted">
                                <div className="h-2 rounded" style={{ width: `${pct}%`, background: swatch }} />
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">{r.percent}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{r.amount}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>

            <div className="p-4 border-t border-border">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {kpis.map((k) => (
                  <div key={k.label} className="rounded-md p-3 text-center">
                    <div className="text-xs text-muted-foreground">{k.label}</div>
                    <div className="mt-1 text-lg font-semibold">{k.value}</div>
                    <div className="text-xs text-muted-foreground">{k.delta}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold">Product & Traction</h4>
                <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                  {traction.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestorsSection
