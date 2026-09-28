import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'
import { Input } from './input'

const meta = {
  title: 'ui/Label',
  component: Label,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: 'Email' },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label {...args} htmlFor="email" />
      <Input id="email" type="email" placeholder="Email" />
    </div>
  ),
}

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Email" />
    </div>
  ),
}
