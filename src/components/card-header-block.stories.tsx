import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { CardHeaderBlock } from './card-header-block'

const meta = {
  title: 'components/CardHeaderBlock',
  component: CardHeaderBlock,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { title: 'Billing' },
} satisfies Meta<typeof CardHeaderBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Billing',
    description: 'Manage your billing information and view invoices.',
  },
  render: (args) => (
    <div className="w-96 rounded-lg border border-border p-4">
      <CardHeaderBlock {...args} />
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-border p-4">
      <CardHeaderBlock
        title="Team members"
        description="Invite and manage people on your team."
        action={<Button size="sm">Invite</Button>}
      />
    </div>
  ),
}
