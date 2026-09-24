import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatusPill } from './status-pill'

const meta = {
  title: 'components/StatusPill',
  component: StatusPill,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'neutral'],
    },
  },
  args: { children: 'Status', status: 'default' },
} satisfies Meta<typeof StatusPill>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <StatusPill status="default">Default</StatusPill>
      <StatusPill status="success">Active</StatusPill>
      <StatusPill status="warning">Pending</StatusPill>
      <StatusPill status="error">Failed</StatusPill>
      <StatusPill status="neutral">Draft</StatusPill>
    </div>
  ),
}
