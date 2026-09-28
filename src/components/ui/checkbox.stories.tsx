import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './checkbox'

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
  },
  args: { checked: false, disabled: false, 'aria-invalid': false, 'aria-label': 'Checkbox' },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

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
