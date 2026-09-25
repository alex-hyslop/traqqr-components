import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleAlert } from 'lucide-react'
import { Alert, AlertAction, AlertDescription, AlertTitle } from './alert'
import { Button } from './button'

const meta = {
  title: 'ui/Alert',
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1774-1994',
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <CircleAlert />
      <AlertTitle>New events detected</AlertTitle>
      <AlertDescription>Live Feed found new events matching your filters.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <CircleAlert />
      <AlertTitle>Connection lost</AlertTitle>
      <AlertDescription>We couldn&apos;t reach the Live Feed stream.</AlertDescription>
    </Alert>
  ),
}

export const WithButton: Story = {
  name: 'With Button action',
  render: () => (
    <Alert>
      <CircleAlert />
      <AlertTitle>New events detected</AlertTitle>
      <AlertDescription>Live Feed found new events matching your filters.</AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          View
        </Button>
      </AlertAction>
    </Alert>
  ),
}
