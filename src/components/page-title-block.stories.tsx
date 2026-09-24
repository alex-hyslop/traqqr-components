import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { PageTitleBlock } from './page-title-block'

const meta = {
  title: 'components/PageTitleBlock',
  component: PageTitleBlock,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    title: 'Integrations',
    description: 'Connect third-party tools to your workspace.',
  },
} satisfies Meta<typeof PageTitleBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithActions: Story = {
  args: {
    title: 'Invoices',
    description: 'View and download your billing history.',
    actions: (
      <>
        <Button variant="outline">Export</Button>
        <Button>New invoice</Button>
      </>
    ),
  },
}
