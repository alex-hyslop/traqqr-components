import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { StatusPill } from "@/components/status-pill"

export interface InvoiceRowProps {
  invoiceNumber: string
  date: string
  amount: string
  status: "success" | "warning" | "error" | "neutral"
  statusLabel: string
  onDownload?: () => void
  className?: string
}

function InvoiceRow({ invoiceNumber, date, amount, status, statusLabel, onDownload, className }: InvoiceRowProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4 border-b border-border py-3 last:border-0", className)}>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-foreground">{invoiceNumber}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm font-medium text-foreground">{amount}</p>
        <StatusPill status={status}>{statusLabel}</StatusPill>
        <Button variant="outline" size="sm" onClick={onDownload}>
          Download
        </Button>
      </div>
    </div>
  )
}

export { InvoiceRow }
