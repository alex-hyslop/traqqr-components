import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd } from './kbd'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from './item'
import { Badge } from './badge'
import { Button } from './button'

const meta = {
  title: 'ui/Item',
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2118-8884',
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const StepList: Story = {
  name: 'Step list (Number media + Kbd)',
  render: () => (
    <div className="flex max-w-md flex-col gap-2">
      <Item variant="outline">
        <ItemMedia>
          <Badge className="size-6 rounded-full p-0">1</Badge>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Install the snippet</ItemTitle>
          <ItemDescription>Add the tracking snippet to your site&apos;s head.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Kbd>1</Kbd>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Badge className="size-6 rounded-full p-0">2</Badge>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Verify the connection</ItemTitle>
          <ItemDescription>Confirm events are being received.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Verify
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
}
