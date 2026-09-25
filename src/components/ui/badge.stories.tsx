import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check, ChevronRight } from 'lucide-react'
import { Badge } from './badge'

const meta = {
  title: 'ui/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1868-495',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'success',
        'warning',
      ],
    },
  },
  args: { children: 'Badge', variant: 'default' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVariants: Story = {
  name: 'State: Default / Secondary / Destructive / Outline / Ghost / Success / Warning',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'Left icon / Right icon',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="success">
        <Check data-icon="inline-start" /> Active
      </Badge>
      <Badge variant="outline">
        Details <ChevronRight data-icon="inline-end" />
      </Badge>
    </div>
  ),
}
