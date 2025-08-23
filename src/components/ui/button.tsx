import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-glass btn-shine font-semibold",
        destructive: "relative overflow-hidden rounded-xl backdrop-blur-md bg-red-500/80 text-white border border-red-500/50 hover:bg-red-500 transition-all duration-200",
        outline: "btn-glass bg-[hsl(var(--brand-yellow)/0.06)] border-[hsl(var(--brand-yellow)/0.35)] text-foreground hover:bg-[hsl(var(--brand-yellow)/0.12)]",
        secondary: "relative overflow-hidden rounded-xl backdrop-blur-md bg-[hsl(var(--secondary)/0.8)] text-secondary-foreground border border-[hsl(var(--secondary)/0.4)] hover:bg-[hsl(var(--secondary)/0.9)] transition-all duration-200",
        ghost: "relative overflow-hidden rounded-xl backdrop-blur-sm text-foreground hover:bg-[hsl(var(--brand-yellow)/0.10)] transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline",
        brand: "btn-glass btn-shine font-semibold",
        brandOutline: "btn-glass bg-[hsl(var(--brand-yellow)/0.06)] border-[hsl(var(--brand-yellow)/0.35)] text-brand-yellow hover:bg-[hsl(var(--brand-yellow)/0.12)] hover:text-brand-black",
        accent: "relative overflow-hidden rounded-xl backdrop-blur-md bg-[hsl(var(--accent)/0.22)] text-white border border-[hsl(var(--accent)/0.45)] hover:bg-[hsl(var(--accent)/0.30)] transition-all duration-200",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-3",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
