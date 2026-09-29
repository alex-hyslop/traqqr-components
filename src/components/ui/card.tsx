import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const cardVariants = cva(
  "group/card flex flex-col gap-4 overflow-hidden rounded-xl border py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(6)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:[--card-spacing:--spacing(4)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[layout=centered]:py-10 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
  {
    variants: {
      variant: {
        default: "bg-card",
        translucent: "bg-card-translucent",
      },
      tone: {
        default: "",
        destructive: "border-destructive bg-destructive-subtle",
      },
      layout: {
        default: "",
        centered: "items-stretch text-center",
      },
    },
    defaultVariants: {
      variant: "default",
      tone: "default",
      layout: "default",
    },
  }
)

function Card({
  className,
  size = "default",
  variant = "default",
  tone = "default",
  layout = "default",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant}
      data-tone={tone}
      data-layout={layout}
      className={cn(cardVariants({ variant, tone, layout }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-xl px-(--card-spacing) has-data-[slot=card-description]:grid-rows-[auto_auto] sm:has-data-[slot=card-action]:grid-cols-[1fr_auto] group-data-[layout=centered]/card:justify-items-center [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-media"
      className={cn(
        "flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-xl border border-(--card-media-border) p-1 [background-image:var(--card-media-background,linear-gradient(-57.65deg,var(--card-media-from)_20.1%,var(--card-media-to)_85.78%))] [&>img:not([class*='size-'])]:size-12 [&>svg:not([class*='size-'])]:size-12",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "flex items-center gap-2 font-heading text-base leading-6 font-normal group-data-[layout=centered]/card:text-lg group-data-[layout=centered]/card:leading-7 group-data-[size=sm]/card:text-sm group-data-[tone=destructive]/card:text-destructive [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-5",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm text-muted-foreground group-data-[tone=destructive]/card:text-secondary-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "justify-self-start sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-center sm:justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-(--card-spacing) group-data-[layout=centered]/card:flex group-data-[layout=centered]/card:flex-col group-data-[layout=centered]/card:items-center",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-2 rounded-b-xl border-t bg-muted px-(--card-spacing) py-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  cardVariants,
  CardHeader,
  CardMedia,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
