import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight, Loader2, Mail, X } from 'lucide-react'
import { Kbd } from './kbd'
import { Button } from './button'

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    shape: {
      control: 'select',
      options: ['default', 'rounded'],
    },
    disabled: { control: 'boolean' },
    asChild: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    shape: 'default',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon button">
        <ChevronRight />
      </Button>
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'Icon left / right',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Mail data-icon="inline-start" /> Email
      </Button>
      <Button variant="outline">
        Continue <ChevronRight data-icon="inline-end" />
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="animate-spin" /> Loading
    </Button>
  ),
}

export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="https://ui.shadcn.com">Go to shadcn/ui</a>
    </Button>
  ),
}

export const DangerButton: Story = {
  name: 'Danger button',
  args: { variant: 'destructive', children: 'Delete account' },
}

export const GhostLinkButton: Story = {
  name: 'Ghost link button',
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const IconButtonClose: Story = {
  name: 'Icon button (close/x)',
  render: () => (
    <Button variant="ghost" size="icon" aria-label="Close">
      <X />
    </Button>
  ),
}

export const Roundness: Story = {
  name: 'Roundness: Default / Rounded',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button shape="default">Default (rounded-md)</Button>
      <Button shape="rounded">Rounded (pill)</Button>
      <Button shape="rounded" variant="outline">
        Rounded outline
      </Button>
      <Button shape="rounded" size="icon" aria-label="Round icon button">
        <ChevronRight />
      </Button>
    </div>
  ),
}

export const AdvanceRoundButtons: Story = {
  name: 'Advance round buttons',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button shape="rounded">Rounded</Button>
      <Button shape="rounded" variant="outline">
        Rounded outline
      </Button>
      <Button shape="rounded" size="icon" aria-label="Round icon button">
        <ChevronRight />
      </Button>
    </div>
  ),
}

export const WithKbd: Story = {
  name: 'With Kbd',
  render: () => (
    <Button variant="outline">
      Save <Kbd>⌘S</Kbd>
    </Button>
  ),
}
