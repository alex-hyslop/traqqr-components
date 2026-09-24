import type { Meta, StoryObj } from '@storybook/react-vite'
import { InvoiceRow } from './invoice-row'

const meta = {
  title: 'components/InvoiceRow',
  component: InvoiceRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    invoiceNumber: 'INV-0001',
    date: 'Jan 1, 2026',
    amount: '$49.00',
    status: 'success',
    statusLabel: 'Paid',
  },
} satisfies Meta<typeof InvoiceRow>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const List: Story = {
  render: () => (
    <div className="max-w-xl">
      <InvoiceRow invoiceNumber="INV-0001" date="Jan 1, 2026" amount="$49.00" status="success" statusLabel="Paid" />
      <InvoiceRow invoiceNumber="INV-0002" date="Feb 1, 2026" amount="$49.00" status="warning" statusLabel="Pending" />
      <InvoiceRow invoiceNumber="INV-0003" date="Mar 1, 2026" amount="$49.00" status="error" statusLabel="Overdue" />
    </div>
  ),
}
