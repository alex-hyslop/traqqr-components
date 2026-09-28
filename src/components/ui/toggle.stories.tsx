import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronDown, Globe } from 'lucide-react'
import { Toggle } from './toggle'

const VARIANTS = ['outline', 'ghost'] as const
const SIZES = ['sm', 'default', 'lg'] as const

type ToggleStoryArgs = ComponentProps<typeof Toggle> & { leftIcon?: boolean; rightIcon?: boolean }

const meta: Meta<ToggleStoryArgs> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: VARIANTS },
    size: { control: 'inline-radio', options: SIZES },
    pressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
  },
  args: {
    children: 'Toggle',
    variant: 'outline',
    size: 'default',
    pressed: false,
    disabled: false,
    leftIcon: false,
    rightIcon: false,
  },
}

export default meta
type Story = StoryObj<ToggleStoryArgs>

export const Playground: Story = {
  render: ({ leftIcon, rightIcon, children, ...args }) => (
    <Toggle {...args}>
      {leftIcon && <Globe data-icon="inline-start" />}
      {children}
      {rightIcon && <ChevronDown data-icon="inline-end" />}
    </Toggle>
  ),
}

export const States: Story = {
  name: 'Variant × Size × State (Off / On·Hover / Focus / Disabled)',
  parameters: { pseudo: { focusVisible: ['.state-focus'] } },
  render: () => (
    <div className="grid grid-cols-[auto_repeat(4,auto)] items-center gap-3 text-xs">
      <span />
      <span>Off</span>
      <span>On / Hover</span>
      <span>Focus</span>
      <span>Disabled</span>
      {VARIANTS.flatMap((variant) =>
        SIZES.map((size) => (
          <div key={`${variant}-${size}`} className="contents">
            <span className="text-muted-foreground">
              {variant} / {size}
            </span>
            <Toggle variant={variant} size={size}>Toggle</Toggle>
            <Toggle variant={variant} size={size} defaultPressed>Toggle</Toggle>
            <Toggle variant={variant} size={size} className="state-focus">Toggle</Toggle>
            <Toggle variant={variant} size={size} disabled>Toggle</Toggle>
          </div>
        ))
      )}
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'Left icon / Right icon',
  render: () => (
    <div className="flex flex-col items-start gap-3">
      {SIZES.map((size) => (
        <div key={size} className="flex gap-3">
          <Toggle variant="outline" size={size}>
            <Globe data-icon="inline-start" /> Toggle
          </Toggle>
          <Toggle variant="outline" size={size}>
            Toggle <ChevronDown data-icon="inline-end" />
          </Toggle>
          <Toggle variant="outline" size={size} aria-label="Globe">
            <Globe />
          </Toggle>
        </div>
      ))}
    </div>
  ),
}
