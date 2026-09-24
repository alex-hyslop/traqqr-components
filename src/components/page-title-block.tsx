import * as React from "react"
import { cn } from "@/lib/utils"

export interface PageTitleBlockProps {
  title: string
  description?: string
  actions?: React.ReactNode
  className?: string
}

function PageTitleBlock({ title, description, actions, className }: PageTitleBlockProps) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)}>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </div>
  )
}

export { PageTitleBlock }
