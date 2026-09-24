import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface IntegrationSupportCardProps {
  icon: React.ReactNode
  title: string
  description?: string
  linkLabel: string
  onLinkClick?: () => void
  className?: string
}

function IntegrationSupportCard({
  icon,
  title,
  description,
  linkLabel,
  onLinkClick,
  className,
}: IntegrationSupportCardProps) {
  return (
    <div className={cn("flex flex-col gap-3 rounded-lg border border-border p-4", className)}>
      <div className="flex size-9 items-center justify-center rounded-md bg-muted text-muted-foreground">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
      <Button variant="link" className="h-auto self-start px-0" onClick={onLinkClick}>
        {linkLabel}
      </Button>
    </div>
  )
}

export { IntegrationSupportCard }
