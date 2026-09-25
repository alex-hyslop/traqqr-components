import type { Meta, StoryObj } from '@storybook/react-vite'

const STYLES = [
  { name: 'Text-3xl/Header', className: 'text-3xl font-sans', uses: 23 },
  { name: 'Text-2xl/Header', className: 'text-2xl font-sans', uses: 3 },
  { name: 'Text-xl/Semi Bold', className: 'text-xl font-sans font-semibold', uses: 5 },
  { name: 'Text-lg/Header', className: 'text-lg font-sans', uses: 218 },
  { name: 'Text-base/Header', className: 'text-base font-sans', uses: 29 },
  { name: 'Text-base/Medium', className: 'text-base font-mono font-normal', uses: 7 },
  { name: 'Text-sm/Medium', className: 'text-sm font-mono font-normal', uses: 92 },
  { name: 'Text-sm/Regular', className: 'text-sm font-mono font-normal', uses: 127 },
  { name: 'Text-sm/Light', className: 'text-sm font-mono font-normal', uses: 1 },
  { name: 'Text-xs/Medium', className: 'text-xs font-mono font-normal', uses: 8 },
  { name: 'Text-xs/Regular', className: 'text-xs font-mono font-normal', uses: 30 },
]

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-38091',
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-6 bg-background p-8">
      {STYLES.map((s) => (
        <div key={s.name} className="flex items-baseline gap-6 border-b pb-4">
          <code className="w-48 shrink-0 text-xs text-muted-foreground">{s.name}</code>
          <p className={s.className}>The quick brown fox jumps over the lazy dog</p>
          <span className="ml-auto shrink-0 text-xs text-muted-foreground">{s.uses} uses</span>
        </div>
      ))}
    </div>
  ),
}
