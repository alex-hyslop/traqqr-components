import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { Toaster } from './sonner'
import { Button } from './button'

const meta = {
  title: 'ui/Sonner',
  component: Toaster,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

function Demo({ preload }: { preload?: boolean }) {
  useEffect(() => {
    if (!preload) return
    toast('Embed code copied', { description: 'Paste it into your site’s <head>.', duration: Infinity })
    toast.error('Couldn’t save changes', { description: 'Check your connection and try again.', duration: Infinity })
    toast.success('Pixel link updated', { description: 'Google now sends events to Google Pixel (Production).', duration: Infinity })
    return () => toast.dismiss()
  }, [preload])
  return (
    <div className="flex min-h-[420px] flex-wrap items-start gap-3 p-6">
      <Button onClick={() => toast.success('Changes saved')}>Success</Button>
      <Button variant="outline" onClick={() => toast.error('Couldn’t save changes', { description: 'Check your connection and try again.', duration: Infinity })}>
        Error
      </Button>
      <Button variant="secondary" onClick={() => toast('Embed code copied', { description: 'Paste it into your site’s <head>.' })}>
        Default
      </Button>
      <Toaster />
    </div>
  )
}

export const Playground: Story = { render: () => <Demo /> }

export const Types: Story = {
  name: 'Type: Success / Error / Default',
  render: () => <Demo preload />,
}
