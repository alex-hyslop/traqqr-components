import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = {
  title: 'ui/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['single', 'multiple'] },
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
  },
  args: { type: 'single', variant: 'outline', size: 'sm' },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <ToggleGroup {...args} defaultValue="all">
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      <ToggleGroupItem value="connected">Connected</ToggleGroupItem>
      <ToggleGroupItem value="available">Available</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const IntegrationsFilter: Story = {
  name: 'Integrations filter (single, outline, sm)',
  render: () => (
    <ToggleGroup type="single" variant="outline" size="sm" defaultValue="all">
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      <ToggleGroupItem value="connected">Connected</ToggleGroupItem>
      <ToggleGroupItem value="available">Available</ToggleGroupItem>
    </ToggleGroup>
  ),
}
