import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd, KbdGroup } from './kbd'

const meta = {
  title: 'Atoms/Kbd',
  component: Kbd,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { children: { control: 'text' } },
  args: { children: '⇧' },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const CodeValue: Story = {
  name: 'Inline code value',
  render: () => (
    <p className="text-sm">
      Append <Kbd>?tqrInspector=1</Kbd> to any page URL.
    </p>
  ),
}

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}
