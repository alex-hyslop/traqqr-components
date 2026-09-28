import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect, NativeSelectOption } from './native-select'

const meta = {
  title: 'ui/NativeSelect',
  component: NativeSelect,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
  args: { size: 'default' },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-xs">
      <NativeSelect {...args} defaultValue="pro">
        <NativeSelectOption value="starter">Starter — $19/month</NativeSelectOption>
        <NativeSelectOption value="pro">Pro — $49/month</NativeSelectOption>
        <NativeSelectOption value="enterprise">Enterprise — Contact us</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

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
