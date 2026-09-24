import { cn } from "@/lib/utils"

export interface StepRowProps {
  step: number
  title: string
  description?: string
  isComplete?: boolean
  className?: string
}

function StepRow({ step, title, description, isComplete, className }: StepRowProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium",
          isComplete ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
        )}
      >
        {step}
      </div>
      <div className="flex flex-col gap-0.5 pt-0.5">
        <p className="text-sm font-medium text-foreground">{title}</p>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  )
}

export { StepRow }
