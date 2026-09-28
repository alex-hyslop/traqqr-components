import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './textarea'

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
    dir: { control: 'inline-radio', options: ['ltr', 'rtl'] },
    placeholder: { control: 'text' },
  },
  args: { placeholder: 'Type your message...', disabled: false, 'aria-invalid': false, dir: 'ltr' },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Textarea className="w-90" {...args} />,
}

export const States: Story = {
  name: 'State × Dir',
  parameters: { pseudo: { focusVisible: ['.state-focus'] } },
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['ltr', 'rtl'] as const).map((dir) => (
        <div key={dir} className="flex w-90 flex-col gap-6">
          <Textarea dir={dir} placeholder="Default" />
          <Textarea dir={dir} placeholder="Focus" className="state-focus" />
          <Textarea dir={dir} placeholder="Destructive" aria-invalid />
          <Textarea dir={dir} placeholder="Disabled" disabled />
        </div>
      ))}
    </div>
  ),
}
