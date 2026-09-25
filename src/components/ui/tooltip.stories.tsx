import type { Meta, StoryObj } from '@storybook/react-vite'
import { LogOut } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { Button } from './button'

const meta = {
  title: 'ui/Tooltip',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const LogoutHover: Story = {
  name: 'Logout hover (side=left)',
  render: () => (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Logout">
            <LogOut />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">Logout</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}
