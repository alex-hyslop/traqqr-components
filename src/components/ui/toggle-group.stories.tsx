import type { Meta, StoryObj } from '@storybook/react-vite'
import { Filter } from 'lucide-react'
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
    icon: { control: 'boolean' },
  },
  args: { type: 'single', variant: 'outline', size: 'sm', icon: false },
} satisfies Meta<typeof ToggleGroup & { icon: boolean }>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ icon, ...args }) => (
    <ToggleGroup {...args} defaultValue="all">
      <ToggleGroupItem value="all">
        {icon && <Filter data-icon="inline-start" />}
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="connected">
        {icon && <Filter data-icon="inline-start" />}
        Connected
      </ToggleGroupItem>
      <ToggleGroupItem value="available">
        {icon && <Filter data-icon="inline-start" />}
        Available
      </ToggleGroupItem>
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
