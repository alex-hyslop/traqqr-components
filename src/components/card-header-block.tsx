import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardHeaderBlockProps {
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

function CardHeaderBlock({ title, description, action, className }: CardHeaderBlockProps) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)}>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export { CardHeaderBlock }
