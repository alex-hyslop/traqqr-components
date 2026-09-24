import * as React from "react"
import { cn } from "@/lib/utils"

export interface WideEmptyStateRowProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

function WideEmptyStateRow({ icon, title, description, action, className }: WideEmptyStateRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-lg border border-dashed border-border px-4 py-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {icon ? (
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
            {icon}
          </div>
        ) : null}
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium text-foreground">{title}</p>
          {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export { WideEmptyStateRow }
