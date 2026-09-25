import type { Meta, StoryObj } from '@storybook/react-vite'
import { Code2, CirclePlus, Search } from 'lucide-react'
import { AppShell } from '@/components/traqqr/app-shell'
import { PageHeader } from '@/components/traqqr/page-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ChevronRight } from 'lucide-react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Kbd } from '@/components/ui/kbd'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const meta = {
  title: 'Pages/Snippets',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Empty_: Story = {
  name: 'Empty',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4142-4999',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Snippets">
        <PageHeader
          title="Snippets"
          description="Manage tracking snippets for your sites."
          actions={
            <Button shape="rounded">
              Create Snippet <CirclePlus data-icon="inline-end" />
            </Button>
          }
        />
        <Empty className="py-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Code2 />
            </EmptyMedia>
            <EmptyTitle>No snippets yet</EmptyTitle>
            <EmptyDescription>Create a snippet to start tracking a site.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </AppShell>
    </div>
  ),
}

export const Populated: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4148-5295',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Snippets">
        <PageHeader
          title="Snippets"
          description="Manage tracking snippets for your sites."
          actions={
            <Button shape="rounded">
              Create Snippet <CirclePlus data-icon="inline-end" />
            </Button>
          }
        />
        <Card className="w-full py-6">
          <CardHeader>
            <CardTitle>1 Snippet</CardTitle>
            <CardDescription>Click a snippet to configure its tracking settings.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="relative w-[360px]">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" placeholder="Filter by label or site…" />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[170px]">Snippet ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="w-[130px]">Site</TableHead>
                  <TableHead>Allowed Domains</TableHead>
                  <TableHead className="w-[130px]">Meta Pixel</TableHead>
                  <TableHead className="w-[130px]">Created</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="cursor-pointer">
                  <TableCell>
                    <Badge variant="secondary">m12zkrpxhlw3</Badge>
                  </TableCell>
                  <TableCell className="underline">google.com</TableCell>
                  <TableCell>
                    <Badge variant="secondary">google</Badge>
                  </TableCell>
                  <TableCell>google.com</TableCell>
                  <TableCell>—</TableCell>
                  <TableCell>21/09/2026</TableCell>
                  <TableCell>
                    <ChevronRight className="size-4 text-foreground" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </AppShell>
    </div>
  ),
}

export const CreateSnippetDrawer: Story = {
  name: 'Create snippet drawer',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4136-39145',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Snippets">
        <PageHeader
          title="Snippets"
          description="Manage tracking snippets for your sites."
        />
        <Sheet defaultOpen>
          <SheetTrigger asChild>
            <Button>Open</Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-[460px]">
            <SheetHeader>
              <SheetTitle>Create Snippet</SheetTitle>
              <SheetDescription>Add a new snippet for one of your sites.</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 px-4">
              <Field>
                <FieldLabel htmlFor="snippet-site">Site</FieldLabel>
                <Input id="snippet-site" placeholder="google.com" />
              </Field>
              <Field>
                <FieldLabel htmlFor="snippet-domains">Allowed Domains</FieldLabel>
                <Textarea id="snippet-domains" placeholder="google.com" />
                <FieldDescription>
                  Comma-separated list of domains allowed to send events.
                </FieldDescription>
              </Field>
            </div>
            <SheetFooter>
              <Button className="w-full">
                Create Snippet <CirclePlus data-icon="inline-end" />
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </AppShell>
    </div>
  ),
}

export const ConfigureSnippetDrawer: Story = {
  name: 'Configure snippet drawer',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4156-5567',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Snippets">
        <PageHeader title="Snippets" description="Manage tracking snippets for your sites." />
        <Sheet defaultOpen>
          <SheetTrigger asChild>
            <Button>Open</Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-[560px]">
            <SheetHeader>
              <SheetTitle>google.com</SheetTitle>
              <SheetDescription>Configure tracking settings for this snippet.</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 px-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Embed Code</h3>
                <Kbd className="w-fit">
                  {'<script src="https://traqqr.ai/t/m12zkrpxhlw3.js"></script>'}
                </Kbd>
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Event Configuration</h3>
                <Field orientation="horizontal">
                  <Checkbox id="track-pageviews" defaultChecked />
                  <FieldLabel htmlFor="track-pageviews" className="font-normal">
                    Track page views automatically
                  </FieldLabel>
                </Field>
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Lead Event Values</h3>
                <FieldDescription>Default value sent with each lead event.</FieldDescription>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Currency</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Lead</TableCell>
                      <TableCell>
                        <Input placeholder="e.g. 5.00" />
                      </TableCell>
                      <TableCell>EUR</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Lead Confirmed</TableCell>
                      <TableCell>
                        <Input placeholder="e.g. 15.00" />
                      </TableCell>
                      <TableCell>EUR</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Setup</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Integration</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Site (google)</TableCell>
                      <TableCell>
                        <Badge variant="success">Connected</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Traqqr Fingerprint Service</TableCell>
                      <TableCell>
                        <Badge variant="success">Connected</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Meta Pixel</TableCell>
                      <TableCell>
                        <Badge variant="outline">Not linked</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>KlickTipp</TableCell>
                      <TableCell>
                        <Badge variant="outline">Not connected</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Digistore24</TableCell>
                      <TableCell>
                        <Badge variant="outline">Not connected</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <SheetFooter className="flex-row justify-between">
              <Button variant="destructive">Delete snippet</Button>
              <div className="flex gap-2">
                <Button variant="outline">Back</Button>
                <Button>Save</Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </AppShell>
    </div>
  ),
}
