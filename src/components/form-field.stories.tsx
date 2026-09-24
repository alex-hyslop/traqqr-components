import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from './form-field'

const meta = {
  title: 'components/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    label: 'Email address',
    children: <Input id="email" type="email" placeholder="you@example.com" />,
  },
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const WithInput: Story = {
  args: { htmlFor: 'email', helperText: "We'll never share your email." },
  render: (args) => (
    <div className="w-80">
      <FormField {...args} />
    </div>
  ),
}

export const WithTextarea: Story = {
  args: {
    label: 'Message',
    htmlFor: 'message',
    children: <Textarea id="message" placeholder="Type your message..." />,
  },
  render: (args) => (
    <div className="w-80">
      <FormField {...args} />
    </div>
  ),
}

export const WithError: Story = {
  args: {
    label: 'Username',
    htmlFor: 'username',
    errorText: 'This username is already taken.',
    children: <Input id="username" defaultValue="alex" />,
  },
  render: (args) => (
    <div className="w-80">
      <FormField {...args} />
    </div>
  ),
}
