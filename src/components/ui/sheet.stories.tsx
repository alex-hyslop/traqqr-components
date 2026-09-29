import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight } from 'lucide-react'
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'
import { Button } from './button'
import { Field, FieldDescription, FieldLabel } from './field'
import { Input } from './input'
import { Textarea } from './textarea'

type SheetStoryArgs = { side: 'top' | 'right' | 'bottom' | 'left'; footer: boolean }

const meta: Meta<SheetStoryArgs> = {
  title: 'ui/Sheet',
  component: Sheet,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    footer: { control: 'boolean' },
  },
  args: { side: 'right', footer: true },
}

export default meta
type Story = StoryObj<SheetStoryArgs>

const CreateSiteFields = () => (
  <>
    <Field>
      <FieldLabel htmlFor="site-name">Name</FieldLabel>
      <Input id="site-name" defaultValue="My Website" />
      <FieldDescription>A friendly name for your site.</FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="site-domains">Allowed Domains</FieldLabel>
      <Textarea id="site-domains" placeholder="example.com, www.example.com, localhost" />
      <FieldDescription>Comma-separated list of domains allowed to send events.</FieldDescription>
    </Field>
  </>
)

export const Playground: Story = {
  render: ({ side, footer }) => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Create Site</SheetTitle>
          <SheetDescription>Add a new site to start tracking events and conversions.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <CreateSiteFields />
        </SheetBody>
        {footer && (
          <SheetFooter>
            <Button>
              Create Site <ChevronRight data-icon="inline-end" />
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  ),
}

export const CreateSiteDrawer: Story = {
  name: 'Create site (560px)',
  render: () => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Site</SheetTitle>
          <SheetDescription>Add a new site to start tracking events and conversions.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <CreateSiteFields />
        </SheetBody>
        <SheetFooter>
          <Button>
            Create Site <ChevronRight data-icon="inline-end" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const ScrollingBody: Story = {
  name: 'Long body (scrolls, footer pinned)',
  render: () => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Configure Snippet</SheetTitle>
          <SheetDescription>Header and footer stay fixed while the body scrolls.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          {Array.from({ length: 6 }, (_, i) => (
            <CreateSiteFields key={i} />
          ))}
        </SheetBody>
        <SheetFooter>
          <Button>Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const LeftNav: Story = {
  name: 'Side: left (mobile nav, 320px)',
  render: () => (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
