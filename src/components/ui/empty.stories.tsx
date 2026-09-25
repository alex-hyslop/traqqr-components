import type { Meta, StoryObj } from '@storybook/react-vite'
import { Globe } from 'lucide-react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './empty'
import { Button } from './button'

const meta = {
  title: 'ui/Empty',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Globe />
        </EmptyMedia>
        <EmptyTitle>No sites yet</EmptyTitle>
        <EmptyDescription>Add your first site to start tracking events.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button shape="rounded">New site</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const WithoutButton: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Globe />
        </EmptyMedia>
        <EmptyTitle>No conversions yet</EmptyTitle>
        <EmptyDescription>Conversions will appear here once tracked.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
