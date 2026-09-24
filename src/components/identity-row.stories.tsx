import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { IdentityRow } from './identity-row'

const meta = {
  title: 'components/IdentityRow',
  component: IdentityRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    name: 'Jane Cooper',
    secondaryText: 'jane@example.com',
  },
} satisfies Meta<typeof IdentityRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithAction: Story = {
  args: {
    action: <Button size="sm" variant="outline">Remove</Button>,
  },
}
