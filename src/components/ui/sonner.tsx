"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  TriangleAlertIcon,
} from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      position="bottom-right"
      richColors
      closeButton
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <CircleAlertIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--width": "382px",
          "--border-radius": "calc(var(--radius) * 1.8)",
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "linear-gradient(var(--success-subtle), var(--success-subtle)), var(--popover)",
          "--success-text": "var(--text-success)",
          "--success-border": "color-mix(in oklab, var(--success) 40%, transparent)",
          "--error-bg": "linear-gradient(var(--destructive-subtle), var(--destructive-subtle)), var(--popover)",
          "--error-text": "var(--destructive)",
          "--error-border": "color-mix(in oklab, var(--destructive) 40%, transparent)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast !items-start !gap-3 !p-4 !font-sans !shadow-lg",
          icon: "!m-0 !mt-0.5",
          title: "!text-sm !leading-5 !font-normal",
          description: "!text-xs !leading-4 !text-muted-foreground",
          closeButton:
            "!static !order-last !ml-auto !size-7 !shrink-0 !translate-none !rounded-sm !border-0 ![background:transparent] !text-current hover:![background:var(--muted)] [&_svg]:!size-4",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
