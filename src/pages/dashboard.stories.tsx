import type { Meta, StoryObj } from '@storybook/react-vite'
import { LayoutDashboard } from 'lucide-react'
import { AppShell } from '@/components/traqqr/app-shell'
import { PageHeader } from '@/components/traqqr/page-header'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

const meta = {
  title: 'Pages/Dashboard',
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4151-5810',
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const EmptyState: Story = {
  render: () => (
    <div className="dark">
      <AppShell active="Dashboard">
        <PageHeader title="Dashboard" />
        <div className="flex h-10 items-center gap-3">
          <NativeSelect defaultValue="google" className="w-[140px]">
            <NativeSelectOption value="google">Google</NativeSelectOption>
          </NativeSelect>
          <NativeSelect defaultValue="all" className="w-[140px]">
            <NativeSelectOption value="all">All Events</NativeSelectOption>
          </NativeSelect>
          <ToggleGroup type="single" variant="outline" size="sm" defaultValue="24h">
            <ToggleGroupItem value="24h">24h</ToggleGroupItem>
            <ToggleGroupItem value="72h">72h</ToggleGroupItem>
            <ToggleGroupItem value="7d">7d</ToggleGroupItem>
            <ToggleGroupItem value="30d">30d</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Empty className="py-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <LayoutDashboard />
            </EmptyMedia>
            <EmptyTitle>No events recorded</EmptyTitle>
            <EmptyDescription className="w-[360px]">
              Try selecting a different time range or check your tracking setup.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </AppShell>
    </div>
  ),
}
