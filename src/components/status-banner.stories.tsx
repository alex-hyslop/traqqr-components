import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { StatusBanner } from './status-banner'

const meta = {
  title: 'components/StatusBanner',
  component: StatusBanner,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    status: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
  args: { message: 'This is a status message.', status: 'info' },
} satisfies Meta<typeof StatusBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <StatusBanner status="info" message="A new version is available." />
      <StatusBanner status="success" message="Your changes have been saved." />
      <StatusBanner status="warning" message="Your trial ends in 3 days." />
      <StatusBanner status="error" message="Payment failed. Please update your card." />
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <StatusBanner
      status="warning"
      message="Your trial ends in 3 days."
      action={<Button size="sm" variant="outline">Upgrade</Button>}
    />
  ),
}
