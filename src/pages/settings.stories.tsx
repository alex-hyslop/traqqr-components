import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpRight, CreditCard, Download, FileText, Globe, Plus } from 'lucide-react'
import { AppShell } from '@/components/traqqr/app-shell'
import { PageHeader } from '@/components/traqqr/page-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Field, FieldLabel } from '@/components/ui/field'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const meta = {
  title: 'Pages/Settings',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Billing: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4176-8507',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Settings">
        <PageHeader
          title="Settings"
          description="Manage billing, subscription, and account preferences."
        />

        <div className="flex w-full gap-6">
          <Card className="flex-1 bg-card-translucent py-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-sans">
                <CreditCard className="size-5" /> Subscription
              </CardTitle>
              <CardDescription>Your current plan and trial status.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex items-center justify-between border-b py-2">
                <span className="text-sm font-mono text-muted-foreground">Status</span>
                <Badge variant="warning">Trial</Badge>
              </div>
              <div className="flex items-center justify-between border-b py-2">
                <span className="text-sm font-mono text-muted-foreground">Trial ends</span>
                <span className="text-sm font-mono">10/5/2026 · 14 days left</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-mono text-muted-foreground">Current period</span>
                <span className="text-sm font-mono">9/21/2026 – 10/5/2026</span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 justify-between bg-card-translucent py-6">
            <div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-sans">
                  <CreditCard className="size-5" /> Payment method
                </CardTitle>
                <CardDescription>
                  Add or update your card via the Stripe Billing Portal.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-mono text-muted-foreground">Card on file</span>
                  <span className="text-sm font-mono">Not yet added</span>
                </div>
                <p className="pl-2 text-xs font-mono text-muted-foreground">
                  Add a card before your trial ends to avoid an interruption.
                </p>
              </CardContent>
            </div>
            <CardFooter className="rounded-b-xl bg-muted py-4">
              <Button>
                Add payment method <ArrowUpRight data-icon="inline-end" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="w-full bg-card-translucent py-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-sans">
              <Globe className="size-5" /> Site Plans
            </CardTitle>
            <CardDescription>Current plan and usage per billable site.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {['google', 'Kev Costello'].map((site) => (
              <div key={site} className="flex flex-col gap-4 rounded-md border p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base font-mono">{site}</span>
                    <Badge variant="secondary">Trial</Badge>
                  </div>
                  <NativeSelect defaultValue="5000" className="w-auto">
                    <NativeSelectOption value="5000">
                      5,000 events / month · €49 / month
                    </NativeSelectOption>
                  </NativeSelect>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-muted-foreground">
                    Trial: 4 of 14 days elapsed
                  </span>
                  <Progress value={29} className="h-1" />
                </div>
                <Button variant="outline" className="w-fit">
                  Cancel subscription
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="w-full bg-card-translucent py-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-sans">
              <FileText className="size-5" /> Billing details
            </CardTitle>
            <CardDescription>Update your company&apos;s legal details for invoices.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex gap-4">
              <Field className="flex-1">
                <FieldLabel htmlFor="company-name">Company legal name *</FieldLabel>
                <Input id="company-name" defaultValue="Acme GmbH" />
              </Field>
              <Field className="flex-1">
                <FieldLabel htmlFor="billing-phone">Billing phone (optional)</FieldLabel>
                <Input id="billing-phone" defaultValue="+49 30 1234567" />
              </Field>
            </div>
            <Separator />
            <span className="text-sm font-mono">Billing address</span>
            <div className="flex gap-4">
              <Field className="flex-1">
                <FieldLabel htmlFor="line1">Line 1 *</FieldLabel>
                <Input id="line1" defaultValue="Musterstraße 1" />
              </Field>
              <Field className="flex-1">
                <FieldLabel htmlFor="line2">Line 2 (optional)</FieldLabel>
                <Input id="line2" defaultValue="Suite 200" />
              </Field>
            </div>
            <div className="flex gap-4">
              <Field className="flex-1">
                <FieldLabel htmlFor="city">City *</FieldLabel>
                <Input id="city" defaultValue="Berlin" />
              </Field>
              <Field className="flex-1">
                <FieldLabel htmlFor="postal">Postal code *</FieldLabel>
                <Input id="postal" defaultValue="10115" />
              </Field>
            </div>
            <div className="flex gap-4">
              <Field className="flex-1">
                <FieldLabel htmlFor="state">State (optional)</FieldLabel>
                <Input id="state" placeholder="—" />
              </Field>
              <Field className="flex-1">
                <FieldLabel htmlFor="country">Country *</FieldLabel>
                <NativeSelect id="country" defaultValue="de">
                  <NativeSelectOption value="de">Germany</NativeSelectOption>
                </NativeSelect>
              </Field>
            </div>
            <Separator />
            <span className="text-sm font-mono">Tax IDs</span>
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-muted-foreground">
                No tax IDs on file yet.
              </span>
              <Button variant="outline">
                <Plus data-icon="inline-start" /> Add tax ID
              </Button>
            </div>
          </CardContent>
          <CardFooter className="justify-end rounded-b-xl bg-muted py-4">
            <Button>Save changes</Button>
          </CardFooter>
        </Card>

        <Card className="w-full bg-card-translucent py-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-sans">
              <FileText className="size-5" /> Invoices
            </CardTitle>
            <CardDescription>
              Recent invoices from Stripe. Click to open the hosted invoice.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[240px]">Invoice</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[140px]">Amount</TableHead>
                  <TableHead className="w-[120px]">Status</TableHead>
                  <TableHead className="w-14" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {['WXF2OYPA-0130', 'WXF2OYPA-0129'].map((id) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell className="text-muted-foreground">21/09/2026</TableCell>
                    <TableCell>€0.00</TableCell>
                    <TableCell>
                      <Badge variant="success">Paid</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon-sm" aria-label="Download invoice">
                        <Download />
                      </Button>
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
