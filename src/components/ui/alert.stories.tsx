import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleAlert, CircleCheck, TriangleAlert } from 'lucide-react'
import { Alert, AlertAction, AlertDescription, AlertTitle } from './alert'
import { Button } from './button'

const VARIANTS = ['default', 'destructive', 'success', 'warning'] as const
type Variant = (typeof VARIANTS)[number]

const ICONS: Record<Variant, typeof CircleCheck> = {
  default: CircleCheck,
  destructive: CircleAlert,
  success: CircleCheck,
  warning: TriangleAlert,
}

type AlertStoryArgs = ComponentProps<typeof Alert> & {
  title: string
  description: string
  icon: boolean
  showDescription: boolean
  button: boolean
}

const meta: Meta<AlertStoryArgs> = {
  title: 'ui/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'boolean' },
    showDescription: { control: 'boolean', name: 'alert description' },
    button: { control: 'boolean' },
    dir: { control: 'inline-radio', options: ['ltr', 'rtl'] },
  },
  args: {
    variant: 'default',
    title: 'Account updated successfully',
    description: 'Your profile information has been saved.',
    icon: true,
    showDescription: true,
    button: true,
    dir: 'ltr',
  },
}

export default meta
type Story = StoryObj<AlertStoryArgs>

function DemoAlert({ variant = 'default', title, description, icon, showDescription, button, ...props }: AlertStoryArgs) {
  const Icon = ICONS[variant ?? 'default']
  return (
    <Alert variant={variant} className="max-w-lg" {...props}>
      {icon && <Icon />}
      <AlertTitle>{title}</AlertTitle>
      {showDescription && <AlertDescription>{description}</AlertDescription>}
      {button && (
        <AlertAction>
          <Button size="sm" variant="outline">
            Enable
          </Button>
        </AlertAction>
      )}
    </Alert>
  )
}

export const Playground: Story = { render: (args) => <DemoAlert {...args} /> }

export const States: Story = {
  name: 'State: Default / Destructive / Success / Warning',
  render: (args) => (
    <div className="flex flex-col gap-4">
      {VARIANTS.map((variant) => (
        <DemoAlert key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
}

export const RTL: Story = {
  name: 'Dir: RTL',
  render: (args) => (
    <div className="flex flex-col gap-4">
      {VARIANTS.map((variant) => (
        <DemoAlert key={variant} {...args} variant={variant} dir="rtl" />
      ))}
    </div>
  ),
}

export const TitleOnly: Story = {
  name: 'Title only (no description / button)',
  args: { showDescription: false, button: false },
  render: (args) => <DemoAlert {...args} />,
}

export const LiveFeedConnected: Story = {
  name: 'Live Feed: Connected',
  render: () => (
    <Alert className="max-w-lg">
      <CircleCheck />
      <AlertTitle>Connected</AlertTitle>
      <AlertDescription>Listening for new events.</AlertDescription>
    </Alert>
  ),
}
