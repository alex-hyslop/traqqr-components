import type { Meta, StoryObj } from '@storybook/react-vite'
import { Settings } from 'lucide-react'
import { SectionIntro } from './section-intro'

const meta = {
  title: 'components/SectionIntro',
  component: SectionIntro,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    icon: <Settings className="size-4" />,
    title: 'General settings',
    description: 'Manage your account preferences and defaults.',
  },
} satisfies Meta<typeof SectionIntro>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
