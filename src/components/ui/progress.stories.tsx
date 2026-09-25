import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './progress'

const meta = {
  title: 'ui/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2015-429',
    },
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
