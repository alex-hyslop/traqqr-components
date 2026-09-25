import type { Meta, StoryObj } from '@storybook/react-vite'
import { CirclePlus, Globe, Search } from 'lucide-react'
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { IdentityRow } from '@/components/traqqr/identity-row'

const meta = {
  title: 'Pages/Sites',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Empty_: Story = {
  name: 'Empty',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4151-7933',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Sites">
        <PageHeader
          title="Sites"
          description="Manage your tracking sites and their configuration."
          actions={
            <Button shape="rounded">
              New Site <CirclePlus data-icon="inline-end" />
            </Button>
          }
        />
        <Empty className="py-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Globe />
            </EmptyMedia>
            <EmptyTitle>No sites yet</EmptyTitle>
            <EmptyDescription>Add your first site to start tracking events.</EmptyDescription>
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
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4149-5314',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Sites">
        <PageHeader
          title="Sites"
          description="Manage your tracking sites and their configuration."
          actions={
            <Button shape="rounded">
              New Site <CirclePlus data-icon="inline-end" />
            </Button>
          }
        />
        <Card className="w-full py-6">
          <CardHeader>
            <CardTitle>1 Site</CardTitle>
            <CardDescription>Click a site to view and edit its configuration.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="relative w-[360px]">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" placeholder="Filter by name or domain…" />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[170px]">Site ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Allowed Domains</TableHead>
                  <TableHead className="w-[130px]">Meta Pixel</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="cursor-pointer">
                  <TableCell>
                    <Badge variant="secondary">orms30mlrqju</Badge>
                  </TableCell>
                  <TableCell className="underline">Google</TableCell>
                  <TableCell>google.com</TableCell>
                  <TableCell>—</TableCell>
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

export const CreateSiteDrawer: Story = {
  name: 'Create site drawer',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4136-43843',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Sites">
        <PageHeader
          title="Sites"
          description="Manage your tracking sites and their configuration."
        />
        <Sheet defaultOpen>
          <SheetTrigger asChild>
            <Button>Open</Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-[460px]">
            <SheetHeader>
              <SheetTitle>Create Site</SheetTitle>
              <SheetDescription>
                Add a new site to start tracking events and conversions.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 px-4">
              <Field>
                <FieldLabel htmlFor="site-name">Name</FieldLabel>
                <Input id="site-name" placeholder="My Website" />
                <FieldDescription>A friendly name for your site.</FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="site-domains">Allowed Domains</FieldLabel>
                <Textarea
                  id="site-domains"
                  placeholder="example.com, www.example.com, localhost"
                />
                <FieldDescription>
                  Comma-separated list of domains allowed to send events.
                </FieldDescription>
              </Field>
            </div>
            <SheetFooter>
              <Button className="w-full">
                Create Site <CirclePlus data-icon="inline-end" />
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </AppShell>
    </div>
  ),
}

export const SiteDetailCompany: Story = {
  name: 'Site Detail — Company',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4138-7935',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Sites">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Sites</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Company</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <IdentityRow
          title="Company"
          status="google.com"
          logo={<Globe className="size-6 text-muted-foreground" />}
        />
        <Card className="w-full py-6">
          <CardHeader>
            <CardTitle>Meta Pixel</CardTitle>
            <CardDescription>Configure server-side conversion tracking.</CardDescription>
          </CardHeader>
        </Card>
      </AppShell>
    </div>
  ),
}
