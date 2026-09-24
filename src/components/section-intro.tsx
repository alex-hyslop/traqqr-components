import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionIntroProps {
  icon?: React.ReactNode
  title: string
  description?: string
  className?: string
}

function SectionIntro({ icon, title, description, className }: SectionIntroProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-center gap-2">
        {icon ? <span className="flex size-5 shrink-0 items-center justify-center text-foreground">{icon}</span> : null}
        <h2 className="text-lg font-medium text-foreground">{title}</h2>
      </div>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
    </div>
  )
}

export { SectionIntro }
