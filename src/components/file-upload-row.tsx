import { File, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { StatusPill } from "@/components/status-pill"

export interface FileUploadRowProps {
  fileName: string
  fileSize: string
  status?: "default" | "success" | "warning" | "error"
  statusLabel?: string
  onRemove?: () => void
  className?: string
}

function FileUploadRow({
  fileName,
  fileSize,
  status = "default",
  statusLabel,
  onRemove,
  className,
}: FileUploadRowProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4 rounded-lg border border-border px-3 py-2", className)}>
      <div className="flex min-w-0 items-center gap-3">
        <File className="size-4 shrink-0 text-muted-foreground" />
        <div className="flex min-w-0 flex-col">
          <p className="truncate text-sm font-medium text-foreground">{fileName}</p>
          <p className="text-xs text-muted-foreground">{fileSize}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {statusLabel ? <StatusPill status={status}>{statusLabel}</StatusPill> : null}
        {onRemove ? (
          <Button variant="ghost" size="icon-sm" aria-label="Remove file" onClick={onRemove}>
            <X />
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export { FileUploadRow }
