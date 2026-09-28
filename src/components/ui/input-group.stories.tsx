import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Info, Search } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from './input-group'

type InputGroupStoryArgs = ComponentProps<typeof InputGroup> & {
  leftIcon: boolean
  rightIcon: boolean
  addon: boolean
  shape: 'default' | 'rounded'
  disabled: boolean
  invalid: boolean
}

const meta: Meta<InputGroupStoryArgs> = {
  title: 'Atoms/InputGroup',
  component: InputGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
    addon: { control: 'boolean' },
    shape: { control: 'inline-radio', options: ['default', 'rounded'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  args: { leftIcon: true, rightIcon: false, addon: false, shape: 'default', disabled: false, invalid: false },
}

export default meta
type Story = StoryObj<InputGroupStoryArgs>

export const Playground: Story = {
  render: ({ leftIcon, rightIcon, addon, shape, disabled, invalid }) => (
    <InputGroup className="w-80">
      <InputGroupInput shape={shape} placeholder="Input group control" disabled={disabled} aria-invalid={invalid} />
      {(leftIcon || addon) && (
        <InputGroupAddon>
          {leftIcon && <Info />}
          {addon && <InputGroupText className="text-foreground">Input group addon</InputGroupText>}
        </InputGroupAddon>
      )}
      {rightIcon && (
        <InputGroupAddon align="inline-end">
          <Info />
        </InputGroupAddon>
      )}
    </InputGroup>
  ),
}

export const SearchInput: Story = {
  name: 'Table search (left search icon)',
  render: () => (
    <InputGroup className="w-80">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Addon: Story = {
  name: 'Input group addon + control',
  render: () => (
    <InputGroup className="w-80">
      <InputGroupInput placeholder="Input group control" />
      <InputGroupAddon>
        <InputGroupText className="text-foreground">Input group addon</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}
