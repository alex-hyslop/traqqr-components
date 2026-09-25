import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check, ChevronRight, Copy, Radio, Shield, Upload, Wifi, X } from 'lucide-react'
import { AppShell } from '@/components/traqqr/app-shell'
import { PageHeader } from '@/components/traqqr/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Kbd } from '@/components/ui/kbd'
import { Item, ItemContent, ItemMedia, ItemTitle, ItemDescription, ItemActions } from '@/components/ui/item'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const FEATURES = [
  'Ad blocker bypass',
  'First-Party cookies',
  'Same-origin requests',
  'HMAC-signed requests',
  'Real visitor IP forwarding',
  'Event tracking',
  'Device fingerprinting',
  'Facebook CAPI forwarding',
]
const STANDARD_SUPPORTED = new Set([
  'Event tracking',
  'Device fingerprinting',
  'Facebook CAPI forwarding',
])

const meta = {
  title: 'Pages/Tools',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ReverseProxy: Story = {
  name: 'Reverse Proxy',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4171-10777',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Reverse Proxy">
        <PageHeader
          title="First-Party Reverse Proxy"
          description="Manage your First-Party Reverse Proxies across all your sites."
        />
        <Card className="w-full items-center gap-4 bg-card-translucent px-16 py-10 text-center">
          <CardHeader className="items-center px-4 text-center">
            <CardTitle className="text-lg font-sans">Cloudflare Required</CardTitle>
            <CardDescription className="font-mono">
              Connect your Cloudflare account to deploy your First-Party Reverse Proxy with one
              click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button shape="rounded">
              Connect Cloudflare <ChevronRight data-icon="inline-end" />
            </Button>
          </CardContent>
        </Card>
        <Card className="w-full bg-card-translucent py-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-sans">
              <Shield className="size-5" /> Why First-Party Reverse Proxy?
            </CardTitle>
            <CardDescription>
              Route tracking through your own domain for maximum data quality and ad blocker
              resilience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead className="w-[200px] text-center">Standard</TableHead>
                  <TableHead className="w-[240px] text-center">First-Party Reverse Proxy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {FEATURES.map((f) => (
                  <TableRow key={f}>
                    <TableCell>{f}</TableCell>
                    <TableCell className="text-center">
                      {STANDARD_SUPPORTED.has(f) ? (
                        <Check className="mx-auto size-4 text-foreground" />
                      ) : (
                        <X className="mx-auto size-4 text-destructive" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto size-4 text-foreground" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </AppShell>
    </div>
  ),
}

export const EventInspector: Story = {
  name: 'Event Inspector',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4172-7946',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Event Inspector">
        <PageHeader title="Event Inspector" />
        <Card className="w-full gap-6 bg-card-translucent pt-6">
          <CardHeader>
            <CardTitle>Analyze Events</CardTitle>
            <CardDescription>
              Capture Meta Pixel events on your site, then upload or paste the payload to inspect
              it.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 rounded-lg bg-foreground-subtle p-6">
              <p className="text-base font-sans">How to capture events</p>
              <div className="flex flex-col gap-1">
                <Item size="sm">
                  <ItemMedia>
                    <Badge className="rounded-full">1</Badge>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="flex items-center gap-2 font-mono font-normal">
                      Add this to your website URL: <Kbd>?tqrInspector=1</Kbd>
                    </ItemTitle>
                    <ItemDescription>
                      Use &amp;tqrInspector=1 if your URL already has parameters.
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button size="sm" variant="outline">
                      <Copy data-icon="inline-start" /> Copy
                    </Button>
                  </ItemActions>
                </Item>
                <Item size="sm">
                  <ItemMedia>
                    <Badge className="rounded-full">2</Badge>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="font-mono font-normal">
                      Browse your site — the inspector captures Meta Pixel events automatically
                    </ItemTitle>
                  </ItemContent>
                </Item>
                <Item size="sm">
                  <ItemMedia>
                    <Badge className="rounded-full">3</Badge>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="font-mono font-normal">
                      Click &apos;Download Meta Pixel Payload&apos; on the overlay
                    </ItemTitle>
                  </ItemContent>
                </Item>
                <Item size="sm">
                  <ItemMedia>
                    <Badge className="rounded-full">4</Badge>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="font-mono font-normal">
                      Upload or paste the downloaded JSON below
                    </ItemTitle>
                  </ItemContent>
                </Item>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Button variant="outline" shape="rounded">
                  Upload JSON File <Upload data-icon="inline-end" />
                </Button>
                <span className="text-sm font-mono text-muted-foreground">
                  or drag &amp; drop onto this card
                </span>
              </div>
              <Textarea placeholder="Paste inspector JSON here or upload a file..." className="h-[140px]" />
            </div>
          </CardContent>
          <CardFooter className="justify-end rounded-b-xl bg-muted py-4">
            <Button>
              Inspect <ChevronRight data-icon="inline-end" />
            </Button>
          </CardFooter>
        </Card>
      </AppShell>
    </div>
  ),
}

export const LiveFeed: Story = {
  name: 'Live Feed',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4174-8210',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Live Feed">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Sites</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Live Feed</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <PageHeader title="Live Feed" description="Real-time events from your site" />
        <div className="flex w-full items-center gap-2 rounded-lg border bg-card-translucent p-4">
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <Wifi className="size-4 text-emerald-400" />
              <span className="text-sm font-mono text-emerald-400">Connected</span>
            </div>
            <span className="text-sm font-mono text-foreground">Receiving live events</span>
          </div>
          <Button variant="outline">Disconnect</Button>
        </div>
        <Card className="w-full bg-card-translucent py-6">
          <CardHeader>
            <CardTitle>Recent Events</CardTitle>
            <CardDescription>Events from your site appear here as they happen.</CardDescription>
          </CardHeader>
          <CardContent>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Radio />
                </EmptyMedia>
                <EmptyTitle>Waiting for events…</EmptyTitle>
              </EmptyHeader>
            </Empty>
          </CardContent>
        </Card>
      </AppShell>
    </div>
  ),
}
