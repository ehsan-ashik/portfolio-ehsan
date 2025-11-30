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
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 will-change-transform transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                // Glass primary - MORE visible glow with white shadow
                default:
                    "backdrop-blur-xl bg-white/20 dark:bg-white/10 text-black dark:text-white border border-white/40 dark:border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:bg-white/40 dark:hover:bg-white/25 hover:border-white/80 dark:hover:border-white/50 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,255,255,0.4),0_0_0_1px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.3)] hover:brightness-110",

                // Glass destructive - strong red glow
                destructive:
                    "backdrop-blur-xl bg-red-500/20 dark:bg-red-500/15 text-red-900 dark:text-red-100 border border-red-500/40 dark:border-red-500/30 shadow-[0_4px_16px_rgba(239,68,68,0.15)] hover:bg-red-500/40 dark:hover:bg-red-500/30 hover:border-red-500/80 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(239,68,68,0.4)] hover:brightness-110",

                // Glass outline - subtle glow
                outline:
                    "backdrop-blur-lg bg-white/10 dark:bg-white/5 text-black dark:text-white border-2 border-black/20 dark:border-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:bg-white/30 dark:hover:bg-white/20 hover:border-black/40 dark:hover:border-white/50 hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(255,255,255,0.25)] dark:hover:shadow-[0_6px_24px_rgba(255,255,255,0.15)]",

                // Glass secondary - light glow
                secondary:
                    "backdrop-blur-lg bg-white/15 dark:bg-white/8 text-black dark:text-white border border-white/30 dark:border-white/15 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-white/35 dark:hover:bg-white/20 hover:border-white/60 hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(255,255,255,0.3)] hover:brightness-110",

                // Glass ghost - glow appears on hover
                ghost:
                    "text-black dark:text-white hover:backdrop-blur-lg hover:bg-white/25 dark:hover:bg-white/20 hover:border hover:border-white/50 dark:hover:border-white/40 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300",

                // Glass link - minimal glow
                link:
                    "text-black dark:text-white underline-offset-4 hover:underline hover:backdrop-blur-sm hover:bg-white/15 dark:hover:bg-white/10 hover:brightness-110 px-2 -mx-2 rounded-full",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 px-4 text-xs",
                lg: "h-12 px-8 text-base",
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
