import type { Meta, StoryObj } from '@storybook/react-vite'
import { FieldDescription } from './field'

const meta = {
  title: 'ui/FieldDescription',
  component: FieldDescription,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'inline-radio', options: ['left', 'right'] },
    children: { control: 'text' },
  },
  args: { align: 'left', children: 'Shown in the sidebar and reports.' },
} satisfies Meta<typeof FieldDescription>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="w-80">
      <FieldDescription {...args} />
    </div>
  ),
}

export const Alignment: Story = {
  name: 'Alignment: Left / Right',
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <FieldDescription align="left">Left aligned description.</FieldDescription>
      <FieldDescription align="right">Right aligned description.</FieldDescription>
    </div>
  ),
}
