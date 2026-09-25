import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect, NativeSelectOption } from './native-select'

const meta = {
  title: 'ui/NativeSelect',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BillingPlan: Story = {
  name: 'Billing plan (full label, no truncation)',
  render: () => (
    <div className="max-w-xs">
      <NativeSelect defaultValue="pro">
        <NativeSelectOption value="starter">Starter — $19/month</NativeSelectOption>
        <NativeSelectOption value="pro">Pro — $49/month</NativeSelectOption>
        <NativeSelectOption value="enterprise">Enterprise — Contact us</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}
