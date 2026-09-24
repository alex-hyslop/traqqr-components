import * as React from "react"
import { cn } from "@/lib/utils"

export interface DangerZoneProps {
  title: string
  description?: string
  action: React.ReactNode
  className?: string
}

function DangerZone({ title, description, action, className }: DangerZoneProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-4",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold text-destructive">{title}</p>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
      <div className="shrink-0">{action}</div>
    </div>
  )
}

export { DangerZone }
