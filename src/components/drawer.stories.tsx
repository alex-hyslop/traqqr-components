import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { DrawerHeader } from './drawer-header'
import { DrawerFooter } from './drawer-footer'

const meta = {
  title: 'components/Drawer',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const HeaderAndFooter: Story = {
  render: () => (
    <div className="max-w-sm rounded-lg border border-border">
      <DrawerHeader title="Edit profile" onClose={() => {}} />
      <div className="p-4 text-sm text-muted-foreground">Drawer body content goes here.</div>
      <DrawerFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </DrawerFooter>
    </div>
  ),
}
