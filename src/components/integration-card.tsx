import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface IntegrationCardProps {
  icon: React.ReactNode
  name: string
  description?: string
  isConnected?: boolean
  onConnect?: () => void
  className?: string
}

function IntegrationCard({ icon, name, description, isConnected, onConnect, className }: IntegrationCardProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4 rounded-lg border border-border p-4", className)}>
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-foreground">{name}</p>
          {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
        </div>
      </div>
      <Button variant={isConnected ? "outline" : "default"} size="sm" onClick={onConnect}>
        {isConnected ? "Connected" : "Connect"}
      </Button>
    </div>
  )
}

export { IntegrationCard }
