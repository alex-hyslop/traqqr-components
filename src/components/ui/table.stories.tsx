import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight } from 'lucide-react'
import { Badge } from './badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
]

const meta = {
  title: 'ui/Table',
  component: Table,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((row) => (
          <TableRow key={row.invoice}>
            <TableCell>{row.invoice}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const ComparisonPills: Story = {
  name: 'Destructive / Success tone (documented Figma deviation)',
  render: () => (
    <Table className="border-separate border-spacing-2">
      <TableHeader>
        <TableRow>
          <TableHead>Feature</TableHead>
          <TableHead>KlickTipp</TableHead>
          <TableHead>Competitor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Unlimited automations</TableCell>
          <TableCell className="rounded-lg bg-success-subtle/70 px-4 py-3 text-center text-success">
            Included
          </TableCell>
          <TableCell className="rounded-lg bg-destructive-subtle/70 px-4 py-3 text-center text-destructive">
            Not included
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

const sites = [
  { id: 'orms30mlrqju', name: 'Google', domains: 'google.com', pixel: '—' },
  { id: 'm12zkrpxhlw3', name: 'Traqqr', domains: 'traqqr.ai, www.traqqr.ai', pixel: 'Main pixel' },
]

export const ClickableRows: Story = {
  name: 'Clickable rows (Sites)',
  parameters: {
    docs: {
      description: {
        story:
          'Add `data-clickable` to a TableRow and put a link in it: the link is stretched over the whole row, and on hover the row tints, the name underlines and the chevron turns foreground.',
      },
    },
  },
  render: () => (
    <div className="max-w-4xl overflow-hidden rounded-md border">
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
          {sites.map((site) => (
            <TableRow key={site.id} data-clickable>
              <TableCell>
                <Badge variant="secondary">{site.id}</Badge>
              </TableCell>
              <TableCell>
                <a href="#">{site.name}</a>
              </TableCell>
              <TableCell>{site.domains}</TableCell>
              <TableCell>{site.pixel}</TableCell>
              <TableCell className="text-center">
                <ChevronRight className="inline size-4" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}
