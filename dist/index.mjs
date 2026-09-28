import * as React from "react";
import { useMemo } from "react";
import { cva } from "class-variance-authority";
import { cn } from "cn";
import { jsx, jsxs } from "react/jsx-runtime";
import { Checkbox as Checkbox$1, Dialog, Label as Label$1, Progress as Progress$1, Separator as Separator$1, Slot, Toggle as Toggle$1, ToggleGroup as ToggleGroup$1, Tooltip as Tooltip$1 } from "radix-ui";
import { CheckIcon, ChevronDownIcon, ChevronRightIcon, MoreHorizontalIcon, XIcon } from "lucide-react";
//#region src/components/ui/alert.tsx
const alertVariants = cva("group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
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
		className: cn("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className),
		...props
	});
}
function AlertDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-description",
		className: cn("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
		...props
	});
}
function AlertAction({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-action",
		className: cn("absolute top-1/2 right-2 -translate-y-1/2", className),
		...props
	});
}
//#endregion
//#region src/components/ui/badge.tsx
const badgeVariants = cva("group/badge inline-flex h-[22px] w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-[7px] text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [text-box:trim-both_cap_alphabetic]", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline",
		success: "bg-success/10 text-success focus-visible:ring-success/20 dark:bg-success/20 dark:focus-visible:ring-success/40 [a]:hover:bg-success/20",
		warning: "bg-warning/10 text-warning focus-visible:ring-warning/20 dark:bg-warning/20 dark:focus-visible:ring-warning/40 [a]:hover:bg-warning/20"
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
//#region src/components/ui/button.tsx
const buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [text-box:trim-both_cap_alphabetic]", {
	variants: {
		shape: {
			default: "rounded-md",
			rounded: "rounded-full"
		},
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
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
//#region src/components/ui/card.tsx
function Card({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		"data-size": size,
		className: cn("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-header",
		className: cn("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-title",
		className: cn("font-heading text-base leading-6 font-normal group-data-[size=sm]/card:text-sm", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function CardAction({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-action",
		className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-content",
		className: cn("px-(--card-spacing)", className),
		...props
	});
}
function CardFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-footer",
		className: cn("flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)", className),
		...props
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ jsx(Checkbox$1.Root, {
		"data-slot": "checkbox",
		className: cn("peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-input after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-primary dark:data-checked:bg-primary", className),
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
		className: cn("flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className),
		...props
	});
}
function FieldLegend({ className, variant = "legend", ...props }) {
	return /* @__PURE__ */ jsx("legend", {
		"data-slot": "field-legend",
		"data-variant": variant,
		className: cn("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", className),
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
		className: cn("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", className),
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
function FieldDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		"data-slot": "field-description",
		className: cn("text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
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
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ jsx("input", {
		type,
		"data-slot": "input",
		className: cn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
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
		className: cn("pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3", className),
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
			className: "h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent py-2 pr-8 pl-2.5 text-sm transition-colors outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
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
			className: "size-full flex-1 bg-primary transition-all",
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
		className: cn("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsx(Dialog.Close, {
			"data-slot": "sheet-close",
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				className: "absolute top-3 right-3",
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
		className: cn("flex flex-col gap-0.5 p-4", className),
		...props
	});
}
function SheetFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "sheet-footer",
		className: cn("mt-auto flex flex-col gap-2 p-4", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "sheet-title",
		className: cn("font-heading text-2xl font-normal text-foreground", className),
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
		className: cn("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", className),
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
//#region src/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region src/components/ui/toggle.tsx
const toggleVariants = cva("group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent hover:bg-muted"
		},
		size: {
			default: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Toggle({ className, variant = "default", size = "default", ...props }) {
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
	variant: "default",
	spacing: 2,
	orientation: "horizontal"
});
function ToggleGroup({ className, variant, size, spacing = 2, orientation = "horizontal", children, ...props }) {
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
function ToggleGroupItem({ className, children, variant = "default", size = "default", ...props }) {
	const context = React.useContext(ToggleGroupContext);
	return /* @__PURE__ */ jsx(ToggleGroup$1.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": context.variant || variant,
		"data-size": context.size || size,
		"data-spacing": context.spacing,
		className: cn("shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", toggleVariants({
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
		className: cn("z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(Tooltip$1.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })]
	}) });
}
//#endregion
export { Alert, AlertAction, AlertDescription, AlertTitle, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Input, Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle, Kbd, KbdGroup, Label, NativeSelect, NativeSelectOptGroup, NativeSelectOption, Progress, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Textarea, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, toggleVariants };

//# sourceMappingURL=index.mjs.map