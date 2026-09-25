import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

function TopBar({ greeting = 'Good Afternoon Alex' }: { greeting?: string }) {
  return (
    <div className="flex h-14 w-full items-center justify-between bg-topbar px-4 py-3 backdrop-blur-[50px]">
      <p className="text-xs font-mono text-muted-foreground">{greeting}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" shape="rounded" aria-label="Logout">
              <LogOut />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Logout</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export { TopBar }
