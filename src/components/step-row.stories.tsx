import type { Meta, StoryObj } from '@storybook/react-vite'
import { StepRow } from './step-row'

const meta = {
  title: 'components/StepRow',
  component: StepRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: { step: 1, title: 'Create account' },
} satisfies Meta<typeof StepRow>

export default meta
type Story = StoryObj<typeof meta>

export const Sequence: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <StepRow step={1} title="Create account" description="Sign up with your email." isComplete />
      <StepRow step={2} title="Verify email" description="Check your inbox for a link." isComplete />
      <StepRow step={3} title="Connect integration" description="Link your first data source." />
    </div>
  ),
}
