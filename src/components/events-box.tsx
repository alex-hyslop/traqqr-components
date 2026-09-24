import * as React from "react"
import { cn } from "@/lib/utils"

export interface EventItem {
  id: string
  title: string
  timestamp: string
  icon?: React.ReactNode
}

export interface EventsBoxProps {
  events: EventItem[]
  className?: string
}

function EventsBox({ events, className }: EventsBoxProps) {
  return (
    <div className={cn("flex flex-col rounded-lg border border-border", className)}>
      {events.map((event) => (
        <div key={event.id} className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-0">
          {event.icon ? (
            <span className="flex size-6 shrink-0 items-center justify-center text-muted-foreground">
              {event.icon}
            </span>
          ) : null}
          <p className="flex-1 text-sm text-foreground">{event.title}</p>
          <p className="shrink-0 text-xs text-muted-foreground">{event.timestamp}</p>
        </div>
      ))}
    </div>
  )
}

export { EventsBox }
