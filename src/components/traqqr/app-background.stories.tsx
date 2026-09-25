import type { Meta, StoryObj } from '@storybook/react-vite'
import './app-background.css'
import { AppBackground } from './app-background'

const meta = {
  title: 'Foundations/AppBackground',
  component: AppBackground,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4211-139',
    },
  },
} satisfies Meta<typeof AppBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[600px] w-full overflow-hidden bg-background">
      <AppBackground />
    </div>
  ),
}
