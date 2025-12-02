import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md px-3 py-2 text-base text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/50 focus-visible:border-black/30 dark:focus-visible:border-white/60 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
