import type { Meta, StoryObj } from '@storybook/react-vite'
import { BadgeCheck, Copy } from 'lucide-react'
import { Kbd } from './kbd'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from './item'
import { Badge } from './badge'
import { Button } from './button'

const meta = {
  title: 'ui/Item',
  component: Item,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'xs'],
    },
  },
  args: {
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-md">
      <Item {...args}>
        <ItemMedia variant="icon">
          <BadgeCheck />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item title</ItemTitle>
          <ItemDescription>Item description</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Action
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

export const StepList: Story = {
  name: 'Step list (Event Inspector)',
  render: () => (
    <ItemGroup className="max-w-3xl gap-1">
      <Item size="sm" className="px-0">
        <ItemMedia>
          <Badge variant="outline">1</Badge>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            Add this to your website URL: <Kbd>?tqrInspector=1</Kbd>
          </ItemTitle>
          <ItemDescription className="text-xs">
            Use &amp;tqrInspector=1 if your URL already has parameters.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline">
            <Copy data-icon="inline-start" /> Copy
          </Button>
        </ItemActions>
      </Item>
      {[
        'Browse your site — the inspector captures Meta Pixel events automatically',
        "Click 'Download Meta Pixel Payload' on the overlay",
        'Upload or paste the downloaded JSON below',
      ].map((title, i) => (
        <Item key={title} size="sm" className="px-0">
          <ItemMedia>
            <Badge variant="outline">{i + 2}</Badge>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{title}</ItemTitle>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  ),
}
