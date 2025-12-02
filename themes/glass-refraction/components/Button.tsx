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
 */

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                // Glass primary - "Thick/Frosted" Glass
                // High blur, visible opacity, distinct border = "Heavy" feel
                default:
                    "backdrop-blur-xl bg-white/25 dark:bg-white/15 text-black dark:text-white border border-white/40 dark:border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-white/50 dark:hover:bg-white/30 hover:border-white/80 hover:shadow-[0_8px_32px_rgba(255,255,255,0.3)] transition-all duration-300 font-semibold",

                // Glass destructive - strong visible hover
                destructive:
                    "backdrop-blur-xl bg-red-500/20 dark:bg-red-500/15 text-red-900 dark:text-red-100 border border-red-500/40 dark:border-red-500/30 shadow-[0_4px_16px_rgba(239,68,68,0.15)] hover:bg-red-500/60 dark:hover:bg-red-500/50 hover:border-red-500/95 hover:border-2 hover:shadow-[0_12px_48px_rgba(239,68,68,0.6)] hover:brightness-120",

                // Glass outline - VERY visible hover
                outline:
                    "backdrop-blur-lg bg-white/10 dark:bg-white/5 text-black dark:text-white border border-white/40 dark:border-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:bg-white/50 dark:hover:bg-white/35 hover:border-white/95 hover:border-2 hover:shadow-[0_12px_48px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_12px_48px_rgba(255,255,255,0.3)]",

                // Glass secondary - "Thin/Clear" Glass
                // Low blur, barely visible opacity, subtle border = "Light" feel
                secondary:
                    "backdrop-blur-md bg-white/5 dark:bg-white/5 text-black/80 dark:text-white/90 border border-black/10 dark:border-white/10 shadow-none hover:bg-white/20 dark:hover:bg-white/15 hover:border-black/20 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-all duration-300",

                // Glass ghost - visible glow on hover
                ghost:
                    "text-black dark:text-white hover:backdrop-blur-lg hover:bg-white/45 dark:hover:bg-white/35 hover:border-white/90 hover:border-2 hover:shadow-[0_8px_36px_rgba(255,255,255,0.4)] dark:hover:shadow-[0_8px_36px_rgba(255,255,255,0.3)] transition-all duration-300",

                // Glass link - minimal glow
                link:
                    "text-black dark:text-white underline-offset-4 hover:underline hover:backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/15 hover:brightness-115 px-2 -mx-2 rounded-full",
            },
            size: {
                default: "h-10 px-8 py-2",
                sm: "h-9 px-6 text-xs",
                lg: "h-12 px-10 text-base",
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
