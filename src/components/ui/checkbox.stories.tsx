import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './checkbox'
import { Label } from './label'

type CheckboxStoryArgs = ComponentProps<typeof Checkbox> & { label?: string }

const meta: Meta<CheckboxStoryArgs> = {
  title: 'ui/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { disabled: false, 'aria-invalid': false, label: 'Accept terms and conditions' },
}

export default meta
type Story = StoryObj<CheckboxStoryArgs>

export const Playground: Story = {
  render: ({ label, ...args }) => (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-playground" {...args} />
      <Label htmlFor="checkbox-playground">{label}</Label>
    </div>
  ),
}

export const States: Story = {
  name: 'Interaction × Data state',
  parameters: { pseudo: { focusVisible: ['.state-focus'] } },
  render: () => (
    <div className="grid grid-cols-[auto_repeat(4,auto)] items-center gap-x-8 gap-y-4 text-xs">
      <span />
      <span>Default</span>
      <span>Focus</span>
      <span>Invalid</span>
      <span>Disabled</span>
      <span className="text-muted-foreground">Unchecked</span>
      <Checkbox aria-label="Unchecked" />
      <Checkbox aria-label="Unchecked focus" className="state-focus" />
      <Checkbox aria-label="Invalid unchecked" aria-invalid />
      <Checkbox aria-label="Disabled unchecked" disabled />
      <span className="text-muted-foreground">Checked</span>
      <Checkbox aria-label="Checked" defaultChecked />
      <Checkbox aria-label="Checked focus" defaultChecked className="state-focus" />
      <Checkbox aria-label="Invalid checked" defaultChecked aria-invalid />
      <Checkbox aria-label="Disabled checked" defaultChecked disabled />
      <span className="text-muted-foreground">Invalid-checked</span>
      <span />
      <span />
      <span />
      <Checkbox aria-label="Disabled invalid checked" defaultChecked disabled aria-invalid />
    </div>
  ),
}
