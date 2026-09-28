import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight } from 'lucide-react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'
import { Button } from './button'
import { Badge } from './badge'

const meta = {
  title: 'ui/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
  args: { size: 'default' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Card {...args} className="w-[368px]">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Login</Button>
      </CardFooter>
    </Card>
  ),
}

export const Default: Story = {
  render: () => (
    <Card className="w-[368px]">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Login</Button>
      </CardFooter>
    </Card>
  ),
}

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[368px]">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
    </Card>
  ),
}

export const IntegrationVariant: Story = {
  name: 'Integration card',
  render: () => (
    <Card className="w-[347px] gap-4 p-6">
      <div className="flex w-full items-center justify-between">
        <div
          className="flex size-[58px] items-center justify-center rounded-2xl border p-1"
          style={{
            backgroundImage:
              'linear-gradient(-58deg, rgba(56,189,248,0.1) 20%, rgba(255,171,64,0.42) 86%)',
          }}
        >
          <div className="size-12 rounded-lg bg-muted" />
        </div>
        <CardAction className="static row-span-1 flex items-center gap-2 self-center">
          <Badge variant="outline">Outline</Badge>
          <ChevronRight className="size-4 text-muted-foreground" />
        </CardAction>
      </div>
      <CardHeader className="px-0">
        <CardTitle>Facebook</CardTitle>
        <CardDescription>Server-side event forwarding via Conversions API</CardDescription>
      </CardHeader>
    </Card>
  ),
}
