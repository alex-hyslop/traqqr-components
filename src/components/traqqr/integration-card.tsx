import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function IntegrationCard({
  name,
  description,
  status = 'Outline',
  logo,
  chevron = true,
  href = '#',
}: {
  name: string
  description: string
  status?: string
  logo?: ReactNode
  chevron?: boolean
  href?: string
}) {
  return (
    <a href={href} className="block w-full max-w-[347px]">
      <Card className="gap-4 p-6 transition-colors hover:bg-muted/30">
        <div className="flex items-center justify-between">
          <div
            className="flex size-14 items-center justify-center overflow-hidden rounded-xl border p-1"
            style={{
              backgroundImage:
                'linear-gradient(-58deg, rgba(56,189,248,0.1) 20%, rgba(255,171,64,0.42) 86%)',
            }}
          >
            {logo}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{status}</Badge>
            {chevron ? <ChevronRight className="size-4 text-muted-foreground" /> : null}
          </div>
        </div>
        <CardHeader className="p-0">
          <CardTitle className="text-base font-sans">{name}</CardTitle>
          <CardDescription className="font-mono">{description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  )
}

export { IntegrationCard }
