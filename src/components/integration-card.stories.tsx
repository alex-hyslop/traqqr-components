import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessageSquare } from 'lucide-react'
import { IntegrationCard } from './integration-card'

const meta = {
  title: 'components/IntegrationCard',
  component: IntegrationCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    icon: <MessageSquare className="size-5" />,
    name: 'Slack',
    description: 'Send notifications to a channel.',
  },
} satisfies Meta<typeof IntegrationCard>

export default meta
type Story = StoryObj<typeof meta>

export const NotConnected: Story = {
  render: (args) => (
    <div className="max-w-md">
      <IntegrationCard {...args} />
    </div>
  ),
}

export const Connected: Story = {
  args: { isConnected: true },
  render: (args) => (
    <div className="max-w-md">
      <IntegrationCard {...args} />
    </div>
  ),
}
