import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface FilterToggleOption {
  label: string
  value: string
}

export interface FilterToggleProps {
  options: FilterToggleOption[]
  value: string
  onChange?: (value: string) => void
  className?: string
}

function FilterToggle({ options, value, onChange, className }: FilterToggleProps) {
  return (
    <div className={cn("inline-flex items-center gap-1 rounded-lg border border-border bg-muted p-1", className)}>
      {options.map((option) => (
        <Button
          key={option.value}
          type="button"
          size="sm"
          variant={option.value === value ? "default" : "ghost"}
          onClick={() => onChange?.(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}

export { FilterToggle }
