import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface SnippetRowProps {
  snippet: string
  className?: string
}

function SnippetRow({ snippet, className }: SnippetRowProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className={cn("flex items-center justify-between gap-3 rounded-lg border border-border bg-muted px-3 py-2", className)}>
      <code className="truncate font-mono text-sm text-foreground">{snippet}</code>
      <Button variant="ghost" size="icon-sm" aria-label="Copy" onClick={handleCopy}>
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  )
}

export { SnippetRow }
