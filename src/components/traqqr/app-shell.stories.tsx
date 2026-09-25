import type { Meta, StoryObj } from '@storybook/react-vite'
import { AppShell } from './app-shell'
import { PageHeader } from './page-header'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Traqqr/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4142-4999',
    },
  },
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: null },
  render: () => (
    <div className="dark">
      <AppShell active="Snippets">
        <PageHeader
          title="Snippets"
          description="Manage tracking snippets for your sites"
          actions={<Button shape="rounded">Create snippet</Button>}
        />
      </AppShell>
    </div>
  ),
}
