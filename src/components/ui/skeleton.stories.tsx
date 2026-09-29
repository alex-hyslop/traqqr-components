import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './skeleton'
import { Card, CardContent, CardFooter, CardHeader } from './card'

const meta = {
  title: 'ui/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { className: { control: 'text' } },
  args: { className: 'h-4 w-48' },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const StatCard: Story = {
  name: 'Stat card (loading)',
  render: () => (
    <Card variant="translucent" className="w-52">
      <CardContent className="flex flex-col gap-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-8 w-22" />
        <Skeleton className="h-3 w-36" />
      </CardContent>
    </Card>
  ),
}

export const SectionCard: Story = {
  name: 'Card (loading)',
  render: () => (
    <Card className="w-[540px]">
      <CardHeader>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-72" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-8 w-36" />
      </CardFooter>
    </Card>
  ),
}

export const TableCard: Story = {
  name: 'Table card (loading)',
  render: () => (
    <Card className="w-[720px]">
      <CardHeader>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-72" />
      </CardHeader>
      <CardContent>
        <div className="divide-y rounded-md border">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex items-center gap-4 p-3">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
}
