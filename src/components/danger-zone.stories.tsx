import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { DangerZone } from './danger-zone'

const meta = {
  title: 'components/DangerZone',
  component: DangerZone,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    title: 'Delete this workspace',
    action: <Button variant="destructive">Delete workspace</Button>,
  },
} satisfies Meta<typeof DangerZone>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description: 'Once deleted, this action cannot be undone.',
  },
}
