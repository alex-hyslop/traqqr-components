import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface IdentityRowProps {
  name: string
  secondaryText?: string
  avatarSrc?: string
  avatarFallback?: string
  action?: React.ReactNode
  className?: string
}

function IdentityRow({ name, secondaryText, avatarSrc, avatarFallback, action, className }: IdentityRowProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <div className="flex items-center gap-3">
        <Avatar>
          {avatarSrc ? <AvatarImage src={avatarSrc} alt={name} /> : null}
          <AvatarFallback>{avatarFallback ?? name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-foreground">{name}</p>
          {secondaryText ? <p className="text-sm text-muted-foreground">{secondaryText}</p> : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export { IdentityRow }
