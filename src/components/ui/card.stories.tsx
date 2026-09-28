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
import { Avatar, AvatarFallback } from './avatar'

const meta = {
  title: 'ui/Card',
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

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

export const TestimonialVariant: Story = {
  name: 'Testimonial card',
  render: () => (
    <Card className="w-[368px]">
      <CardContent>
        <p className="text-sm text-muted-foreground">
          &ldquo;Traqqr cut our setup time from days to minutes.&rdquo;
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-3 border-t-0 bg-transparent pt-0">
        <Avatar size="sm">
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-sm">Alex Hyslop</CardTitle>
          <CardDescription>Head of Growth</CardDescription>
        </div>
      </CardFooter>
    </Card>
  ),
}

export const CtaVariant: Story = {
  name: 'CTA card',
  render: () => (
    <Card className="w-[368px] items-center gap-4 p-10 text-center">
      <CardTitle>Connect your Facebook account</CardTitle>
      <CardDescription>Start forwarding events with one click.</CardDescription>
      <Button shape="rounded">Connect</Button>
    </Card>
  ),
}
