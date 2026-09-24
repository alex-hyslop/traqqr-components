import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { CreditCard, Settings, User } from 'lucide-react'
import { SidebarNavigation } from './sidebar-navigation'

const meta = {
  title: 'components/SidebarNavigation',
  component: SidebarNavigation,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    activeValue: 'profile',
    items: [
      { label: 'Profile', value: 'profile', icon: <User className="size-4" /> },
      { label: 'Billing', value: 'billing', icon: <CreditCard className="size-4" /> },
      { label: 'Settings', value: 'settings', icon: <Settings className="size-4" /> },
    ],
  },
} satisfies Meta<typeof SidebarNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('profile')
    return (
      <SidebarNavigation
        activeValue={active}
        onSelect={setActive}
        items={[
          { label: 'Profile', value: 'profile', icon: <User className="size-4" /> },
          { label: 'Billing', value: 'billing', icon: <CreditCard className="size-4" /> },
          { label: 'Settings', value: 'settings', icon: <Settings className="size-4" /> },
        ]}
      />
    )
  },
}
