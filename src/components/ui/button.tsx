import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 backdrop-blur-lg border",
  {
    variants: {
      variant: {
        default: "bg-primary/20 backdrop-blur-lg border border-primary/30 text-primary hover:bg-primary/30 hover:border-primary/50 shadow-soft hover:shadow-glow",
        destructive:
          "bg-destructive/20 backdrop-blur-lg border border-destructive/30 text-destructive hover:bg-destructive/30 hover:border-destructive/50 shadow-soft",
        outline:
          "bg-background/60 backdrop-blur-lg border border-input/50 hover:bg-accent/20 hover:text-accent-foreground hover:border-accent/30 shadow-soft",
        secondary:
          "bg-secondary/60 backdrop-blur-lg border border-secondary/30 text-secondary-foreground hover:bg-secondary/80 hover:border-secondary/50 shadow-soft",
        ghost: "bg-transparent backdrop-blur-lg border border-transparent hover:bg-accent/20 hover:text-accent-foreground hover:border-accent/30",
        link: "text-primary underline-offset-4 hover:underline bg-transparent border-transparent backdrop-blur-none",
        brand: "bg-brand-yellow/90 backdrop-blur-lg border border-brand-yellow text-brand-black hover:bg-brand-yellow hover:border-brand-yellow/80 shadow-soft hover:shadow-glow font-semibold",
        brandOutline: "bg-transparent backdrop-blur-lg border-2 border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow/20 hover:text-brand-yellow hover:border-brand-yellow/70 shadow-soft",
        accent: "bg-accent/20 backdrop-blur-lg border border-accent/30 text-accent hover:bg-accent/30 hover:border-accent/50 shadow-soft hover:shadow-glow",
        consultation: "bg-brand-yellow/90 backdrop-blur-lg border border-brand-yellow text-brand-black hover:bg-brand-yellow hover:border-brand-yellow/80 shadow-soft hover:shadow-glow font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
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
