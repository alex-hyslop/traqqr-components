import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlugZap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WideEmptyStateRow } from './wide-empty-state-row'

const meta = {
  title: 'components/WideEmptyStateRow',
  component: WideEmptyStateRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    icon: <PlugZap className="size-4" />,
    title: 'No integrations connected',
    description: 'Connect a tool to start syncing data.',
    action: <Button size="sm">Connect</Button>,
  },
} satisfies Meta<typeof WideEmptyStateRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
