import type { Meta, StoryObj } from '@storybook/react-vite'
import { LogOut, Plus } from 'lucide-react'
import { Button } from './button'

const VARIANTS = ['default', 'outline', 'secondary', 'ghost', 'destructive'] as const
const SIZES = ['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const

const meta = {
  title: 'ui/IconButton',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    size: { control: 'select', options: SIZES },
    shape: { control: 'inline-radio', options: ['default', 'rounded'] },
    disabled: { control: 'boolean' },
    asChild: { control: false },
  },
  args: {
    variant: 'ghost',
    size: 'icon',
    shape: 'default',
    disabled: false,
    'aria-label': 'Log out',
    children: <LogOut />,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const States: Story = {
  name: 'Variant × State (Default / Hover / Focused / Disabled)',
  parameters: {
    pseudo: { hover: ['.state-hover'], focusVisible: ['.state-focus'] },
  },
  render: () => (
    <div className="grid grid-cols-[auto_repeat(4,auto)] items-center gap-3 text-xs">
      <span />
      <span>Default</span>
      <span>Hover</span>
      <span>Focused</span>
      <span>Disabled</span>
      {VARIANTS.map((variant) => (
        <div key={variant} className="contents">
          <span className="text-muted-foreground">{variant}</span>
          <Button variant={variant} size="icon" aria-label="Add"><Plus /></Button>
          <Button variant={variant} size="icon" aria-label="Add" className="state-hover"><Plus /></Button>
          <Button variant={variant} size="icon" aria-label="Add" className="state-focus"><Plus /></Button>
          <Button variant={variant} size="icon" aria-label="Add" disabled><Plus /></Button>
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  name: 'Size: xs / sm / default / lg × Roundness',
  render: () => (
    <div className="flex flex-col gap-3">
      {(['default', 'rounded'] as const).map((shape) => (
        <div key={shape} className="flex items-center gap-3">
          {SIZES.map((size) => (
            <Button key={size} variant="outline" size={size} shape={shape} aria-label="Add">
              <Plus />
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}
