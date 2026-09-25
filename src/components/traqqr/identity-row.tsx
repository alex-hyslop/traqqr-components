import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'

function IdentityRow({
  logo,
  title,
  status,
  description,
}: {
  logo: ReactNode
  title: string
  status?: string
  description?: string
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <div className="flex size-14 items-center justify-center overflow-hidden rounded-xl border">
          {logo}
        </div>
        <div className="flex items-center gap-5">
          <h1 className="text-3xl font-sans text-foreground">{title}</h1>
          {status ? <Badge variant="outline">{status}</Badge> : null}
        </div>
      </div>
      {description ? (
        <p className="mt-4 text-sm font-mono text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

export { IdentityRow }
