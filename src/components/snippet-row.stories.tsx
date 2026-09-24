import type { Meta, StoryObj } from '@storybook/react-vite'
import { SnippetRow } from './snippet-row'

const meta = {
  title: 'components/SnippetRow',
  component: SnippetRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof SnippetRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { snippet: 'npm install @klicktipp/components' },
  render: (args) => (
    <div className="max-w-md">
      <SnippetRow {...args} />
    </div>
  ),
}
