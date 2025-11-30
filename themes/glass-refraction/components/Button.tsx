import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Glass-Refraction Theme Button Component
 * 
 * All variants redefined with glassmorphism effects:
 * - Backdrop blur
 * - Semi-transparent backgrounds
 * - Smooth animations (150ms)
 * - Hover lift effects
 */

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                // Glass primary button - main CTA with strong glass effect
                default:
                    "backdrop-blur-md bg-primary/80 text-primary-foreground border border-primary/30 shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30",

                // Glass destructive - red-tinted glass for dangerous actions
                destructive:
                    "backdrop-blur-md bg-destructive/70 text-destructive-foreground border border-destructive/30 shadow-lg shadow-destructive/20 hover:bg-destructive/80 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-destructive/30",

                // Glass outline - subtle glass with prominent border
                outline:
                    "backdrop-blur-md bg-background/50 border-2 border-border/60 hover:bg-background/70 hover:border-border/80 hover:-translate-y-0.5 shadow-sm hover:shadow-md",

                // Glass secondary - lighter glass effect
                secondary:
                    "backdrop-blur-lg bg-secondary/60 text-secondary-foreground border border-secondary/30 shadow-md shadow-black/5 hover:bg-secondary/70 hover:-translate-y-0.5",

                // Glass ghost - minimal glass, appears on hover
                ghost:
                    "hover:backdrop-blur-md hover:bg-accent/50 hover:text-accent-foreground hover:-translate-y-0.5 transition-all duration-150",

                // Glass link - underline with subtle glass on hover
                link:
                    "text-primary underline-offset-4 hover:underline hover:backdrop-blur-sm hover:bg-primary/5 px-1 -mx-1 rounded transition-all duration-150",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
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
Button.displayName = "GlassButton"

export { Button, buttonVariants }
