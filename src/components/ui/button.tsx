import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 backdrop-blur-lg border",
  {
    variants: {
      variant: {
        default: "bg-brand-yellow backdrop-blur-lg border border-brand-yellow text-brand-black hover:bg-brand-yellow/90 hover:border-brand-yellow shadow-soft hover:shadow-glow font-semibold",
        destructive:
          "bg-destructive backdrop-blur-lg border border-destructive text-white hover:bg-destructive/90 hover:border-destructive shadow-soft font-semibold",
        outline:
          "bg-white/90 backdrop-blur-lg border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 shadow-soft font-semibold",
        secondary:
          "bg-gray-200 backdrop-blur-lg border border-gray-300 text-gray-900 hover:bg-gray-300 hover:border-gray-400 shadow-soft font-semibold",
        ghost: "bg-transparent backdrop-blur-lg border border-transparent text-gray-900 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 font-semibold",
        link: "text-brand-blue underline-offset-4 hover:underline bg-transparent border-transparent backdrop-blur-none font-semibold",
        brand: "bg-brand-yellow backdrop-blur-lg border border-brand-yellow text-brand-black hover:bg-brand-yellow/90 hover:border-brand-yellow shadow-soft hover:shadow-glow font-semibold",
        brandOutline: "bg-transparent backdrop-blur-lg border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow/20 hover:text-brand-yellow hover:border-brand-yellow shadow-soft font-semibold",
        accent: "bg-brand-blue backdrop-blur-lg border border-brand-blue text-white hover:bg-brand-blue/90 hover:border-brand-blue shadow-soft hover:shadow-glow font-semibold",
        consultation: "bg-brand-yellow backdrop-blur-lg border border-brand-yellow text-brand-black hover:bg-brand-yellow/90 hover:border-brand-yellow shadow-soft hover:shadow-glow font-semibold",
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
