import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect, NativeSelectOption } from './native-select'

const Options = () => (
  <>
    <NativeSelectOption value="starter">Starter — $19/month</NativeSelectOption>
    <NativeSelectOption value="pro">Pro — $49/month</NativeSelectOption>
    <NativeSelectOption value="enterprise">Enterprise — Contact us</NativeSelectOption>
  </>
)

const meta = {
  title: 'Atoms/NativeSelect',
  component: NativeSelect,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
    dir: { control: 'inline-radio', options: ['ltr', 'rtl'] },
    size: { control: false },
  },
  args: { disabled: false, 'aria-invalid': false, dir: 'ltr' },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <NativeSelect {...args} defaultValue="pro">
      <Options />
    </NativeSelect>
  ),
}

export const States: Story = {
  name: 'State × Dir',
  parameters: { pseudo: { focusVisible: ['.state-focus select'] } },
  render: () => (
    <div className="grid w-fit grid-cols-2 gap-6">
      {(['ltr', 'rtl'] as const).map((dir) => (
        <div key={dir} className="flex flex-col gap-6">
          <NativeSelect dir={dir} defaultValue="pro"><Options /></NativeSelect>
          <NativeSelect dir={dir} defaultValue="pro" className="state-focus"><Options /></NativeSelect>
          <NativeSelect dir={dir} defaultValue="pro" aria-invalid><Options /></NativeSelect>
          <NativeSelect dir={dir} defaultValue="pro" disabled><Options /></NativeSelect>
        </div>
      ))}
    </div>
  ),
}

export const BillingPlan: Story = {
  name: 'Billing plan (full label, no truncation)',
  render: () => (
    <NativeSelect defaultValue="enterprise">
      <Options />
    </NativeSelect>
  ),
}
