import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table, TableBody } from '@/components/ui/table'
import { ComparisonTableHeader } from './comparison-table-header'
import { ComparisonTableRow } from './comparison-table-row'

const meta = {
  title: 'components/ComparisonTable',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const HeaderAndRows: Story = {
  render: () => (
    <Table>
      <ComparisonTableHeader columns={['Plan', 'Starter', 'Pro', 'Enterprise']} />
      <TableBody>
        <ComparisonTableRow label="Seats" values={['1', '10', 'Unlimited']} />
        <ComparisonTableRow label="Storage" values={['5 GB', '100 GB', '1 TB']} />
        <ComparisonTableRow label="Support" values={['Community', 'Email', 'Dedicated']} />
      </TableBody>
    </Table>
  ),
}
