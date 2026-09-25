import type { ReactNode } from 'react'
import { Sidenavbar } from './sidenavbar'
import { TopBar } from './top-bar'
import { AppBackground } from './app-background'
import './app-background.css'

function AppShell({
  active,
  greeting,
  children,
}: {
  active?: string
  greeting?: string
  children: ReactNode
}) {
  return (
    <div className="grid h-screen w-full grid-cols-[216px_1fr] bg-background">
      <Sidenavbar active={active} />
      <div className="relative flex flex-col overflow-hidden">
        <AppBackground />
        <div className="relative z-10">
          <TopBar greeting={greeting} />
        </div>
        <div className="relative z-10 flex flex-1 flex-col gap-9 overflow-y-auto px-16 pt-9 pb-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export { AppShell }
