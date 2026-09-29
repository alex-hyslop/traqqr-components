import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight, Shield, Trash2 } from 'lucide-react'
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

const meta: Meta<ComponentProps<typeof Card>> = {
  title: 'ui/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'translucent'] },
    tone: { control: 'inline-radio', options: ['default', 'destructive'] },
    layout: { control: 'inline-radio', options: ['default', 'centered'] },
    size: { control: 'inline-radio', options: ['default', 'sm'] },
  },
  args: { variant: 'default', tone: 'default', layout: 'default', size: 'default' },
}

export default meta

type Story = StoryObj<ComponentProps<typeof Card>>

export const Playground: Story = {
  render: (args) => (
    <Card {...args} className="w-[540px]">
      <CardHeader>
        <CardTitle>
          <Shield />
          First-Party Proxy
        </CardTitle>
        <CardDescription>Connect your Cloudflare account to enable first-party tracking.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline">Connect Cloudflare</Button>
      </CardFooter>
    </Card>
  ),
}

export const SectionCard: Story = {
  name: 'Section card (header + content)',
  render: () => (
    <Card className="w-[540px]">
      <CardHeader>
        <CardTitle>1 Site</CardTitle>
        <CardDescription>Click a site to view and edit its configuration.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-24 rounded-md border border-dashed" />
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  name: 'Header + footer band',
  render: () => (
    <Card className="w-[540px]">
      <CardHeader>
        <CardTitle>
          <Shield />
          First-Party Proxy
        </CardTitle>
        <CardDescription>Connect your Cloudflare account to enable first-party tracking.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline">Connect Cloudflare</Button>
      </CardFooter>
    </Card>
  ),
}

export const HeaderAction: Story = {
  name: 'Header action (stacks below on mobile)',
  render: () => (
    <Card className="w-full max-w-[540px]">
      <CardHeader>
        <CardTitle>Conversions</CardTitle>
        <CardDescription>Events you send to Meta as conversions.</CardDescription>
        <CardAction>
          <Button shape="rounded">Create Conversion</Button>
        </CardAction>
      </CardHeader>
    </Card>
  ),
}

export const DangerZone: Story = {
  name: 'Tone: destructive (Danger Zone)',
  render: () => (
    <Card tone="destructive" className="w-[720px]">
      <CardHeader>
        <CardTitle>
          <Trash2 />
          Danger Zone
        </CardTitle>
        <CardDescription>
          Permanently delete this site and all its configuration. This action cannot be undone.
        </CardDescription>
        <CardAction>
          <Button>Delete site</Button>
        </CardAction>
      </CardHeader>
    </Card>
  ),
}

export const Centered: Story = {
  name: 'Layout: centered (Connect card)',
  render: () => (
    <Card layout="centered" variant="translucent" className="w-[720px]">
      <CardHeader>
        <CardTitle>No Facebook Pixels yet</CardTitle>
        <CardDescription>
          Create a pixel credential here. Then link it to a site from the Site detail page to start
          server-side event forwarding.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button shape="rounded">
          Connect Pixel <ChevronRight data-icon="inline-end" />
        </Button>
      </CardContent>
    </Card>
  ),
}

export const Translucent: Story = {
  name: 'Variant: translucent',
  render: () => (
    <div className="rounded-2xl bg-[linear-gradient(204.6deg,#1c2c3e_25%,rgb(255_171_64/0.42)_38%,#17212c_55%)] p-10">
      <Card variant="translucent" className="w-[480px]">
        <CardHeader>
          <CardTitle>Reverse Proxy</CardTitle>
          <CardDescription>Cards over the app background use the translucent surface.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
}

export const IntegrationVariant: Story = {
  name: 'Integration card',
  render: () => (
    <Card className="w-[347px]">
      <CardContent className="flex items-center justify-between">
        <CardMedia>
          <div className="size-12 rounded-lg bg-muted" />
        </CardMedia>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Outline</Badge>
          <ChevronRight className="size-4 text-muted-foreground" />
        </div>
      </CardContent>
      <CardHeader>
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
