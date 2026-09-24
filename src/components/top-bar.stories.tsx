import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TopBar } from './top-bar'

const meta = {
  title: 'components/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    title: 'Traqqr',
    actions: (
      <>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell />
        </Button>
        <Button size="sm">Upgrade</Button>
      </>
    ),
  },
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
