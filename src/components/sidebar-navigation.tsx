import * as React from "react"
import { cn } from "@/lib/utils"

export interface SidebarNavigationItem {
  label: string
  value: string
  icon?: React.ReactNode
}

export interface SidebarNavigationProps {
  items: SidebarNavigationItem[]
  activeValue: string
  onSelect?: (value: string) => void
  className?: string
}

function SidebarNavigation({ items, activeValue, onSelect, className }: SidebarNavigationProps) {
  return (
    <nav className={cn("flex w-56 flex-col gap-0.5", className)}>
      {items.map((item) => {
        const isActive = item.value === activeValue
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onSelect?.(item.value)}
            className={cn(
              "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm font-medium transition-colors",
              isActive
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.icon ? <span className="flex size-4 shrink-0 items-center">{item.icon}</span> : null}
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}

export { SidebarNavigation }
