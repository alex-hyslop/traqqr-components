import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown } from './dropdown'

const meta = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Actions',
    options: [
      { label: 'Edit', value: 'edit' },
      { label: 'Duplicate', value: 'duplicate' },
      { label: 'Delete', value: 'delete', isDestructive: true },
    ],
  },
}
