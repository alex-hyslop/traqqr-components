import * as React from "react"
import { cn } from "@/lib/utils"

export interface DrawerFooterProps {
  children: React.ReactNode
  className?: string
}

function DrawerFooter({ children, className }: DrawerFooterProps) {
  return (
    <div className={cn("flex items-center justify-end gap-2 border-t border-border px-4 py-3", className)}>
      {children}
    </div>
  )
}

export { DrawerFooter }
