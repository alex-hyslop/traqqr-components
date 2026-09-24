import { Mail, Loader2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-10 p-10">
      <div>
        <h1 className="text-2xl font-semibold">Button</h1>
        <p className="text-muted-foreground text-sm">
          shadcn/ui Button — all variants, sizes and states.
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium">Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium">Sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Icon button">
            <ChevronRight />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium">Icon left / right</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <Mail data-icon="inline-start" /> Email
          </Button>
          <Button variant="outline">
            Continue <ChevronRight data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium">States</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button disabled>
            <Loader2 className="animate-spin" /> Loading
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium">As child (renders as a link)</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href="https://ui.shadcn.com">Go to shadcn/ui</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default App
