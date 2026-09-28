import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight } from 'lucide-react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
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
        <CardMedia>
          <div className="size-12 rounded-lg bg-muted" />
        </CardMedia>
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

export const Media: Story = {
  name: 'Card media',
  parameters: {
    docs: {
      description: {
        story:
          'Gradient logo tile. Override `--card-media-from`, `--card-media-to` and `--card-media-border` (or `--card-media-background` with any background-image, e.g. another gradient, to replace it entirely) on any ancestor.',
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      <CardMedia>
        <div className="size-12 rounded-lg bg-muted" />
      </CardMedia>
      <CardMedia className="[--card-media-from:rgb(74_222_128/0.15)] [--card-media-to:rgb(56_189_248/0.4)]">
        <div className="size-12 rounded-lg bg-muted" />
      </CardMedia>
      <CardMedia className="[--card-media-background:linear-gradient(var(--muted),var(--muted))] [--card-media-border:var(--border)]">
        <div className="size-12 rounded-lg bg-background" />
      </CardMedia>
    </div>
  ),
}
