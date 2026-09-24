import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface DropdownOption {
  label: string
  value: string
  isDestructive?: boolean
}

export interface DropdownProps {
  label: string
  options: DropdownOption[]
  onSelect?: (value: string) => void
}

function Dropdown({ label, options, onSelect }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {options.map((option, index) => (
          <React.Fragment key={option.value}>
            {option.isDestructive && index > 0 ? <DropdownMenuSeparator /> : null}
            <DropdownMenuItem
              variant={option.isDestructive ? "destructive" : "default"}
              onSelect={() => onSelect?.(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { Dropdown }
