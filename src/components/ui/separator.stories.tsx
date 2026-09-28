import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from './separator'

const meta = {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) =>
    args.orientation === 'vertical' ? (
      <div className="flex h-8 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator {...args} />
        <span>Docs</span>
      </div>
    ) : (
      <div className="w-64">
        <p className="text-sm">Section one</p>
        <Separator {...args} className="my-4" />
        <p className="text-sm">Section two</p>
      </div>
    ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm">Section one</p>
      <Separator className="my-4" />
      <p className="text-sm">Section two</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  ),
}
