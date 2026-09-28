import * as React$1 from "react";
import { VariantProps } from "class-variance-authority";
import { Checkbox as Checkbox$1, Dialog, Label as Label$1, Progress as Progress$1, Separator as Separator$1, Toggle as Toggle$1, ToggleGroup as ToggleGroup$1, Tooltip as Tooltip$1 } from "radix-ui";
import * as _$class_variance_authority_types0 from "class-variance-authority/types";

//#region src/components/ui/alert.d.ts
declare const alertVariants: (props?: ({
  variant?: "default" | "destructive" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function Alert({
  className,
  variant,
  ...props
}: React$1.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React$1.JSX.Element;
declare function AlertTitle({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDescription({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertAction({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/badge.d.ts
declare const badgeVariants: (props?: ({
  variant?: "default" | "destructive" | "secondary" | "outline" | "ghost" | "link" | "success" | "warning" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function Badge({
  className,
  variant,
  asChild,
  ...props
}: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
  asChild?: boolean;
}): React$1.JSX.Element;
//#endregion
//#region src/components/ui/breadcrumb.d.ts
declare function Breadcrumb({
  className,
  ...props
}: React$1.ComponentProps<"nav">): React$1.JSX.Element;
declare function BreadcrumbList({
  className,
  ...props
}: React$1.ComponentProps<"ol">): React$1.JSX.Element;
declare function BreadcrumbItem({
  className,
  ...props
}: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React$1.ComponentProps<"a"> & {
  asChild?: boolean;
}): React$1.JSX.Element;
declare function BreadcrumbPage({
  className,
  ...props
}: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function BreadcrumbEllipsis({
  className,
  ...props
}: React$1.ComponentProps<"span">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/button.d.ts
declare const buttonVariants: (props?: ({
  shape?: "default" | "rounded" | null | undefined;
  variant?: "default" | "destructive" | "secondary" | "outline" | "ghost" | "link" | null | undefined;
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function Button({
  className,
  variant,
  size,
  shape,
  asChild,
  ...props
}: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
}): React$1.JSX.Element;
//#endregion
//#region src/components/ui/card.d.ts
declare function Card({
  className,
  size,
  ...props
}: React$1.ComponentProps<"div"> & {
  size?: "default" | "sm";
}): React$1.JSX.Element;
declare function CardHeader({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/checkbox.d.ts
declare function Checkbox({
  className,
  ...props
}: React$1.ComponentProps<typeof Checkbox$1.Root>): React$1.JSX.Element;
//#endregion
//#region src/components/ui/empty.d.ts
declare function Empty({
  className,
  ...props
}: React.ComponentProps<"div">): React$1.JSX.Element;
declare function EmptyHeader({
  className,
  ...props
}: React.ComponentProps<"div">): React$1.JSX.Element;
declare const emptyMediaVariants: (props?: ({
  variant?: "default" | "icon" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function EmptyMedia({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>): React$1.JSX.Element;
declare function EmptyTitle({
  className,
  ...props
}: React.ComponentProps<"div">): React$1.JSX.Element;
declare function EmptyDescription({
  className,
  ...props
}: React.ComponentProps<"p">): React$1.JSX.Element;
declare function EmptyContent({
  className,
  ...props
}: React.ComponentProps<"div">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/label.d.ts
declare function Label({
  className,
  ...props
}: React$1.ComponentProps<typeof Label$1.Root>): React$1.JSX.Element;
//#endregion
//#region src/components/ui/field.d.ts
declare function FieldSet({
  className,
  ...props
}: React.ComponentProps<"fieldset">): React$1.JSX.Element;
declare function FieldLegend({
  className,
  variant,
  ...props
}: React.ComponentProps<"legend"> & {
  variant?: "legend" | "label";
}): React$1.JSX.Element;
declare function FieldGroup({
  className,
  ...props
}: React.ComponentProps<"div">): React$1.JSX.Element;
declare const fieldVariants: (props?: ({
  orientation?: "vertical" | "horizontal" | "responsive" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function Field({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>): React$1.JSX.Element;
declare function FieldContent({
  className,
  ...props
}: React.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>): React$1.JSX.Element;
declare function FieldTitle({
  className,
  ...props
}: React.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldDescription({
  className,
  align,
  ...props
}: React.ComponentProps<"p"> & {
  align?: "left" | "right";
}): React$1.JSX.Element;
declare function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode;
}): React$1.JSX.Element;
declare function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{
    message?: string;
  } | undefined>;
}): React$1.JSX.Element | null;
//#endregion
//#region src/components/ui/input.d.ts
declare const inputVariants: (props?: ({
  shape?: "default" | "rounded" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function Input({
  className,
  type,
  shape,
  ...props
}: React$1.ComponentProps<"input"> & VariantProps<typeof inputVariants>): React$1.JSX.Element;
//#endregion
//#region src/components/ui/input-group.d.ts
declare function InputGroup({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
  align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function InputGroupAddon({
  className,
  align,
  ...props
}: React$1.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>): React$1.JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
  size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function InputGroupButton({
  className,
  type,
  variant,
  size,
  ...props
}: Omit<React$1.ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>): React$1.JSX.Element;
declare function InputGroupText({
  className,
  ...props
}: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function InputGroupInput({
  className,
  ...props
}: React$1.ComponentProps<typeof Input>): React$1.JSX.Element;
declare function InputGroupTextarea({
  className,
  ...props
}: React$1.ComponentProps<"textarea">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/separator.d.ts
declare function Separator({
  className,
  orientation,
  decorative,
  ...props
}: React$1.ComponentProps<typeof Separator$1.Root>): React$1.JSX.Element;
//#endregion
//#region src/components/ui/item.d.ts
declare function ItemGroup({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemSeparator({
  className,
  ...props
}: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;
declare const itemVariants: (props?: ({
  variant?: "default" | "outline" | "muted" | null | undefined;
  size?: "default" | "xs" | "sm" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function Item({
  className,
  variant,
  size,
  asChild,
  ...props
}: React$1.ComponentProps<"div"> & VariantProps<typeof itemVariants> & {
  asChild?: boolean;
}): React$1.JSX.Element;
declare const itemMediaVariants: (props?: ({
  variant?: "default" | "icon" | "image" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function ItemMedia({
  className,
  variant,
  ...props
}: React$1.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>): React$1.JSX.Element;
declare function ItemContent({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemTitle({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemDescription({
  className,
  ...props
}: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function ItemActions({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemHeader({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemFooter({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/kbd.d.ts
declare function Kbd({
  className,
  ...props
}: React.ComponentProps<"kbd">): React$1.JSX.Element;
declare function KbdGroup({
  className,
  ...props
}: React.ComponentProps<"div">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/native-select.d.ts
type NativeSelectProps = Omit<React$1.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default";
};
declare function NativeSelect({
  className,
  size,
  ...props
}: NativeSelectProps): React$1.JSX.Element;
declare function NativeSelectOption({
  className,
  ...props
}: React$1.ComponentProps<"option">): React$1.JSX.Element;
declare function NativeSelectOptGroup({
  className,
  ...props
}: React$1.ComponentProps<"optgroup">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/progress.d.ts
declare function Progress({
  className,
  value,
  ...props
}: React$1.ComponentProps<typeof Progress$1.Root>): React$1.JSX.Element;
//#endregion
//#region src/components/ui/sheet.d.ts
declare function Sheet({
  ...props
}: React$1.ComponentProps<typeof Dialog.Root>): React$1.JSX.Element;
declare function SheetTrigger({
  ...props
}: React$1.ComponentProps<typeof Dialog.Trigger>): React$1.JSX.Element;
declare function SheetClose({
  ...props
}: React$1.ComponentProps<typeof Dialog.Close>): React$1.JSX.Element;
declare function SheetContent({
  className,
  children,
  side,
  showCloseButton,
  ...props
}: React$1.ComponentProps<typeof Dialog.Content> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function SheetHeader({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetFooter({
  className,
  ...props
}: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetTitle({
  className,
  ...props
}: React$1.ComponentProps<typeof Dialog.Title>): React$1.JSX.Element;
declare function SheetDescription({
  className,
  ...props
}: React$1.ComponentProps<typeof Dialog.Description>): React$1.JSX.Element;
//#endregion
//#region src/components/ui/table.d.ts
declare function Table({
  className,
  ...props
}: React$1.ComponentProps<"table">): React$1.JSX.Element;
declare function TableHeader({
  className,
  ...props
}: React$1.ComponentProps<"thead">): React$1.JSX.Element;
declare function TableBody({
  className,
  ...props
}: React$1.ComponentProps<"tbody">): React$1.JSX.Element;
declare function TableFooter({
  className,
  ...props
}: React$1.ComponentProps<"tfoot">): React$1.JSX.Element;
declare function TableRow({
  className,
  ...props
}: React$1.ComponentProps<"tr">): React$1.JSX.Element;
declare function TableHead({
  className,
  ...props
}: React$1.ComponentProps<"th">): React$1.JSX.Element;
declare function TableCell({
  className,
  ...props
}: React$1.ComponentProps<"td">): React$1.JSX.Element;
declare function TableCaption({
  className,
  ...props
}: React$1.ComponentProps<"caption">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/textarea.d.ts
declare function Textarea({
  className,
  ...props
}: React$1.ComponentProps<"textarea">): React$1.JSX.Element;
//#endregion
//#region src/components/ui/toggle.d.ts
declare const toggleVariants: (props?: ({
  variant?: "outline" | "ghost" | null | undefined;
  size?: "default" | "sm" | "lg" | null | undefined;
} & _$class_variance_authority_types0.ClassProp) | undefined) => string;
declare function Toggle({
  className,
  variant,
  size,
  ...props
}: React$1.ComponentProps<typeof Toggle$1.Root> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;
//#endregion
//#region src/components/ui/toggle-group.d.ts
declare function ToggleGroup({
  className,
  variant,
  size,
  spacing,
  orientation,
  children,
  ...props
}: React$1.ComponentProps<typeof ToggleGroup$1.Root> & VariantProps<typeof toggleVariants> & {
  spacing?: number;
  orientation?: "horizontal" | "vertical";
}): React$1.JSX.Element;
declare function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React$1.ComponentProps<typeof ToggleGroup$1.Item> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;
//#endregion
//#region src/components/ui/tooltip.d.ts
declare function TooltipProvider({
  delayDuration,
  ...props
}: React$1.ComponentProps<typeof Tooltip$1.Provider>): React$1.JSX.Element;
declare function Tooltip({
  ...props
}: React$1.ComponentProps<typeof Tooltip$1.Root>): React$1.JSX.Element;
declare function TooltipTrigger({
  ...props
}: React$1.ComponentProps<typeof Tooltip$1.Trigger>): React$1.JSX.Element;
declare function TooltipContent({
  className,
  sideOffset,
  children,
  ...props
}: React$1.ComponentProps<typeof Tooltip$1.Content>): React$1.JSX.Element;
//#endregion
export { Alert, AlertAction, AlertDescription, AlertTitle, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle, Kbd, KbdGroup, Label, NativeSelect, NativeSelectOptGroup, NativeSelectOption, Progress, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Textarea, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, inputVariants, toggleVariants };
//# sourceMappingURL=index.d.mts.map