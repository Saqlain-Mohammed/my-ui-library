import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "../../lib/utils"

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <ArrowRight className="w-4 h-4" />
      </button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton }