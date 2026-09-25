import type { ComponentType } from 'react'
import {
  Home,
  LayoutDashboard,
  Globe,
  Code2,
  Puzzle,
  Megaphone,
  Search,
  LineChart,
  Settings,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type NavItem = {
  label: string
  icon: ComponentType<{ className?: string }>
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Welcome', icon: Home, href: '#' },
  { label: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { label: 'Sites', icon: Globe, href: '#' },
  { label: 'Snippets', icon: Code2, href: '#' },
  { label: 'Integrations', icon: Puzzle, href: '#' },
  { label: 'Reverse Proxy', icon: Megaphone, href: '#' },
  { label: 'Event Inspector', icon: Search, href: '#' },
  { label: 'Live Feed', icon: LineChart, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
]

function Sidenavbar({ active = 'Integrations' }: { active?: string }) {
  return (
    <aside className="flex h-full w-[217px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center border-b border-sidebar-border px-[26px] py-5">
        <span className="text-lg font-semibold text-foreground">Traqqr.ai</span>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            data-active={label === active || undefined}
            className={cn(
              'flex h-[41px] items-center gap-3 rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-accent/50',
              'data-[active]:bg-accent data-[active]:text-accent-foreground data-[active]:font-medium'
            )}
          >
            <Icon className="size-[18px] shrink-0" />
            {label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export { Sidenavbar }
