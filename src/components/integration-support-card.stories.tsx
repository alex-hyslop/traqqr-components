import type { Meta, StoryObj } from '@storybook/react-vite'
import { LifeBuoy } from 'lucide-react'
import { IntegrationSupportCard } from './integration-support-card'

const meta = {
  title: 'components/IntegrationSupportCard',
  component: IntegrationSupportCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    icon: <LifeBuoy className="size-5" />,
    title: 'Need help connecting?',
    description: 'Check our setup guide or contact support.',
    linkLabel: 'View documentation',
  },
} satisfies Meta<typeof IntegrationSupportCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-xs">
      <IntegrationSupportCard {...args} />
    </div>
  ),
}
