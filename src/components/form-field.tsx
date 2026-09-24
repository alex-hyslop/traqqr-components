import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormFieldProps {
  label: string
  htmlFor?: string
  helperText?: string
  errorText?: string
  children: React.ReactNode
  className?: string
}

function FormField({ label, htmlFor, helperText, errorText, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {errorText ? (
        <p className="text-sm text-destructive">{errorText}</p>
      ) : helperText ? (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  )
}

export { FormField }
