import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export type BentoCardProps = {
  Icon?: React.ComponentType<any>
  name: string
  description: string
  href?: string
  cta?: string
  background?: React.ReactNode
  className?: string
}

export function BentoCard({ Icon, name, description, href = "#", cta = "Learn more", background, className }: BentoCardProps) {
  const Content = (
    <article className={cn("relative overflow-hidden rounded-lg border border-border bg-card p-6 transform-gpu transition-transform duration-300 will-change-transform hover:shadow-lg hover:scale-105 hover:-translate-y-1", className)}>
      {background && <div className="absolute inset-0 pointer-events-none">{background}</div>}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {Icon ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
            ) : null}
            <h3 className="text-base font-semibold text-foreground">{name}</h3>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{description}</p>

        <div className="mt-auto pt-4">
          <div className="text-sm font-medium text-primary">{cta} →</div>
        </div>
      </div>
    </article>
  )

  return href ? <Link href={href}>{Content}</Link> : Content
}

export default BentoGrid
