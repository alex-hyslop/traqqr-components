import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, FieldDescription, FieldError, FieldLabel } from './field'
import { Input } from './input'

const meta = {
  title: 'ui/Field',
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1928-3999',
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="site-name">Site name</FieldLabel>
        <Input id="site-name" placeholder="My site" />
        <FieldDescription>Shown in the sidebar and reports.</FieldDescription>
      </Field>
    </div>
  ),
}

export const Destructive: Story = {
  render: () => (
    <div className="max-w-sm">
      <Field data-invalid>
        <FieldLabel htmlFor="site-url">Site URL</FieldLabel>
        <Input id="site-url" aria-invalid placeholder="https://" />
        <FieldError>A valid URL is required.</FieldError>
      </Field>
    </div>
  ),
}
