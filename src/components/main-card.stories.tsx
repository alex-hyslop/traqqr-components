import type { Meta, StoryObj } from '@storybook/react-vite'
import { Inbox } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MainCard } from './main-card'

const meta = {
  title: 'components/MainCard',
  component: MainCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    icon: <Inbox className="size-6" />,
    title: 'No messages yet',
    description: 'When you receive a message, it will show up here.',
    action: <Button>Compose message</Button>,
  },
} satisfies Meta<typeof MainCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="mx-auto max-w-md">
      <MainCard {...args} />
    </div>
  ),
}
