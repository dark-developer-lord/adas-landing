import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const base = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background active:scale-[0.98]"
    
    const variants: Record<string, string> = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
      gradient: "bg-gradient-to-br from-primary via-purple-500 to-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all",
      outline: "border-2 border-border bg-transparent hover:bg-muted/80 hover:border-primary/50",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
      ghost: "hover:bg-accent/80 hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline decoration-2",
    }
    
    const sizes: Record<string, string> = {
      default: "h-10 px-5 py-2 text-sm",
      sm: "h-9 rounded-md px-3.5 text-xs",
      lg: "h-12 rounded-lg px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={cn(base, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
export default Button

