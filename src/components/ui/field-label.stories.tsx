import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './badge'
import { Field, FieldLabel } from './field'

type FieldLabelStoryArgs = ComponentProps<typeof FieldLabel> & {
  label: string
  asterisk: boolean
  badge: boolean
  action: boolean
  state: 'default' | 'destructive' | 'disabled'
  dir: 'ltr' | 'rtl'
}

const meta: Meta<FieldLabelStoryArgs> = {
  title: 'Atoms/FieldLabel',
  component: FieldLabel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    asterisk: { control: 'boolean' },
    badge: { control: 'boolean' },
    action: { control: 'boolean' },
    state: { control: 'inline-radio', options: ['default', 'destructive', 'disabled'] },
    dir: { control: 'inline-radio', options: ['ltr', 'rtl'] },
  },
  args: { label: 'Field label', asterisk: true, badge: false, action: false, state: 'default', dir: 'ltr' },
}

export default meta
type Story = StoryObj<FieldLabelStoryArgs>

const Label = ({
  label,
  asterisk,
  badge,
  action,
  state,
  dir,
}: Pick<FieldLabelStoryArgs, 'label' | 'asterisk' | 'badge' | 'action' | 'state' | 'dir'>) => (
  <Field
    className="w-72"
    dir={dir}
    data-invalid={state === 'destructive' ? 'true' : undefined}
    data-disabled={state === 'disabled' ? 'true' : undefined}
  >
    <FieldLabel htmlFor="field">
      {label}
      {asterisk && <span data-slot="field-label-asterisk" aria-hidden>*</span>}
      {badge && <Badge variant="secondary">Badge</Badge>}
      {action && <a data-slot="field-label-action" href="#">Action</a>}
    </FieldLabel>
  </Field>
)

export const Playground: Story = { render: (args) => <Label {...args} /> }

export const Slots: Story = {
  name: 'Asterisk / Badge / Action',
  render: () => (
    <div className="flex flex-col gap-4">
      <Label label="Field label" asterisk={false} badge={false} action={false} state="default" dir="ltr" />
      <Label label="Field label" asterisk badge={false} action={false} state="default" dir="ltr" />
      <Label label="Field label" asterisk badge action={false} state="default" dir="ltr" />
      <Label label="Field label" asterisk badge action state="default" dir="ltr" />
    </div>
  ),
}

export const States: Story = {
  name: 'State: Default / Destructive / Disabled × Dir',
  render: () => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
      {(['default', 'destructive', 'disabled'] as const).flatMap((state) =>
        (['ltr', 'rtl'] as const).map((dir) => (
          <Label key={`${state}-${dir}`} label="Field label" asterisk badge={false} action state={state} dir={dir} />
        ))
      )}
    </div>
  ),
}
