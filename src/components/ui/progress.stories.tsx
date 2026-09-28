import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './progress'

const meta = {
  title: 'ui/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: { value: 62 },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-sm">
      <Progress {...args} className="h-1" />
    </div>
  ),
}

export const BillingUsage: Story = {
  name: 'Trial/usage bar (4px)',
  render: () => (
    <div className="max-w-sm">
      <Progress className="h-1" value={62} />
    </div>
  ),
}
