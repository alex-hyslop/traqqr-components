import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { FilterToggle } from './filter-toggle'

const meta = {
  title: 'components/FilterToggle',
  component: FilterToggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    value: 'all',
    options: [
      { label: 'All', value: 'all' },
      { label: 'Active', value: 'active' },
      { label: 'Archived', value: 'archived' },
    ],
  },
} satisfies Meta<typeof FilterToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('all')
    return (
      <FilterToggle
        value={value}
        onChange={setValue}
        options={[
          { label: 'All', value: 'all' },
          { label: 'Active', value: 'active' },
          { label: 'Archived', value: 'archived' },
        ]}
      />
    )
  },
}
