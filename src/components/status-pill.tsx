import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const STATUS_CLASSES: Record<string, string> = {
  default: "",
  success: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
  warning: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  error: "bg-destructive/10 text-destructive dark:bg-destructive/20",
  neutral: "bg-muted text-muted-foreground",
}

export interface StatusPillProps extends React.ComponentProps<"span"> {
  status?: "default" | "success" | "warning" | "error" | "neutral"
}

function StatusPill({ status = "default", className, children, ...props }: StatusPillProps) {
  return (
    <Badge
      variant={status === "default" ? "default" : "outline"}
      className={cn("border-transparent", STATUS_CLASSES[status], className)}
      {...props}
    >
      {children}
    </Badge>
  )
}

export { StatusPill }
