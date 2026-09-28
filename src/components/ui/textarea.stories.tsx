import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './textarea'

const meta = {
  title: 'ui/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
  },
  args: { placeholder: 'Type your message...', disabled: false, 'aria-invalid': false },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Disabled: Story = {
  args: { disabled: true, value: 'Disabled content' },
}

export const Destructive: Story = {
  args: { 'aria-invalid': true, value: 'Invalid content' },
}
