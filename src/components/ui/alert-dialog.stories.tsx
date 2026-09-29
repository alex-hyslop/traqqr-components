import type { Meta, StoryObj } from '@storybook/react-vite'
import { Trash2 } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'
import { Button } from './button'

type ConfirmArgs = { title: string; description: string; action: string; media: boolean }

const meta: Meta<ConfirmArgs> = {
  title: 'ui/AlertDialog',
  component: AlertDialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    action: { control: 'text' },
    media: { control: 'boolean' },
  },
  args: {
    title: 'Delete this site?',
    description:
      'This permanently deletes Google and all its configuration, including conversions and proxy domains. This can’t be undone.',
    action: 'Delete site',
    media: true,
  },
}

export default meta
type Story = StoryObj<ConfirmArgs>

const Confirm = ({ title, description, action, media }: ConfirmArgs) => (
  <AlertDialog defaultOpen>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </AlertDialogTrigger>
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        {media && (
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <Trash2 />
          </AlertDialogMedia>
        )}
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction variant="destructive">{action}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

export const Playground: Story = { render: (args) => <Confirm {...args} /> }

export const DeleteSnippet: Story = {
  name: 'Delete snippet',
  args: {
    title: 'Delete this snippet?',
    description: 'Pages using this embed code will stop sending events. This can’t be undone.',
    action: 'Delete snippet',
  },
  render: (args) => <Confirm {...args} />,
}

export const UnlinkPixel: Story = {
  name: 'Unlink pixel',
  args: {
    title: 'Unlink this pixel?',
    description:
      'Google will stop sending server-side events to Google Pixel until you link a pixel again.',
    action: 'Unlink',
  },
  render: (args) => <Confirm {...args} />,
}

export const DisableProxy: Story = {
  name: 'Disable proxy domain',
  args: {
    title: 'Disable www.google.com?',
    description:
      'Tracking falls back to the default Traqqr domain, so some ad blockers may block events again.',
    action: 'Disable',
  },
  render: (args) => <Confirm {...args} />,
}
