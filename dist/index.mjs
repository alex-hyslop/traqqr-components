"use client"
import * as React from "react";
import { useMemo } from "react";
import { cva } from "class-variance-authority";
import { cn } from "cn";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertDialog as AlertDialog$1, Checkbox as Checkbox$1, Dialog, Label as Label$1, Progress as Progress$1, Separator as Separator$1, Slot, Toggle as Toggle$1, ToggleGroup as ToggleGroup$1, Tooltip as Tooltip$1 } from "radix-ui";
import { CheckIcon, ChevronDownIcon, ChevronRightIcon, CircleAlertIcon, CircleCheckIcon, InfoIcon, Loader2Icon, MoreHorizontalIcon, TriangleAlertIcon, XIcon } from "lucide-react";
import { Toaster as Toaster$1 } from "sonner";
//#region src/components/ui/alert.tsx
const alertVariants = cva("group/alert relative grid w-full gap-x-2 gap-y-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-[>svg]:grid-cols-[auto_1fr] has-data-[slot=alert-action]:grid-cols-[1fr_auto] has-[>svg]:has-data-[slot=alert-action]:grid-cols-[auto_1fr_auto] *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "bg-card text-destructive",
		success: "bg-card text-success-text",
		warning: "bg-card text-warning-text"
	} },
	defaultVariants: { variant: "default" }
});
function Alert({ className, variant, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert",
		role: "alert",
		className: cn(alertVariants({ variant }), className),
		...props
	});
}
function AlertTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-title",
		className: cn("font-normal group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className),
		...props
	});
}
function AlertDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-description",
		className: cn("text-sm group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
		...props
	});
}
function AlertAction({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-action",
		className: cn("col-start-2 row-span-2 row-start-1 self-center group-has-[>svg]/alert:col-start-3", className),
		...props
	});
}
//#endregion
//#region src/components/ui/button.tsx
const buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-normal whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [text-box:trim-both_cap_alphabetic]", {
	variants: {
		shape: {
			default: "",
			rounded: "rounded-full"
		},
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-80",
			outline: "border-border bg-background text-foreground hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:opacity-80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:opacity-80 focus-visible:border-destructive-subtle focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40",
			link: "text-foreground underline underline-offset-4"
		},
		size: {
			default: "h-8 gap-1 rounded-lg px-4",
			xs: "h-6 gap-1 rounded-sm px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-sm px-3 text-xs",
			lg: "h-9 gap-1 rounded-lg px-6",
			icon: "size-8 rounded-lg",
			"icon-xs": "size-6 rounded-sm [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-sm",
			"icon-lg": "size-9 rounded-lg"
		}
	},
	compoundVariants: [{
		shape: "rounded",
		size: [
			"xs",
			"sm",
			"default",
			"lg",
			"icon",
			"icon-xs",
			"icon-sm",
			"icon-lg"
		],
		class: "rounded-full"
	}],
	defaultVariants: {
		variant: "default",
		size: "default",
		shape: "default"
	}
});
function Button({ className, variant = "default", size = "default", shape = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot.Root : "button", {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		"data-shape": shape,
		className: cn(buttonVariants({
			variant,
			size,
			shape,
			className
		})),
		...props
	});
}
//#endregion
//#region src/components/ui/alert-dialog.tsx
function AlertDialog({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Root, {
		"data-slot": "alert-dialog",
		...props
	});
}
function AlertDialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Trigger, {
		"data-slot": "alert-dialog-trigger",
		...props
	});
}
function AlertDialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Portal, {
		"data-slot": "alert-dialog-portal",
		...props
	});
}
function AlertDialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Overlay, {
		"data-slot": "alert-dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-black/50 duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
		...props
	});
}
function AlertDialogContent({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [/* @__PURE__ */ jsx(AlertDialogOverlay, {}), /* @__PURE__ */ jsx(AlertDialog$1.Content, {
		"data-slot": "alert-dialog-content",
		"data-size": size,
		className: cn("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 max-w-[calc(100%-2rem)] gap-4 rounded-xl border bg-background p-4 text-foreground duration-100 outline-none data-[size=default]:sm:max-w-xs data-[size=sm]:sm:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props
	})] });
}
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-header",
		className: cn("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", className),
		...props
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-footer",
		className: cn("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function AlertDialogMedia({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-media",
		className: cn("mb-2 inline-flex size-10 items-center justify-center rounded-sm bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6", className),
		...props
	});
}
function AlertDialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Title, {
		"data-slot": "alert-dialog-title",
		className: cn("font-heading text-base leading-6 font-normal sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", className),
		...props
	});
}
function AlertDialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Description, {
		"data-slot": "alert-dialog-description",
		className: cn("text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
function AlertDialogAction({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		variant,
		size,
		asChild: true,
		children: /* @__PURE__ */ jsx(AlertDialog$1.Action, {
			"data-slot": "alert-dialog-action",
			className: cn(className),
			...props
		})
	});
}
function AlertDialogCancel({ className, variant = "outline", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		variant,
		size,
		asChild: true,
		children: /* @__PURE__ */ jsx(AlertDialog$1.Cancel, {
			"data-slot": "alert-dialog-cancel",
			className: cn(className),
			...props
		})
	});
}
//#endregion
//#region src/components/ui/badge.tsx
const badgeVariants = cva("group/badge inline-flex h-[22px] w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-[7px] text-xs font-normal whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [text-box:trim-both_cap_alphabetic]", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline",
		success: "bg-success-subtle text-success-text focus-visible:ring-success/20 dark:focus-visible:ring-success/40 [a]:hover:bg-success/20",
		warning: "bg-warning-subtle text-warning-text focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 [a]:hover:bg-warning/20"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot.Root : "span", {
		"data-slot": "badge",
		"data-variant": variant,
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function Breadcrumb({ className, ...props }) {
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		className: cn(className),
		...props
	});
}
function BreadcrumbList({ className, ...props }) {
	return /* @__PURE__ */ jsx("ol", {
		"data-slot": "breadcrumb-list",
		className: cn("flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground", className),
		...props
	});
}
function BreadcrumbItem({ className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "breadcrumb-item",
		className: cn("inline-flex items-center gap-1", className),
		...props
	});
}
function BreadcrumbLink({ asChild, className, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot.Root : "a", {
		"data-slot": "breadcrumb-link",
		className: cn("transition-colors hover:text-foreground", className),
		...props
	});
}
function BreadcrumbPage({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: cn("font-normal text-foreground", className),
		...props
	});
}
function BreadcrumbSeparator({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: cn("[&>svg]:size-3.5", className),
		...props,
		children: children ?? /* @__PURE__ */ jsx(ChevronRightIcon, {})
	});
}
function BreadcrumbEllipsis({ className, ...props }) {
	return /* @__PURE__ */ jsxs("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: cn("flex size-5 items-center justify-center [&>svg]:size-4", className),
		...props,
		children: [/* @__PURE__ */ jsx(MoreHorizontalIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
//#endregion
//#region src/components/ui/card.tsx
const cardVariants = cva("group/card flex flex-col gap-4 overflow-hidden rounded-xl border py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(6)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:[--card-spacing:--spacing(4)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[layout=centered]:py-10 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", {
	variants: {
		variant: {
			default: "bg-card",
			translucent: "bg-card-translucent"
		},
		tone: {
			default: "",
			destructive: "border-destructive bg-destructive-subtle"
		},
		layout: {
			default: "",
			centered: "items-stretch text-center"
		}
	},
	defaultVariants: {
		variant: "default",
		tone: "default",
		layout: "default"
	}
});
function Card({ className, size = "default", variant = "default", tone = "default", layout = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		"data-size": size,
		"data-variant": variant,
		"data-tone": tone,
		"data-layout": layout,
		className: cn(cardVariants({
			variant,
			tone,
			layout
		}), className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-header",
		className: cn("group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-xl px-(--card-spacing) has-data-[slot=card-description]:grid-rows-[auto_auto] sm:has-data-[slot=card-action]:grid-cols-[1fr_auto] group-data-[layout=centered]/card:justify-items-center [.border-b]:pb-(--card-spacing)", className),
		...props
	});
}
function CardMedia({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-media",
		className: cn("flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-xl border border-(--card-media-border) p-1 [background-image:var(--card-media-background,linear-gradient(-57.65deg,var(--card-media-from)_20.1%,var(--card-media-to)_85.78%))] [&>img:not([class*='size-'])]:size-12 [&>svg:not([class*='size-'])]:size-12", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-title",
		className: cn("flex items-center gap-2 font-heading text-base leading-6 font-normal group-data-[layout=centered]/card:text-lg group-data-[layout=centered]/card:leading-7 group-data-[size=sm]/card:text-sm group-data-[tone=destructive]/card:text-destructive [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-5", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-description",
		className: cn("text-sm text-muted-foreground group-data-[tone=destructive]/card:text-secondary-foreground", className),
		...props
	});
}
function CardAction({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-action",
		className: cn("justify-self-start sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-center sm:justify-self-end", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-content",
		className: cn("px-(--card-spacing) group-data-[layout=centered]/card:flex group-data-[layout=centered]/card:flex-col group-data-[layout=centered]/card:items-center", className),
		...props
	});
}
function CardFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-footer",
		className: cn("flex items-center gap-2 rounded-b-xl border-t bg-muted px-(--card-spacing) py-4", className),
		...props
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ jsx(Checkbox$1.Root, {
		"data-slot": "checkbox",
		className: cn("peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-border bg-background transition-colors outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-border after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-primary dark:data-checked:bg-primary disabled:aria-invalid:data-checked:border-transparent disabled:aria-invalid:data-checked:bg-destructive-subtle disabled:aria-invalid:data-checked:text-destructive disabled:aria-invalid:data-checked:ring-0 disabled:aria-invalid:data-checked:opacity-100", className),
		...props,
		children: /* @__PURE__ */ jsx(Checkbox$1.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
			children: /* @__PURE__ */ jsx(CheckIcon, {})
		})
	});
}
//#endregion
//#region src/components/ui/empty.tsx
function Empty({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty",
		className: cn("flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-5 py-10 text-center text-balance", className),
		...props
	});
}
function EmptyHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-header",
		className: cn("flex max-w-sm flex-col items-center gap-5", className),
		...props
	});
}
const emptyMediaVariants = cva("flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "size-16 rounded-full bg-foreground-subtle text-brand [&_svg:not([class*='size-'])]:size-7"
	} },
	defaultVariants: { variant: "default" }
});
function EmptyMedia({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-icon",
		"data-variant": variant,
		className: cn(emptyMediaVariants({
			variant,
			className
		})),
		...props
	});
}
function EmptyTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-title",
		className: cn("font-heading text-xl font-semibold", className),
		...props
	});
}
function EmptyDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-description",
		className: cn("text-sm text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
		...props
	});
}
function EmptyContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-content",
		className: cn("flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance", className),
		...props
	});
}
//#endregion
//#region src/components/ui/label.tsx
function Label({ className, ...props }) {
	return /* @__PURE__ */ jsx(Label$1.Root, {
		"data-slot": "label",
		className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
	return /* @__PURE__ */ jsx(Separator$1.Root, {
		"data-slot": "separator",
		decorative,
		orientation,
		className: cn("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
		...props
	});
}
//#endregion
//#region src/components/ui/field.tsx
function FieldSet({ className, ...props }) {
	return /* @__PURE__ */ jsx("fieldset", {
		"data-slot": "field-set",
		className: cn("flex flex-col gap-3 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className),
		...props
	});
}
function FieldLegend({ className, variant = "legend", ...props }) {
	return /* @__PURE__ */ jsx("legend", {
		"data-slot": "field-legend",
		"data-variant": variant,
		className: cn("mb-3 font-normal data-[variant=label]:text-sm data-[variant=label]:leading-5 data-[variant=legend]:text-base data-[variant=legend]:leading-6", className),
		...props
	});
}
function FieldGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-group",
		className: cn("group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4", className),
		...props
	});
}
const fieldVariants = cva("group/field flex w-full gap-2 data-[invalid=true]:text-destructive", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function Field({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": orientation,
		className: cn(fieldVariants({ orientation }), className),
		...props
	});
}
function FieldContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-content",
		className: cn("group/field-content flex flex-1 flex-col gap-0.5 leading-snug", className),
		...props
	});
}
function FieldLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(Label, {
		"data-slot": "field-label",
		className: cn("group/field-label peer/field-label flex w-fit gap-2 leading-5 font-normal group-data-[disabled=true]/field:opacity-50 *:data-[slot=field-label-asterisk]:text-destructive *:data-[slot=field-label-action]:ml-auto *:data-[slot=field-label-action]:text-foreground has-data-[slot=field-label-action]:w-full has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", className),
		...props
	});
}
function FieldTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-label",
		className: cn("flex w-fit items-center gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50", className),
		...props
	});
}
function FieldDescription({ className, align = "left", ...props }) {
	return /* @__PURE__ */ jsx("p", {
		"data-slot": "field-description",
		"data-align": align,
		className: cn("text-left text-sm leading-5 font-normal data-[align=right]:text-right text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
		...props
	});
}
function FieldSeparator({ children, className, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "field-separator",
		"data-content": !!children,
		className: cn("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", className),
		...props,
		children: [/* @__PURE__ */ jsx(Separator, { className: "absolute inset-0 top-1/2" }), children && /* @__PURE__ */ jsx("span", {
			className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
			"data-slot": "field-separator-content",
			children
		})]
	});
}
function FieldError({ className, children, errors, ...props }) {
	const content = useMemo(() => {
		if (children) return children;
		if (!errors?.length) return null;
		const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];
		if (uniqueErrors?.length == 1) return uniqueErrors[0]?.message;
		return /* @__PURE__ */ jsx("ul", {
			className: "ml-4 flex list-disc flex-col gap-1",
			children: uniqueErrors.map((error, index) => error?.message && /* @__PURE__ */ jsx("li", { children: error.message }, index))
		});
	}, [children, errors]);
	if (!content) return null;
	return /* @__PURE__ */ jsx("div", {
		role: "alert",
		"data-slot": "field-error",
		className: cn("text-sm font-normal text-destructive", className),
		...props,
		children: content
	});
}
//#endregion
//#region src/components/ui/input.tsx
const inputVariants = cva("h-8 w-full min-w-0 border border-border bg-background px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", {
	variants: { shape: {
		default: "rounded-lg",
		rounded: "rounded-full"
	} },
	defaultVariants: { shape: "default" }
});
function Input({ className, type, shape = "default", ...props }) {
	return /* @__PURE__ */ jsx("input", {
		type,
		"data-slot": "input",
		"data-shape": shape,
		className: cn(inputVariants({ shape }), className),
		...props
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn("flex field-sizing-content min-h-16 w-full rounded-lg border border-border bg-background px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-muted/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region src/components/ui/input-group.tsx
function InputGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "input-group",
		role: "group",
		className: cn("group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-border bg-background transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1 has-[>[data-align=inline-start]]:[&>input]:pl-1 has-data-[shape=rounded]:rounded-full", className),
		...props
	});
}
const inputGroupAddonVariants = cva("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-normal text-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2.5 has-[>svg]:pr-1 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2.5 has-[>svg]:pl-1 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": align,
		className: cn(inputGroupAddonVariants({ align }), className),
		onClick: (e) => {
			if (e.target.closest("button")) return;
			e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...props
	});
}
const inputGroupButtonVariants = cva("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		type,
		"data-size": size,
		variant,
		className: cn(inputGroupButtonVariants({ size }), className),
		...props
	});
}
function InputGroupText({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className),
		...props
	});
}
function InputGroupInput({ className, ...props }) {
	return /* @__PURE__ */ jsx(Input, {
		"data-slot": "input-group-control",
		className: cn("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent", className),
		...props
	});
}
function InputGroupTextarea({ className, ...props }) {
	return /* @__PURE__ */ jsx(Textarea, {
		"data-slot": "input-group-control",
		className: cn("flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent", className),
		...props
	});
}
//#endregion
//#region src/components/ui/item.tsx
function ItemGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "list",
		"data-slot": "item-group",
		className: cn("group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2", className),
		...props
	});
}
function ItemSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Separator, {
		"data-slot": "item-separator",
		orientation: "horizontal",
		className: cn("my-2", className),
		...props
	});
}
const itemVariants = cva("group/item flex w-full flex-wrap items-center rounded-lg border text-sm transition-colors duration-100 outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", {
	variants: {
		variant: {
			default: "border-transparent",
			outline: "border-border",
			muted: "border-transparent bg-muted/50"
		},
		size: {
			default: "gap-2.5 px-3 py-2.5",
			sm: "gap-2.5 px-3 py-2.5",
			xs: "gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Item({ className, variant = "default", size = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot.Root : "div", {
		"data-slot": "item",
		"data-variant": variant,
		"data-size": size,
		className: cn(itemVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
const itemMediaVariants = cva("flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "[&_svg:not([class*='size-'])]:size-4",
		image: "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover"
	} },
	defaultVariants: { variant: "default" }
});
function ItemMedia({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-media",
		"data-variant": variant,
		className: cn(itemMediaVariants({
			variant,
			className
		})),
		...props
	});
}
function ItemContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-content",
		className: cn("flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none", className),
		...props
	});
}
function ItemTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-title",
		className: cn("line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4", className),
		...props
	});
}
function ItemDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		"data-slot": "item-description",
		className: cn("line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground group-data-[size=xs]/item:text-xs [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
		...props
	});
}
function ItemActions({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-actions",
		className: cn("flex items-center gap-2", className),
		...props
	});
}
function ItemHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-header",
		className: cn("flex basis-full items-center justify-between gap-2", className),
		...props
	});
}
function ItemFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-footer",
		className: cn("flex basis-full items-center justify-between gap-2", className),
		...props
	});
}
//#endregion
//#region src/components/ui/kbd.tsx
function Kbd({ className, ...props }) {
	return /* @__PURE__ */ jsx("kbd", {
		"data-slot": "kbd",
		className: cn("pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-normal text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-3", className),
		...props
	});
}
function KbdGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "kbd-group",
		className: cn("inline-flex items-center gap-1", className),
		...props
	});
}
//#endregion
//#region src/components/ui/native-select.tsx
function NativeSelect({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group/native-select relative w-fit has-[select:disabled]:opacity-50", className),
		"data-slot": "native-select-wrapper",
		"data-size": size,
		children: [/* @__PURE__ */ jsx("select", {
			"data-slot": "native-select",
			"data-size": size,
			className: "h-9 w-full min-w-0 appearance-none rounded-md border border-border bg-background py-2 pr-8 pl-2.5 text-sm shadow-xs transition-colors outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
			...props
		}), /* @__PURE__ */ jsx(ChevronDownIcon, {
			className: "pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})]
	});
}
function NativeSelectOption({ className, ...props }) {
	return /* @__PURE__ */ jsx("option", {
		"data-slot": "native-select-option",
		className: cn("bg-[Canvas] text-[CanvasText]", className),
		...props
	});
}
function NativeSelectOptGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("optgroup", {
		"data-slot": "native-select-optgroup",
		className: cn("bg-[Canvas] text-[CanvasText]", className),
		...props
	});
}
//#endregion
//#region src/components/ui/progress.tsx
function Progress({ className, value, ...props }) {
	return /* @__PURE__ */ jsx(Progress$1.Root, {
		"data-slot": "progress",
		className: cn("relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted", className),
		...props,
		children: /* @__PURE__ */ jsx(Progress$1.Indicator, {
			"data-slot": "progress-indicator",
			className: "size-full flex-1 rounded-full bg-emerald-400 transition-all",
			style: { transform: `translateX(-${100 - (value || 0)}%)` }
		})
	});
}
//#endregion
//#region src/components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "sheet",
		...props
	});
}
function SheetTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Trigger, {
		"data-slot": "sheet-trigger",
		...props
	});
}
function SheetClose({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Close, {
		"data-slot": "sheet-close",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Overlay, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-black/50 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Content, {
		"data-slot": "sheet-content",
		"data-side": side,
		className: cn("fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm text-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-80 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-[90%] data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=right]:sm:max-w-[560px] data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsx(Dialog.Close, {
			"data-slot": "sheet-close",
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				className: "absolute top-6.5 right-6",
				size: "icon-sm",
				children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sheet-header",
		className: cn("flex flex-col gap-3.5 px-6 pt-6 pb-2 *:data-[slot=sheet-title]:pr-9.5", className),
		...props
	});
}
function SheetBody({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sheet-body",
		className: cn("flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-6", className),
		...props
	});
}
function SheetFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sheet-footer",
		className: cn("mt-auto flex flex-col gap-2 p-6", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "sheet-title",
		className: cn("font-heading text-2xl leading-8 font-normal text-foreground", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Description, {
		"data-slot": "sheet-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
//#endregion
//#region src/components/ui/skeleton.tsx
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "skeleton",
		className: cn("animate-pulse rounded-md bg-accent", className),
		...props
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
const Toaster = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster$1, {
		className: "toaster group",
		position: "bottom-right",
		richColors: true,
		closeButton: true,
		icons: {
			success: /* @__PURE__ */ jsx(CircleCheckIcon, { className: "size-4" }),
			info: /* @__PURE__ */ jsx(InfoIcon, { className: "size-4" }),
			warning: /* @__PURE__ */ jsx(TriangleAlertIcon, { className: "size-4" }),
			error: /* @__PURE__ */ jsx(CircleAlertIcon, { className: "size-4" }),
			loading: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" })
		},
		style: {
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
			"--error-border": "color-mix(in oklab, var(--destructive) 40%, transparent)"
		},
		toastOptions: { classNames: {
			toast: "cn-toast !items-start !gap-3 !p-4 !font-sans !shadow-lg",
			icon: "!m-0 !mt-0.5",
			title: "!text-sm !leading-5 !font-normal",
			description: "!text-xs !leading-4 !text-muted-foreground",
			closeButton: "!static !order-last !ml-auto !size-7 !shrink-0 !translate-none !rounded-sm !border-0 ![background:transparent] !text-current hover:![background:var(--muted)] [&_svg]:!size-4"
		} },
		...props
	});
};
//#endregion
//#region src/components/ui/table.tsx
function Table({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ jsx("table", {
			"data-slot": "table",
			className: cn("w-full caption-bottom text-sm", className),
			...props
		})
	});
}
function TableHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("thead", {
		"data-slot": "table-header",
		className: cn("[&_tr]:border-b", className),
		...props
	});
}
function TableBody({ className, ...props }) {
	return /* @__PURE__ */ jsx("tbody", {
		"data-slot": "table-body",
		className: cn("[&_tr:last-child]:border-0", className),
		...props
	});
}
function TableFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("tfoot", {
		"data-slot": "table-footer",
		className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
		...props
	});
}
function TableRow({ className, ...props }) {
	return /* @__PURE__ */ jsx("tr", {
		"data-slot": "table-row",
		className: cn("border-b transition-colors has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted data-clickable:relative data-clickable:cursor-pointer data-clickable:hover:bg-foreground-subtle data-clickable:[&_a]:outline-none data-clickable:[&_a]:after:absolute data-clickable:[&_a]:after:inset-0 data-clickable:[&_a]:focus-visible:after:ring-3 data-clickable:[&_a]:focus-visible:after:ring-ring/50 data-clickable:hover:[&_a]:underline data-clickable:[&_svg]:text-muted-foreground data-clickable:hover:[&_svg]:text-foreground", className),
		...props
	});
}
function TableHead({ className, ...props }) {
	return /* @__PURE__ */ jsx("th", {
		"data-slot": "table-head",
		className: cn("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0", className),
		...props
	});
}
function TableCell({ className, ...props }) {
	return /* @__PURE__ */ jsx("td", {
		"data-slot": "table-cell",
		className: cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
		...props
	});
}
function TableCaption({ className, ...props }) {
	return /* @__PURE__ */ jsx("caption", {
		"data-slot": "table-caption",
		className: cn("mt-4 text-sm text-muted-foreground", className),
		...props
	});
}
//#endregion
//#region src/components/ui/toggle.tsx
const toggleVariants = cva("group/toggle inline-flex items-center justify-center gap-1 rounded-lg bg-background text-sm font-normal whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			ghost: "focus-visible:inset-ring focus-visible:inset-ring-ring",
			outline: "border border-border hover:bg-muted"
		},
		size: {
			default: "h-8 min-w-8 px-2.5",
			sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
			lg: "h-9 min-w-9 px-2.5"
		}
	},
	defaultVariants: {
		variant: "ghost",
		size: "default"
	}
});
function Toggle({ className, variant = "ghost", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Toggle$1.Root, {
		"data-slot": "toggle",
		className: cn(toggleVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region src/components/ui/toggle-group.tsx
const ToggleGroupContext = React.createContext({
	size: "default",
	variant: "ghost",
	spacing: 0,
	orientation: "horizontal"
});
function ToggleGroup({ className, variant, size, spacing = 0, orientation = "horizontal", children, ...props }) {
	return /* @__PURE__ */ jsx(ToggleGroup$1.Root, {
		"data-slot": "toggle-group",
		"data-variant": variant,
		"data-size": size,
		"data-spacing": spacing,
		"data-orientation": orientation,
		style: { "--gap": spacing },
		className: cn("group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch", className),
		...props,
		children: /* @__PURE__ */ jsx(ToggleGroupContext.Provider, {
			value: {
				variant,
				size,
				spacing,
				orientation
			},
			children
		})
	});
}
function ToggleGroupItem({ className, children, variant = "ghost", size = "default", ...props }) {
	const context = React.useContext(ToggleGroupContext);
	return /* @__PURE__ */ jsx(ToggleGroup$1.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": context.variant || variant,
		"data-size": context.size || size,
		"data-spacing": context.spacing,
		className: cn("shrink-0 group-data-[spacing=0]/toggle-group:rounded-none focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg data-[size=sm]:group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-md data-[size=sm]:group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-md group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", toggleVariants({
			variant: context.variant || variant,
			size: context.size || size
		}), className),
		...props,
		children
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function TooltipProvider({ delayDuration = 0, ...props }) {
	return /* @__PURE__ */ jsx(Tooltip$1.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration,
		...props
	});
}
function Tooltip({ ...props }) {
	return /* @__PURE__ */ jsx(Tooltip$1.Root, {
		"data-slot": "tooltip",
		...props
	});
}
function TooltipTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Tooltip$1.Trigger, {
		"data-slot": "tooltip-trigger",
		...props
	});
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
	return /* @__PURE__ */ jsx(Tooltip$1.Portal, { children: /* @__PURE__ */ jsxs(Tooltip$1.Content, {
		"data-slot": "tooltip-content",
		sideOffset,
		className: cn("z-50 inline-flex w-fit max-w-60 origin-(--radix-tooltip-content-transform-origin) items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(Tooltip$1.Arrow, {
			width: 10,
			height: 6,
			className: "z-50 fill-primary"
		})]
	}) });
}
//#endregion
export { Alert, AlertAction, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardMedia, CardTitle, Checkbox, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle, Kbd, KbdGroup, Label, NativeSelect, NativeSelectOptGroup, NativeSelectOption, Progress, Separator, Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Textarea, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cardVariants, inputVariants, toggleVariants };

//# sourceMappingURL=index.mjs.map