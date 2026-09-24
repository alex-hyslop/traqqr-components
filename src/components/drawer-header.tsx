import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface DrawerHeaderProps {
  title: string
  onClose?: () => void
  className?: string
}

function DrawerHeader({ title, onClose, className }: DrawerHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4 border-b border-border px-4 py-3", className)}>
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      {onClose ? (
        <Button variant="ghost" size="icon" aria-label="Close" onClick={onClose}>
          <X />
        </Button>
      ) : null}
    </div>
  )
}

export { DrawerHeader }
