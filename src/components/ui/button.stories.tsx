import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight, Loader2, Mail } from 'lucide-react'
import { Kbd } from './kbd'
import { Button } from './button'

type ButtonStoryArgs = ComponentProps<typeof Button> & {
  leftIcon?: boolean
  rightIcon?: boolean
  kbd?: boolean
}

const VARIANTS = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const
const SIZES = ['xs', 'sm', 'default', 'lg'] as const

const meta: Meta<ButtonStoryArgs> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    size: { control: 'select', options: SIZES },
    shape: { control: 'inline-radio', options: ['default', 'rounded'] },
    disabled: { control: 'boolean' },
    asChild: { control: false },
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
    kbd: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    shape: 'default',
    disabled: false,
    leftIcon: false,
    rightIcon: false,
    kbd: false,
  },
}

export default meta
type Story = StoryObj<ButtonStoryArgs>

export const Playground: Story = {
  render: ({ leftIcon, rightIcon, kbd, children, ...args }) => (
    <Button {...args}>
      {leftIcon && <Mail data-icon="inline-start" />}
      {children}
      {rightIcon && <ChevronRight data-icon="inline-end" />}
      {kbd && <Kbd>⇧</Kbd>}
    </Button>
  ),
}

export const States: Story = {
  name: 'Variant × State (Default / Hover / Focus / Disabled)',
  parameters: {
    pseudo: { hover: ['.state-hover'], focusVisible: ['.state-focus'] },
  },
  render: () => (
    <div className="grid grid-cols-[auto_repeat(4,auto)] items-center gap-3 text-xs">
      <span />
      <span>Default</span>
      <span>Hover</span>
      <span>Focus</span>
      <span>Disabled</span>
      {VARIANTS.map((variant) => (
        <div key={variant} className="contents">
          <span className="text-muted-foreground">{variant}</span>
          <Button variant={variant}>Button</Button>
          <Button variant={variant} className="state-hover">Button</Button>
          <Button variant={variant} className="state-focus">Button</Button>
          <Button variant={variant} disabled>Button</Button>
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  name: 'Size: xs / sm / default / lg',
  render: () => (
    <div className="flex flex-col items-start gap-3">
      {SIZES.map((size) => (
        <div key={size} className="flex items-center gap-3">
          <Button size={size}>Button</Button>
          <Button size={size}>
            <Mail data-icon="inline-start" />
            Button
            <ChevronRight data-icon="inline-end" />
          </Button>
          <Button size={size} shape="rounded">Button</Button>
        </div>
      ))}
    </div>
  ),
}

export const Roundness: Story = {
  name: 'Roundness: Default / Rounded',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.filter((v) => v !== 'link').map((variant) => (
        <Button key={variant} variant={variant} shape="rounded">
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'Left icon / Right icon',
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

export const WithKbd: Story = {
  name: 'Kbd',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        Button <Kbd>⇧</Kbd>
      </Button>
      <Button variant="outline">
        Save <Kbd>⌘S</Kbd>
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="animate-spin" data-icon="inline-start" /> Loading
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
