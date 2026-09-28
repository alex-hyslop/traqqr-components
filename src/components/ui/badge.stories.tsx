import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check, ChevronRight } from 'lucide-react'
import { Badge } from './badge'

const VARIANTS = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'success', 'warning'] as const

type BadgeStoryArgs = ComponentProps<typeof Badge> & { leftIcon?: boolean; rightIcon?: boolean }

const meta: Meta<BadgeStoryArgs> = {
  title: 'ui/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    asChild: { control: false },
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
  },
  args: { children: 'Badge', variant: 'default', leftIcon: false, rightIcon: false },
}

export default meta
type Story = StoryObj<BadgeStoryArgs>

export const Playground: Story = {
  render: ({ leftIcon, rightIcon, children, ...args }) => (
    <Badge {...args}>
      {leftIcon && <Check data-icon="inline-start" />}
      {children}
      {rightIcon && <ChevronRight data-icon="inline-end" />}
    </Badge>
  ),
}

export const AllVariants: Story = {
  name: 'State: Default / Secondary / Destructive / Outline / Ghost / Success / Warning',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant} className="capitalize">
          {variant}
        </Badge>
      ))}
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'Left icon / Right icon',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.slice(0, 5).map((variant) => (
        <div key={variant} className="flex gap-2">
          <Badge variant={variant}>
            <Check data-icon="inline-start" /> Badge
          </Badge>
          <Badge variant={variant}>
            Badge <ChevronRight data-icon="inline-end" />
          </Badge>
        </div>
      ))}
    </div>
  ),
}
