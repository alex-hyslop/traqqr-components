import { Fragment, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb'

const meta = {
  title: 'ui/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Billing</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

const HIDDEN_CRUMBS = ['Sites', 'traqqr.com', 'Snippets']

function CollapsedBreadcrumb() {
  const [expanded, setExpanded] = useState(false)
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {expanded ? (
          HIDDEN_CRUMBS.map((crumb) => (
            <Fragment key={crumb}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{crumb}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ))
        ) : (
          <>
            <BreadcrumbItem>
              <button
                type="button"
                aria-label="Show hidden breadcrumbs"
                className="rounded-sm hover:text-foreground"
                onClick={() => setExpanded(true)}
              >
                <BreadcrumbEllipsis />
              </button>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>Configure snippet</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export const WithEllipsis: Story = {
  name: 'Collapsed (ellipsis)',
  parameters: {
    docs: {
      description: {
        story: 'Middle crumbs collapse into `BreadcrumbEllipsis`. Click the ellipsis to expand them.',
      },
    },
  },
  render: () => <CollapsedBreadcrumb />,
}
