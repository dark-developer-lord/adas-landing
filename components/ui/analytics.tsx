"use client"

import ChartBarInteractive from "./charts/ChartBarInteractive";
import ChartRadarDots from "./charts/ChartRadarDots";

export default function Analytics() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartBarInteractive />
        <ChartRadarDots />
      </div>
    </section>
  );
}
