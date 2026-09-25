import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = {
  title: 'ui/ToggleGroup',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

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
