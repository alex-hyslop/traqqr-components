import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LogOut } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { Button } from './button'
import { Kbd } from './kbd'

type TooltipStoryArgs = ComponentProps<typeof TooltipContent> & {
  label: string
  leftKbd: boolean
  rightKbd: boolean
}

const meta: Meta<TooltipStoryArgs> = {
  title: 'Atoms/Tooltip',
  component: TooltipContent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    label: { control: 'text' },
    leftKbd: { control: 'boolean' },
    rightKbd: { control: 'boolean' },
  },
  args: { side: 'left', label: 'Logout', leftKbd: false, rightKbd: false },
}

export default meta
type Story = StoryObj<TooltipStoryArgs>

export const Playground: Story = {
  render: ({ side, label, leftKbd, rightKbd }) => (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" aria-label={label}>
            <LogOut />
          </Button>
        </TooltipTrigger>
        <TooltipContent side={side}>
          {leftKbd && <Kbd>⇧</Kbd>}
          {label}
          {rightKbd && <Kbd>⇧</Kbd>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const Placements: Story = {
  name: 'Placement: Top / Bottom / Left / Right',
  render: () => (
    <TooltipProvider>
      <div className="grid grid-cols-2 gap-x-40 gap-y-20 p-16">
        {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
          <Tooltip key={side} open>
            <TooltipTrigger asChild>
              <Button variant="outline" className="capitalize">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side}>Tooltip</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  ),
}

export const WithKbd: Story = {
  name: 'Left Kbd / Right Kbd',
  render: () => (
    <TooltipProvider>
      <div className="flex gap-40 p-16">
        <Tooltip open>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent><Kbd>⇧</Kbd>Tooltip</TooltipContent>
        </Tooltip>
        <Tooltip open>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip<Kbd>⇧</Kbd></TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}

export const LogoutHover: Story = {
  name: 'Logout hover (side=left)',
  render: () => (
    <TooltipProvider>
      <Tooltip open>
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
