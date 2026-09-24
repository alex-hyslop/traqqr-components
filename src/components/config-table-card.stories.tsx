import type { Meta, StoryObj } from '@storybook/react-vite'
import { ConfigTableCard } from './config-table-card'

const meta = {
  title: 'components/ConfigTableCard',
  component: ConfigTableCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ConfigTableCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Server configuration',
    rows: [
      { label: 'Region', value: 'us-east-1' },
      { label: 'Instance type', value: 't3.medium' },
      { label: 'Auto-scaling', value: 'Enabled' },
    ],
  },
  render: (args) => (
    <div className="max-w-lg">
      <ConfigTableCard {...args} />
    </div>
  ),
}
