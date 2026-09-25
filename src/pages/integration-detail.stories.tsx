import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight } from 'lucide-react'
import { AppShell } from '@/components/traqqr/app-shell'
import { IdentityRow } from '@/components/traqqr/identity-row'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

function ConnectCard({
  title,
  description,
  cta,
}: {
  title: string
  description: string
  cta: string
}) {
  return (
    <Card className="w-full items-center gap-4 border bg-card-translucent px-16 py-10 text-center">
      <CardHeader className="items-center px-4 text-center">
        <CardTitle className="text-lg font-sans">{title}</CardTitle>
        <CardDescription className="font-mono">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button shape="rounded">
          {cta} <ChevronRight data-icon="inline-end" />
        </Button>
      </CardContent>
    </Card>
  )
}

function IntegrationDetailPage({
  slug,
  name,
  status = 'Not connected',
  description,
  connectTitle,
  connectDescription,
  connectCta,
}: {
  slug: string
  name: string
  status?: string
  description: string
  connectTitle: string
  connectDescription: string
  connectCta: string
}) {
  return (
    <div className="dark">
      <AppShell active="Integrations">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Integrations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <IdentityRow
          title={name}
          status={status}
          statusVariant="destructive"
          description={description}
          logo={<img src={`/brands/${slug}.svg`} alt="" className="size-8" />}
        />
        <ConnectCard title={connectTitle} description={connectDescription} cta={connectCta} />
      </AppShell>
    </div>
  )
}

const meta = {
  title: 'Pages/Integrations/Detail',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Facebook: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-7144',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="facebook"
      name="Facebook"
      status="Not connected"
      description="OAuth install and ad-account selection for Meta conversion attribution."
      connectTitle="No Facebook Pixels yet"
      connectDescription="Create a pixel credential here. Then link it to a site from the Site detail page to start server-side event forwarding."
      connectCta="Connect Pixel"
    />
  ),
}

export const Cloudflare: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-10227',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="cloudflare"
      name="Cloudflare"
      description="Longer cookie lifetime and fewer blocked events via first-party reverse proxy."
      connectTitle="Connect your Cloudflare account"
      connectDescription="Enter your Cloudflare API token to enable first-party proxy setup. Create a token with Zone:Read, Workers Scripts:Edit, and Workers Routes:Edit permissions."
      connectCta="Connect Cloudflare"
    />
  ),
}

export const Ablefy: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4136-59415',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="ablefy"
      name="Ablefy"
      description="Course & membership order tracking via the Ablefy API."
      connectTitle="Connect your Ablefy account"
      connectDescription="Enter your Ablefy API key and secret to enable order tracking. You can find them in your Ablefy account API settings."
      connectCta="Connect Ablefy"
    />
  ),
}

export const KlickTipp: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-13311',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="klicktipp"
      name="KlickTipp"
      description="Email marketing automation and subscriber enrichment."
      connectTitle="Connect your KlickTipp account"
      connectDescription="Connect your KlickTipp account to enable email marketing automation and subscriber enrichment."
      connectCta="Connect KlickTipp"
    />
  ),
}

// Note: Digistore24, Webinaris, EverWebinar and HubSpot follow the exact same
// pattern confirmed on Cloudflare/Ablefy/KlickTipp above, but their connect-card
// copy was generated from that confirmed template + the List page's descriptions
// rather than individually fetched via get_design_context (to conserve budget) —
// flagged for a follow-up screenshot check.

export const Digistore24: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-16395',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="digistore24"
      name="Digistore24"
      description="Payment provider for purchase tracking and order enrichment."
      connectTitle="Connect your Digistore24 account"
      connectDescription="Connect your Digistore24 account to enable purchase tracking and order enrichment."
      connectCta="Connect Digistore24"
    />
  ),
}

export const Webinaris: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-19482',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="webinaris"
      name="Webinaris"
      description="Webinar attendance and registration enrichment for the attribution pipeline."
      connectTitle="Connect your Webinaris account"
      connectDescription="Connect your Webinaris account to enable webinar attendance and registration enrichment."
      connectCta="Connect Webinaris"
    />
  ),
}

export const EverWebinar: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-22565',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="everwebinar"
      name="EverWebinar"
      description="Evergreen webinar registration and attendance enrichment for the attribution pipeline."
      connectTitle="Connect your EverWebinar account"
      connectDescription="Connect your EverWebinar account to enable evergreen webinar registration and attendance enrichment."
      connectCta="Connect EverWebinar"
    />
  ),
}

export const HubSpot: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-25650',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="hubspot"
      name="HubSpot"
      description="Meeting sync and contact enrichment for CRM-backed attribution."
      connectTitle="Connect your HubSpot account"
      connectDescription="Connect your HubSpot account to enable meeting sync and contact enrichment."
      connectCta="Connect HubSpot"
    />
  ),
}

export const MetaAds: Story = {
  name: 'Meta Ads',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-28737',
    },
  },
  render: () => (
    <IntegrationDetailPage
      slug="meta-ads"
      name="Meta Ads"
      description="OAuth install and ad-account selection for Meta conversion attribution."
      connectTitle="No Meta install yet"
      connectDescription="Connect Meta Ads to enable Meta conversion attribution. Traqqr will request ads_read and ads_management scopes."
      connectCta="Connect Meta Ads"
    />
  ),
}
