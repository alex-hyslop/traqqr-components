import type { Meta, StoryObj } from '@storybook/react-vite'
import { AppShell } from '@/components/traqqr/app-shell'
import { PageHeader } from '@/components/traqqr/page-header'
import { IntegrationCard } from '@/components/traqqr/integration-card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const INTEGRATIONS = [
  {
    slug: 'facebook',
    name: 'Facebook',
    description: 'Server-side event forwarding via Conversions API',
    status: 'No pixels',
  },
  {
    slug: 'cloudflare',
    name: 'Cloudflare',
    description:
      'Longer cookie lifetime and fewer blocked events via first-party reverse proxy',
    status: 'Not connected',
  },
  {
    slug: 'ablefy',
    name: 'Ablefy',
    description: 'Course & membership order tracking via the Ablefy API',
    status: 'Not connected',
  },
  {
    slug: 'klicktipp',
    name: 'KlickTipp',
    description: 'Email marketing automation and subscriber enrichment',
    status: 'Not connected',
  },
  {
    slug: 'digistore24',
    name: 'Digistore24',
    description: 'Payment provider for purchase tracking and order enrichment',
    status: 'Not connected',
  },
  {
    slug: 'webinaris',
    name: 'Webinaris',
    description: 'Webinar attendance and registration enrichment for the attribution pipeline',
    status: 'Not connected',
  },
  {
    slug: 'everwebinar',
    name: 'EverWebinar',
    description:
      'Evergreen webinar registration and attendance enrichment for the attribution pipeline',
    status: 'Not connected',
  },
  {
    slug: 'hubspot',
    name: 'HubSpot',
    description: 'Meeting sync and contact enrichment for CRM-backed attribution',
    status: 'Not connected',
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    description: 'Conversion attribution for Meta advertising accounts',
    status: 'Open',
  },
]

const meta = {
  title: 'Pages/Integrations',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const List: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4136-52252',
    },
  },
  render: () => (
    <div className="dark">
      <AppShell active="Integrations">
        <div className="flex items-start justify-between">
          <PageHeader
            title="Integrations"
            description="Connect and manage your marketing and analytics integrations."
          />
          <div className="flex flex-col items-end gap-2">
            <span className="text-sm font-mono text-muted-foreground">Filter status</span>
            <ToggleGroup type="single" variant="outline" size="sm" defaultValue="all">
              <ToggleGroupItem value="all">All</ToggleGroupItem>
              <ToggleGroupItem value="connected">Connected</ToggleGroupItem>
              <ToggleGroupItem value="not-connected">Not Connected</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <div className="grid w-[1089px] grid-cols-3 gap-6">
          {INTEGRATIONS.map((i) => (
            <IntegrationCard
              key={i.slug}
              name={i.name}
              description={i.description}
              status={i.status}
              logo={<img src={`/brands/${i.slug}.svg`} alt="" className="size-8" />}
            />
          ))}
        </div>
      </AppShell>
    </div>
  ),
}
