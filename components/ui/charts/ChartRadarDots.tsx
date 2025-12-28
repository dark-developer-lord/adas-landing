"use client"

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../chart";

const chartData = [
  { month: "Lidar", desktop: 186 },
  { month: "Radar", desktop: 305 },
  { month: "Optical", desktop: 237 },
  { month: "Thermal", desktop: 273 },
  { month: "Sonar", desktop: 209 },
  { month: "GPS", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Efficiency",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartRadarDots() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <Card><CardContent className="pb-0"><div className="mx-auto aspect-square max-h-[300px]" /></CardContent></Card>;

  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>System Performance</CardTitle>
        <CardDescription>Real-time sensor calibration metrics</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
          <RadarChart data={chartData} width={300} height={300}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} dot={{ r: 4, fillOpacity: 1 }} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">System efficiency optimal <TrendingUp className="h-4 w-4" /></div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">Last diagnostic run</div>
      </CardFooter>
    </Card>
  );
}

export default ChartRadarDots;
