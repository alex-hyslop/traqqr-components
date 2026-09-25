import type { Meta, StoryObj } from '@storybook/react-vite'

const TOKENS = [
  ['background', 'foreground'],
  ['card', 'card-foreground'],
  ['popover', 'popover-foreground'],
  ['primary', 'primary-foreground'],
  ['secondary', 'secondary-foreground'],
  ['muted', 'muted-foreground'],
  ['accent', 'accent-foreground'],
  ['destructive', 'destructive-foreground'],
] as const

const TRAQQR_TOKENS = ['brand', 'card-translucent', 'topbar', 'foreground-subtle'] as const

function Swatch({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-lg border"
        style={{ background: `var(--color-${name})` }}
      />
      <code className="text-xs">--{name}</code>
    </div>
  )
}

const meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  render: () => (
    <div className="flex flex-col gap-8 bg-background p-8">
      <div>
        <h2 className="mb-4 text-lg font-semibold">Base pairs</h2>
        <div className="grid grid-cols-4 gap-4">
          {TOKENS.map(([bg, fg]) => (
            <div key={bg} className="flex flex-col gap-2">
              <div
                className="flex h-16 w-full items-center justify-center rounded-lg border text-sm"
                style={{ background: `var(--color-${bg})`, color: `var(--color-${fg})` }}
              >
                Aa
              </div>
              <code className="text-xs">
                {bg} / {fg}
              </code>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Traqqr additions</h2>
        <div className="grid grid-cols-4 gap-4">
          {TRAQQR_TOKENS.map((t) => (
            <Swatch key={t} name={t} />
          ))}
        </div>
      </div>
    </div>
  ),
}

export const Dark: Story = {
  render: () => (
    <div className="dark flex flex-col gap-8 bg-background p-8">
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Base pairs</h2>
        <div className="grid grid-cols-4 gap-4">
          {TOKENS.map(([bg, fg]) => (
            <div key={bg} className="flex flex-col gap-2">
              <div
                className="flex h-16 w-full items-center justify-center rounded-lg border text-sm"
                style={{ background: `var(--color-${bg})`, color: `var(--color-${fg})` }}
              >
                Aa
              </div>
              <code className="text-xs text-foreground">
                {bg} / {fg}
              </code>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Traqqr additions</h2>
        <div className="grid grid-cols-4 gap-4">
          {TRAQQR_TOKENS.map((t) => (
            <Swatch key={t} name={t} />
          ))}
        </div>
      </div>
    </div>
  ),
}
