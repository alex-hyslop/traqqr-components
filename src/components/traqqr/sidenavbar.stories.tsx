import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidenavbar } from './sidenavbar'

const meta = {
  title: 'Traqqr/Sidenavbar',
  component: Sidenavbar,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4065-953',
    },
  },
} satisfies Meta<typeof Sidenavbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-screen dark">
      <Sidenavbar />
    </div>
  ),
}
