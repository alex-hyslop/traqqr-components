import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleCheck, UserPlus, Zap } from 'lucide-react'
import { EventsBox } from './events-box'

const meta = {
  title: 'components/EventsBox',
  component: EventsBox,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    events: [
      { id: '1', title: 'Deployment succeeded', timestamp: '2m ago', icon: <CircleCheck className="size-4" /> },
      { id: '2', title: 'New team member added', timestamp: '1h ago', icon: <UserPlus className="size-4" /> },
      { id: '3', title: 'Webhook triggered', timestamp: '3h ago', icon: <Zap className="size-4" /> },
    ],
  },
} satisfies Meta<typeof EventsBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-md">
      <EventsBox {...args} />
    </div>
  ),
}
