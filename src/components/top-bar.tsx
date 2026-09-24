import * as React from "react"
import { cn } from "@/lib/utils"

export interface TopBarProps {
  title: string
  actions?: React.ReactNode
  className?: string
}

function TopBar({ title, actions, className }: TopBarProps) {
  return (
    <header className={cn("flex items-center justify-between gap-4 border-b border-border px-4 py-3", className)}>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </header>
  )
}

export { TopBar }
