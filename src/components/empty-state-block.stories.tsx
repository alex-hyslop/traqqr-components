import type { Meta, StoryObj } from '@storybook/react-vite'
import { FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EmptyStateBlock } from './empty-state-block'

const meta = {
  title: 'components/EmptyStateBlock',
  component: EmptyStateBlock,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    icon: <FolderOpen className="size-6" />,
    title: 'No files uploaded',
    description: 'Upload a file to get started.',
    action: <Button variant="outline">Upload file</Button>,
  },
} satisfies Meta<typeof EmptyStateBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
