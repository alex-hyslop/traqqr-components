import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'
import { Button } from './button'

const meta = {
  title: 'ui/Sheet',
  component: Sheet,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  args: { side: 'right' },
  render: (args) => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent side={args.side} className="sm:max-w-[460px]">
        <SheetHeader>
          <SheetTitle>Create site</SheetTitle>
          <SheetDescription>Add a new site to start tracking.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Create</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const CreateSiteDrawer: Story = {
  name: 'Create site (460px)',
  render: () => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[460px]">
        <SheetHeader>
          <SheetTitle>Create site</SheetTitle>
          <SheetDescription>Add a new site to start tracking.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Create</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const ConfigureSnippetDrawer: Story = {
  name: 'Configure snippet (560px)',
  render: () => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[560px]">
        <SheetHeader>
          <SheetTitle>Configure snippet</SheetTitle>
          <SheetDescription>Adjust snippet settings.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
