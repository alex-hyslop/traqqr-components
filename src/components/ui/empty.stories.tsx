import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleAlert, Globe, RotateCw } from 'lucide-react'
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
  component: Empty,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

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
    </Empty>
  ),
}

export const WithButton: Story = {
  name: 'With button (button=true)',
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

export const ErrorState: Story = {
  name: 'Error state',
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CircleAlert className="text-foreground" />
        </EmptyMedia>
        <EmptyTitle>Couldn’t load this data</EmptyTitle>
        <EmptyDescription>
          Something went wrong on our side. Check your connection and try again.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" shape="rounded">
          <RotateCw data-icon="inline-start" /> Try again
        </Button>
      </EmptyContent>
    </Empty>
  ),
}
