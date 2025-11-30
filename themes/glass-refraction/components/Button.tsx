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
                // Glass primary - solid background with glassmorphism
                default:
                    "backdrop-blur-md bg-[hsl(210,10%,23%)] dark:bg-[hsl(210,15%,75%)] text-white dark:text-black border border-white/20 dark:border-black/20 shadow-lg shadow-black/10 hover:bg-[hsl(210,10%,18%)] dark:hover:bg-[hsl(210,15%,80%)] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20",

                // Glass destructive - muted red with good contrast
                destructive:
                    "backdrop-blur-md bg-[hsl(0,45%,58%)] dark:bg-[hsl(0,50%,45%)] text-white dark:text-white border border-white/20 dark:border-white/20 shadow-lg shadow-black/10 hover:bg-[hsl(0,50%,50%)] dark:hover:bg-[hsl(0,55%,40%)] hover:-translate-y-0.5 hover:shadow-xl",

                // Glass outline - translucent with dark text on light, light text on dark
                outline:
                    "backdrop-blur-md bg-white/60 dark:bg-black/40 text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,95%)] border-2 border-[hsl(0,0%,90%)] dark:border-[hsl(0,0%,20%)] hover:bg-white/80 dark:hover:bg-black/60 hover:-translate-y-0.5 shadow-sm hover:shadow-md",

                // Glass secondary - light gray glass
                secondary:
                    "backdrop-blur-lg bg-[hsl(0,0%,96%)]/90 dark:bg-[hsl(0,0%,15%)]/90 text-[hsl(0,0%,15%)] dark:text-[hsl(0,0%,95%)] border border-black/10 dark:border-white/10 shadow-md shadow-black/5 hover:bg-[hsl(0,0%,94%)] dark:hover:bg-[hsl(0,0%,18%)] hover:-translate-y-0.5",

                // Glass ghost - only appears on hover
                ghost:
                    "text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,95%)] hover:backdrop-blur-md hover:bg-[hsl(30,5%,95%)]/70 dark:hover:bg-[hsl(210,10%,20%)]/70 hover:text-[hsl(0,0%,15%)] dark:hover:text-[hsl(0,0%,95%)] hover:-translate-y-0.5",

                // Glass link - primary color text
                link:
                    "text-[hsl(210,10%,23%)] dark:text-[hsl(210,15%,75%)] underline-offset-4 hover:underline hover:backdrop-blur-sm hover:bg-[hsl(210,10%,23%)]/10 dark:hover:bg-[hsl(210,15%,75%)]/10 px-1 -mx-1 rounded",
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
