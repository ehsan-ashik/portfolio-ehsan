import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "backdrop-blur-md bg-white/20 dark:bg-white/10 text-black dark:text-white border-black/10 dark:border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:bg-white/30 dark:hover:bg-white/20",
                secondary:
                    "backdrop-blur-md bg-white/10 dark:bg-white/5 text-black dark:text-white border-black/10 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/15",
                destructive:
                    "backdrop-blur-md bg-red-500/20 dark:bg-red-500/15 text-red-900 dark:text-red-100 border-red-500/40 dark:border-red-500/30 hover:bg-red-500/30 dark:hover:bg-red-500/25",
                outline:
                    "backdrop-blur-sm bg-transparent text-black dark:text-white border-black/10 dark:border-white/30 hover:bg-white/10 dark:hover:bg-white/5",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
