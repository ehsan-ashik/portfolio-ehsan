import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[80px] w-full rounded-lg border border-white/30 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md px-3 py-2 text-base text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:border-white/60 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export { Textarea }
