import type { Meta, StoryObj } from '@storybook/react-vite'
import { IntegrationCard } from './integration-card'

const meta = {
  title: 'Traqqr/IntegrationCard',
  component: IntegrationCard,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4160-6394',
    },
  },
} satisfies Meta<typeof IntegrationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Facebook: Story = {
  args: {
    name: 'Facebook',
    description: 'Server-side event forwarding via Conversions API',
    status: 'Outline',
    logo: <img src="/brands/facebook.svg" alt="" className="size-8" />,
  },
}

export const NoChevron: Story = {
  args: {
    name: 'Cloudflare',
    description: 'DNS and edge caching',
    status: 'Secondary',
    chevron: false,
    logo: <img src="/brands/cloudflare.svg" alt="" className="size-8" />,
  },
}
