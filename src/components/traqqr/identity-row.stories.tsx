import type { Meta, StoryObj } from '@storybook/react-vite'
import { IdentityRow } from './identity-row'

const meta = {
  title: 'Traqqr/IdentityRow',
  component: IdentityRow,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof IdentityRow>

export default meta
type Story = StoryObj<typeof meta>

export const IntegrationDetail: Story = {
  args: {
    title: 'Facebook',
    status: 'Connected',
    description: 'Server-side event forwarding via Conversions API',
    logo: <img src="/brands/facebook.svg" alt="" className="size-8" />,
  },
}
