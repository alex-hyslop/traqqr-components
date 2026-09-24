import * as React from "react"
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react"
import { cn } from "@/lib/utils"

const STATUS_CONFIG = {
  info: {
    icon: Info,
    classes: "border-border bg-muted text-foreground",
  },
  success: {
    icon: CheckCircle2,
    classes: "border-green-200 bg-green-50 text-green-800 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400",
  },
  warning: {
    icon: TriangleAlert,
    classes: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400",
  },
  error: {
    icon: AlertCircle,
    classes: "border-destructive/40 bg-destructive/10 text-destructive",
  },
} as const

export interface StatusBannerProps {
  status?: keyof typeof STATUS_CONFIG
  message: string
  action?: React.ReactNode
  className?: string
}

function StatusBanner({ status = "info", message, action, className }: StatusBannerProps) {
  const { icon: Icon, classes } = STATUS_CONFIG[status]

  return (
    <div className={cn("flex items-center gap-3 rounded-lg border px-4 py-3", classes, className)}>
      <Icon className="size-4 shrink-0" />
      <p className="flex-1 text-sm">{message}</p>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export { StatusBanner }
