"use client"

import * as React from "react";
import { Tooltip, type TooltipProps } from "recharts";
export type ChartConfig = Record<string, { label: string; color?: string }>;

export function ChartContainer({ config, className, style, children, ...props }: {
  config: ChartConfig;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  // Map config colors to CSS variables like --color-desktop
  const vars: Record<string, any> = {};
  Object.entries(config).forEach(([k, v]) => {
    if (v.color) vars[`--color-${k}`] = v.color;
  });

  return (
    <div className={className} style={{ ...vars, ...style }} {...props}>
      {children}
    </div>
  );
}


export function ChartTooltip(props: TooltipProps<any, any>) {
  return <Tooltip {...props} />;
}

export function ChartTooltipContent({
  labelFormatter,
  nameKey,
  className,
  active,
  payload,
  label,
}: any) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className={className || "p-2 bg-card rounded border border-border text-sm"}>
      <div className="font-medium">{labelFormatter ? labelFormatter(label) : label}</div>
      {payload.map((p: any) => (
        <div key={p.name} className="mt-1 flex items-center justify-between">
          <div className="text-muted-foreground">{p.name}</div>
          <div className="font-semibold">{p.value?.toLocaleString?.() ?? p.value}</div>
        </div>
      ))}
    </div>
  );
}

export default ChartContainer;
