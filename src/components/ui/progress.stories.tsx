import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './progress'

const meta = {
  title: 'ui/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const BillingUsage: Story = {
  name: 'Trial/usage bar (4px)',
  render: () => (
    <div className="max-w-sm">
      <Progress className="h-1" value={62} />
    </div>
  ),
}
