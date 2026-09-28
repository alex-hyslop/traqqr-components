import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    shape: { control: 'inline-radio', options: ['default', 'rounded'] },
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
    dir: { control: 'inline-radio', options: ['ltr', 'rtl'] },
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    shape: 'default',
    disabled: false,
    'aria-invalid': false,
    dir: 'ltr',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Input className="w-80" {...args} />,
}

export const States: Story = {
  name: 'State × Roundness',
  parameters: { pseudo: { focusVisible: ['.state-focus'] } },
  render: () => (
    <div className="grid w-fit grid-cols-2 gap-6">
      {(['default', 'rounded'] as const).map((shape) => (
        <div key={shape} className="flex w-80 flex-col gap-6">
          <Input shape={shape} placeholder="Default" />
          <Input shape={shape} defaultValue="Active" />
          <Input shape={shape} placeholder="Focus" className="state-focus" />
          <Input shape={shape} placeholder="Destructive" aria-invalid />
          <Input shape={shape} placeholder="Disabled" disabled />
        </div>
      ))}
    </div>
  ),
}

export const RTL: Story = {
  name: 'Dir: RTL',
  render: () => <Input className="w-80" dir="rtl" placeholder="Placeholder" />,
}
