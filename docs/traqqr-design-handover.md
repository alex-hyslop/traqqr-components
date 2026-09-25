# Traqqr Dashboard — Storybook handover

Everything needed to build the 23 dashboard screens in Storybook: which Figma components they use (with direct links to each main component), the layout and token specs, and the places where the design deliberately differs from stock shadcn/ui.

**Start here.** Build only the frames on the **Traqqr Dashboard** page (links in section 2). The page *Archive – do not build* holds old drafts. Every component name in this document links straight to its main component in Figma, so there's no need to use “Go to main component”.

**Figma file:** [Traqqr Dashboard page](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-38091)

**Prepared by:** Kev Costello · Klick-Tipp

**Date:** 25 September 2026

## Contents

Quick links: every component in one list

1 · How to use this handover

2 · Screens to build

3 · App shell & layout spec

4 · Design tokens

5 · App background (CSS)

6 · Component inventory

7 · Differences from stock shadcn — read before building

8 · Housekeeping & decisions

9 · Building this with Claude

## 1 · How to use this handover

### Suggested build order

01

**Tokens first.** Export the Figma variables (collection `mode`, modes *light mode* / *dark mode*) into `globals.css` as shadcn CSS variables, add the four Traqqr-specific tokens in section 4, and load Manrope (headings) + Space Mono (UI/body).

02

**Install the shadcn primitives** listed in section 6 (`npx shadcn add button badge card …`), then apply the deviations in section 7 once, in the component source — not per screen.

03

**Build the Traqqr app components**: Sidenavbar, Top Bar, App background, Integration Card, and an `AppShell` layout that places them (section 3).

04

**Compose pages as stories**, one story per Figma frame / state (empty, populated, drawer open).

### Suggested Storybook structure

| Folder | Contains |
| --- | --- |
| `Foundations/` | Colours (light/dark), Typography (the 11 text styles), Radius, App background |
| `UI/` | shadcn primitives with Traqqr variants: Button, Badge, Card, Table, Sheet, Item, Empty… |
| `Traqqr/` | Sidenavbar, TopBar, AppShell, IntegrationCard, PageHeader |
| `Pages/` | Dashboard, Sites, Site Detail, Snippets, Integrations (+9 details), Reverse Proxy, Event Inspector, Live Feed, Billing |

### Getting from a Figma component to code quickly

**Now:** every component in section 6 links directly to its main component, with its properties listed. Each Figma property maps 1:1 to a React prop or a slot (boolean → optional child, instance swap → `icon` prop or child, variant → `variant`/`size` prop).

**Best practice next step: Figma Code Connect.** Once the Storybook components exist in the repo, Code Connect maps each Figma component to its real React component, so Dev Mode shows the actual import and props (e.g. `<Button variant="outline">`) instead of generated CSS. This needs Dev Mode on an Organization or Enterprise plan. Map the ~25 components in section 6 and every screen becomes “click a layer → copy the real code”.

**Using an AI coding assistant?** Section 9 has a ready-made setup and prompts for Claude, including the Figma MCP server, which reads frames and variables straight from this file.

## Quick links: every component in one list

Every component used on the 23 screens, in one place. Click a name to open its main component in Figma. This is the same list as section 6, without the detail. It's also available as `traqqr-figma-components.json` for scripts, Storybook or Claude.

### Traqqr app components

| Figma component | Node | Code |
| --- | --- | --- |
| [Traqqr Sidenavbar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4065-953) | 4065:953 | `App component` |
| [Traqqr Top Bar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4194-25781) | 4194:25781 | `App component + shadcn Tooltip` |
| [App background](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4211-139) | 4211:139 | `App component` |
| [Integration Card](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4160-6394) | 4160:6394 | `Composed from shadcn Card` |
| [Card (shell)](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4194-25648) | 4194:25648 | `shadcn Card` |

### shadcn/ui components

| Figma component | Node | Code |
| --- | --- | --- |
| [Button](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1872-3230) | 1872:3230 | `button` |
| [Icon Button](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1892-615) | 1892:615 | `button size="icon"` |
| [Badge](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1868-495) | 1868:495 | `badge` |
| [Card header](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1932-860) | 1932:860 | `card → CardHeader / CardTitle / CardDescription / CardAction` |
| [Card footer](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1932-931) | 1932:931 | `card → CardFooter` |
| [Table head](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1945-4070) | 1945:4070 | `table → TableHead` |
| [Table cell](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1945-4087) | 1945:4087 | `table → TableCell` |
| [BreadcrumbItem](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1871-361) | 1871:361 | `breadcrumb → BreadcrumbItem / BreadcrumbLink / BreadcrumbPage` |
| [Breadcrumb separator](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2198-2610) | 2198:2610 | `breadcrumb → BreadcrumbSeparator` |
| [FieldLabel](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1928-3999) | 1928:3999 | `field → FieldLabel` |
| [FieldDescription](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1930-445) | 1930:445 | `field → FieldDescription` |
| [Input](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1928-3990) | 1928:3990 | `input` |
| [Textarea](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1984-1854) | 1984:1854 | `textarea` |
| [NativeSelect](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2172-937) | 2172:937 | `native-select` |
| [Checkbox](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1939-2183) | 1939:2183 | `checkbox` |
| [Toggle](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1988-5238) | 1988:5238 | `toggle-group` |
| [Separator](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2056-1084) | 2056:1084 | `separator` |
| [SheetHeader](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2055-1040) | 2055:1040 | `sheet → SheetHeader / SheetTitle / SheetDescription` |
| [SheetFooter](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2055-1051) | 2055:1051 | `sheet → SheetFooter` |
| [Item](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2118-8884) | 2118:8884 | `item → Item / ItemMedia / ItemContent / ItemTitle / ItemDescription / ItemActions` |
| [Empty](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4151-5594) | 4151:5594 | `empty → Empty / EmptyMedia / EmptyTitle / EmptyDescription / EmptyContent` |
| [Kbd](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1986-1863) | 1986:1863 | `kbd` |
| [Alert](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1774-1994) | 1774:1994 | `alert` |
| [SliderTrack + SliderRange](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2015-429) | 2015:429 | `progress` |

### Icons (lucide-react)

| Figma component | Node | Code |
| --- | --- | --- |
| [lucide/chevron-right](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-590) | 128:590 | `ChevronRight` |
| [lucide/download](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-960) | 128:960 | `Download` |
| [lucide/log-out](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-1644) | 128:1644 | `LogOut` |
| [lucide/check](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-576) | 128:576 | `Check` |
| [lucide/x](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2934) | 128:2934 | `X` |
| [lucide/chevron-down](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-582) | 128:582 | `ChevronDown` |
| [lucide/plus](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2064) | 128:2064 | `Plus` |
| [lucide/search](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2282) | 128:2282 | `Search` |
| [lucide/arrow-up-right](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-198) | 128:198 | `ArrowUpRight` |
| [lucide/globe](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-1348) | 128:1348 | `Globe` |
| [lucide/radio](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2114) | 128:2114 | `Radio` |
| [lucide/shield](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2338) | 128:2338 | `Shield` |
| [lucide/copy](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-850) | 128:850 | `Copy` |
| [lucide/file-text](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-1124) | 128:1124 | `FileText` |
| [lucide/pencil](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-1994) | 128:1994 | `Pencil` |
| [lucide/circle-alert](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-618) | 128:618 | `CircleAlert` |
| [lucide/code](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-794) | 128:794 | `Code` |
| [lucide/upload](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2806) | 128:2806 | `Upload` |
| [lucide/wifi](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2918) | 128:2918 | `Wifi` |
| [lucide/calendar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-528) | 128:528 | `Calendar` |
| [lucide/credit-card](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-876) | 128:876 | `CreditCard` |

### Brand logos

| Figma component | Node | Code |
| --- | --- | --- |
| [Brand / Facebook](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39047) | 4003:39047 | `logo prop (SVG)` |
| [Brand / Cloudflare](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39093) | 4003:39093 | `logo prop (SVG)` |
| [Brand / Ablefy](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39099) | 4003:39099 | `logo prop (SVG)` |
| [Brand / KlickTipp](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39106) | 4003:39106 | `logo prop (SVG)` |
| [Brand / Digistore24](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39112) | 4003:39112 | `logo prop (SVG)` |
| [Brand / Webinaris](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39121) | 4003:39121 | `logo prop (SVG)` |
| [Brand / EverWebinar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39126) | 4003:39126 | `logo prop (SVG)` |
| [Brand / HubSpot](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39133) | 4003:39133 | `logo prop (SVG)` |
| [Brand / Meta Ads](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39142) | 4003:39142 | `logo prop (SVG)` |

## 2 · Screens to build

All frames are 1440px wide and live on the **Traqqr Dashboard** page. Layout positions are identical across them (section 3), so switching stories should never shift the shell.

| Area | Frame | Node |
| --- | --- | --- |
| Dashboard | [Dashboard — empty state](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4151-5810) | 4151:5810 |
| Sites | [Sites — empty](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4151-7933) | 4151:7933 |
|  | [Sites — populated](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4149-5314) | 4149:5314 |
|  | [Sites — Create site drawer](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4136-43843) | 4136:43843 |
|  | [Site Detail — Company](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4138-7935) | 4138:7935 |
| Snippets | [Snippets — empty](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4142-4999) | 4142:4999 |
|  | [Snippets — populated](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4148-5295) | 4148:5295 |
|  | [Snippets — Create snippet drawer](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4136-39145) | 4136:39145 |
|  | [Snippets — Configure snippet drawer](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4156-5567) | 4156:5567 |
| Integrations | [Integrations — list](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4136-52252) | 4136:52252 |
|  | [Ablefy](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4136-59415) | 4136:59415 |
|  | [Facebook](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-7144) | 4164:7144 |
|  | [Cloudflare](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-10227) | 4164:10227 |
|  | [KlickTipp](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-13311) | 4164:13311 |
|  | [Digistore24](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-16395) | 4164:16395 |
|  | [Webinaris](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-19482) | 4164:19482 |
|  | [EverWebinar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-22565) | 4164:22565 |
|  | [HubSpot](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-25650) | 4164:25650 |
|  | [Meta Ads](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4164-28737) | 4164:28737 |
| Tools | [Reverse Proxy](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4171-10777) | 4171:10777 |
|  | [Event Inspector](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4172-7946) | 4172:7946 |
|  | [Live Feed](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4174-8210) | 4174:8210 |
| Settings | [Settings — Billing](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4176-8507) | 4176:8507 |

States map to stories: e.g. `Pages/Snippets` → *Empty*, *Populated*, *Create drawer*, *Configure drawer*. The Top Bar also has a *Logout hover* state for the tooltip story.

## 3 · App shell & layout spec

Measured at 1440px. Tailwind classes assume the default 4px scale.

| Element | Figma | Code |
| --- | --- | --- |
| Sidebar | x 0, y 0, 217px wide, full height, 1px right border (`sidebar-border`) | Content starts at x 216, overlapping the border by 1px. Use `grid-cols-[216px_1fr]` with `border-r` on the sidebar. |
| Content column | x 216, width 1224 | `relative overflow-hidden`; App background sits behind everything in it. |
| Top bar | Height 56, padding 12 / 16, token `topbar` | `h-14 px-4 py-3 bg-[var(--topbar)]`; greeting `text-xs font-mono`; logout ghost icon button. |
| Page body | Padding top 36, sides 64, bottom 40; gap 36 between blocks | `pt-9 px-16 pb-10 gap-9 flex flex-col` → content width 1096px. |
| Page header (no breadcrumb) | Title at 280, 92 · subtitle at 280, 134 on every screen | Title `text-3xl` Manrope; subtitle `text-sm font-mono text-muted-foreground`; `gap-1.5` (6px). Primary action right-aligned, vertically centred. |
| Page header (breadcrumb) | Breadcrumb at 280, 92 (20px tall), then 36px gap. Title at 280, 148 (Site Detail, Live Feed) | Breadcrumb is the first block in the body; the header follows with the same `gap-9`. |
| Integration detail header | 56px identity row: 56px logo tile, 16px gap, title, 20px gap, status Badge. Description 16px below | Identity row `gap-4`, title–badge `gap-5`, description `mt-4`. Title at 352, 158 and description at 280, 220 on all nine pages. Site Detail uses the same `gap-5` between title and badge. |
| Cards | radius-xl, 1px border, 24px sides, 24px top/bottom | `rounded-xl border py-6 px-6 gap-4`. The translucent style is `bg-card/80`. Centred “Connect …” cards use 40px padding (`p-10`). |
| Sheets (drawers) | Right side, full height. 560px (snippet drawers) / 460px (Create site). Overlay black 50% | `<SheetContent className="sm:max-w-[560px]">` and `sm:max-w-[460px]`; overlay `bg-black/50`. |
| Buttons | All 32px tall (Size=default) | See section 7: the file's size scale is one step smaller than stock shadcn. |

## 4 · Design tokens

The file uses the standard shadcn variable set (`background`, `foreground`, `card`, `muted`, `border`, `primary`, `radius-*`…) in the `mode` collection with light and dark modes, plus Tailwind spacing variables (`tw/padding`, `tw/gap`, `tw/height`…) that map directly to utility classes. Four tokens are Traqqr additions:

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| `--brand` | #FFB74D | #FFB74D | Amber brand accent, e.g. icons (59 uses) |
| `--card-translucent` | white / 80% | #1C1917 / 80% | Translucent cards: `bg-card/80` |
| `--topbar` | white / 60% | #030712 / 10% | Top bar background |
| `--foreground-subtle` | #0C0A09 / 6% | white / 6% | Very low-contrast fills (empty-state tiles) |

Opacity is carried inside these tokens (the alpha is part of the colour), not as layer opacity. Keep it that way in CSS so the components stay translucent in both themes.

### Typography

**Manrope** for headings and titles, **Space Mono** for UI text, body and tables. Line heights follow Tailwind defaults.

| Figma style | Font | Size/LH | Tailwind | Typical use | Uses |
| --- | --- | --- | --- | --- | --- |
| Text-3xl/Header | Manrope Regular | 30/36 | `text-3xl` | Page titles | 23 |
| Text-2xl/Header | Manrope Regular | 24/32 | `text-2xl` | — | 3 |
| Text-xl/Semi Bold | Manrope SemiBold | 20/28 | `text-xl font-semibold` | — | 5 |
| Text-lg/Header | Manrope Regular | 18/28 | `text-lg` | Card titles, nav | 218 |
| Text-base/Header | Manrope Regular | 16/24 | `text-base` | Section titles | 29 |
| Text-base/Medium | Space Mono Regular | 16/24 | `text-base font-mono` | — | 7 |
| Text-sm/Medium | Space Mono Regular | 14/20 | `text-sm font-mono` | Buttons, labels, table | 92 |
| Text-sm/Regular | Space Mono Regular | 14/20 | `text-sm font-mono` | Body, descriptions | 127 |
| Text-sm/Light | Space Mono Regular | 14/20 | `text-sm font-mono` | — | 1 |
| Text-xs/Medium | Space Mono Regular | 12/16 | `text-xs font-mono` | Badges | 8 |
| Text-xs/Regular | Space Mono Regular | 12/16 | `text-xs font-mono` | Greeting, helper text | 30 |

**Style naming.** The Manrope **Header** styles are Regular weight on purpose (they replace the old “Semi Bold” names so they don't clash with the real SemiBold styles, e.g. Text-xl/Semi Bold). Space Mono only ships Regular and Bold, so its “Medium” and “Light” styles render as Regular: use `font-normal`, not `font-medium`.

## 5 · App background (CSS)

Component: [App background](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4211-139) · dev spec frame: [App background — dev spec](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4211-6024). One instance per screen at 0,0 in the content column, behind the top bar. Build it with CSS, not thousands of SVG dots. Layers are pinned top-left, so taller pages show more grid while the glow stays the same size and position.

```
/* <AppBackground /> */
.app-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }

/* Dot grid: 2px white dot with 1px dark ring, 24px pitch, 35% opacity */
.app-bg__dots {
  position: absolute; left: 1px; top: 25px; right: 0; bottom: 0;
  opacity: 0.35;
  background-image: radial-gradient(circle, #fff 0 0.5px, #000 0.5px 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  background-position: -12px -12px;
}

/* Glow: Figma style "Background gradient" + 300px layer blur */
.app-bg__glow {
  position: absolute; left: 1px; top: 25px; width: 1200px; height: 1269px;
  background:
    linear-gradient(rgb(0 0 0 / 0.2), rgb(0 0 0 / 0.2)),
    linear-gradient(219.8deg, #1C2C3E 22.3%, rgb(255 171 64 / 0.42) 69.5%, #17212C 80.1%);
  filter: blur(300px);
}
```

The gradient angle and stop positions were converted from Figma's gradient settings and haven't been rendered side by side yet. Compare the built version with the component in Figma and adjust if the glow sits slightly differently.

## 6 · Component inventory

Every component instanced on the 23 screens, generated from the Figma file. Names link to the main component. “Uses” counts instances across all screens, including ones nested inside other components.

### Traqqr app components

| Component | Code target | Figma properties | Uses | Notes |
| --- | --- | --- | --- | --- |
| **[Traqqr Sidenavbar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4065-953)** Sidebar page | `App component — build on shadcn <Sidebar> or a plain <aside>` | — | 23 All 23 screens | Logo, nav links, user footer. Stretches to full page height (fixed in the component). |
| **[Traqqr Top Bar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4194-25781)** Sidebar page | `App component + shadcn Tooltip` | Greeting (text) State: Default / Logout hover | 23 All 23 screens | h-14 px-4 py-3, background token `topbar`. Logout is a ghost icon Button wrapped in `<Tooltip>` with `side="left"` and `aria-label="Logout"`. |
| **[App background](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4211-139)** Sidebar page | `App component — CSS only (see section 5)` | — | 23 All 23 screens | Dot grid + blurred gradient glow behind the content column. Build with CSS backgrounds, not SVG dots. Dev-spec frame sits next to the component. |
| **[Integration Card](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4160-6394)** Card page | `Composed from shadcn Card (CardHeader, CardTitle, CardDescription, CardAction)` | Logo (swap) Chevron (boolean) | 9 Integrations list | Logo tile + status Badge + chevron. Whole card is a link to the integration detail page. |
| **[Card (shell)](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4194-25648)** Card page | `shadcn Card` | Style: Default / Translucent Footer: No / Yes | — Reference only | Storybook reference for the card shell. On the screens, cards are composed from Card header / Card footer inside a frame, so this set is not instanced there. Translucent = `bg-card/80` (token `card-translucent`). |

### shadcn/ui components

Install: `npx shadcn@latest add button badge card table breadcrumb field input textarea native-select checkbox toggle-group separator sheet item empty kbd alert progress tooltip`

| Component | Code target | Figma properties | Uses | Notes |
| --- | --- | --- | --- | --- |
| **[Button](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1872-3230)** Button page | `button` | Variant: Default / Outline / Secondary / Ghost / Destructive / Link Size: xs / sm / default / lg State: Default / Hover / Focus / Disabled Roundness: Default / Rounded Left icon · Right icon · Kbd (boolean) | 38 21 screens | Every button on the screens is **Size=default (32px, h-8)**. Roundness is a custom prop (see flags). |
| **[Icon Button](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1892-615)** Button page | `button size="icon"` | Icon (swap) Variant Size: xs / sm / default / lg State Roundness | 32 All 23 screens | Mostly ghost: top bar logout, sheet close, table row actions. |
| **[Badge](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1868-495)** Badge page | `badge` | State: Default / Secondary / Destructive / Outline / Ghost / Success / Warning Left icon · Right icon (boolean) | 37 16 screens | Success and Warning are custom variants (not in stock shadcn). Used on screens: Outline, Secondary, Success, Warning, Destructive. |
| **[Card header](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1932-860)** Card page | `card → CardHeader / CardTitle / CardDescription / CardAction` | Type: Image / Button / Badge Dir: None / LTR / RTL / Middle Button · Badge · Icon (boolean) Icon swap (swap) | 40 20 screens | Dir=Middle is the centred 'connect' layout. Icon slot is off on the 'Connect your … account' cards. |
| **[Card footer](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1932-931)** Card page | `card → CardFooter` | Double button (boolean) Footer text (boolean) | 7 Site Detail, Event Inspector, Billing |  |
| **[Table head](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1945-4070)** Table page | `table → TableHead` | Checkbox · Button · Text (boolean) Dir: LTR / RTL State: Default / Hover | 34 6 screens |  |
| **[Table cell](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1945-4087)** Table page | `table → TableCell` | Text · Badge · Button · Input · Checkbox · Icon (boolean) Icon swap (swap) Dir State: Default / Hover | 81 6 screens | Clickable rows: see hover spec [Table · Clickable row](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4191-3944). |
| **[BreadcrumbItem](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1871-361)** Breadcrumb page | `breadcrumb → BreadcrumbItem / BreadcrumbLink / BreadcrumbPage` | Icon · BreadcrumbLink (boolean) State: Default / Hover/Active Dir | 22 11 screens |  |
| **[Breadcrumb separator](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2198-2610)** Breadcrumb page | `breadcrumb → BreadcrumbSeparator` | Type: chevron-right / dot | 11 11 screens |  |
| **[FieldLabel](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1928-3999)** Input page | `field → FieldLabel` | Asterisk · Badge · Action (boolean) State: Default / Destructive / Disabled Dir | 17 6 screens |  |
| **[FieldDescription](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1930-445)** Input page | `field → FieldDescription` | Alignment: Left / Right | 12 6 screens |  |
| **[Input](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1928-3990)** Input page | `input (+ input-group for addons)` | State Text: Placeholder / Active Left icon · Right icon · Input group addon/control (boolean) Roudness [sic]: Default / Rounded | 14 6 screens | Search inputs in table cards use the left search icon. |
| **[Textarea](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1984-1854)** Textarea page | `textarea` | State: Default / Focus / Destructive / Disabled Dir | 2 Sites drawer, Event Inspector | Inside this component is a nested 'Textarea' from a deleted set — ignore it and use stock shadcn Textarea. |
| **[NativeSelect](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2172-937)** Native Select page | `native-select` | State Dir | 8 4 screens | Billing plan dropdowns show the full label (no truncation). |
| **[Checkbox](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1939-2183)** Checkbox page | `checkbox` | Interaction Data state: Checked / Unchecked / Invalid-… | 1 Configure snippet drawer |  |
| **[Toggle](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1988-5238)** Toggle & Toggle Group page | `toggle-group (type="single" variant="outline" size="sm")` | Variant: Outline / Ghost Size: sm / default / large State Position: Single / Left / Middle / Right | 7 Integrations list, Dashboard | The Integrations filter is a loose frame 'Toggle group (local)' — build it as one ToggleGroup. |
| **[Separator](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2056-1084)** Separator page | `separator` | Direction | 6 Configure drawer, Billing |  |
| **[SheetHeader](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2055-1040)** Sheet page | `sheet → SheetHeader / SheetTitle / SheetDescription` | Icon (boolean) Dir | 3 3 drawers |  |
| **[SheetFooter](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2055-1051)** Sheet page | `sheet → SheetFooter` | — | 3 3 drawers | Footer buttons are Size=default, full width. |
| **[Item](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2118-8884)** Item page | `item → Item / ItemMedia / ItemContent / ItemTitle / ItemDescription / ItemActions` | Title · Description (text) Left icon / Left icon small / Number / Checkbox / Avatar / Image (media) Kbd · Right icon · Button (boolean) Type · State · Size · Dir | 5 Site Detail, Event Inspector | Number (a Badge) and Checkbox media slots and inline Kbd were added for step lists. Compose with ItemMedia. |
| **[Empty](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4151-5594)** Empty page | `empty → Empty / EmptyMedia / EmptyTitle / EmptyDescription / EmptyContent` | Title · Description (text) Icon (swap) Button (boolean) | 4 Sites, Sites drawer, Dashboard, Live Feed | Custom media icons: [Empty icon/Sites](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4151-5588), [Empty icon/Dashboard](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4151-5584). |
| **[Kbd](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1986-1863)** Kbd page | `kbd` | — | 2 Configure drawer, Event Inspector |  |
| **[Alert](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1774-1994)** Alert page | `alert` | State: Default / Destructive Button · Description · Icon (boolean) | 1 Live Feed | Uses a real Button in the action slot. |
| **[SliderTrack + SliderRange](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=2015-429)** Slider page | `progress (not slider)` | Orientation | 2 Billing | Used as the 4px trial/usage bar on Billing. Build with `<Progress className="h-1">`, not an interactive slider. |

### Icons

All UI icons are Lucide, so use `lucide-react`. The small pencil on Site Detail is intentionally 14px.

| Figma | lucide-react | Uses |
| --- | --- | --- |
| [lucide/chevron-right](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-590) | `ChevronRight` | 28 |
| [lucide/download](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-960) | `Download` | 2 |
| [lucide/log-out](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-1644) | `LogOut` | 23 |
| [lucide/check](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-576) | `Check` | 12 |
| [lucide/x](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2934) | `X` | 8 |
| [lucide/chevron-down](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-582) | `ChevronDown` | 8 |
| [lucide/plus](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2064) | `Plus` | 6 |
| [lucide/search](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2282) | `Search` | 4 |
| [lucide/arrow-up-right](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-198) | `ArrowUpRight` | 4 |
| [lucide/globe](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-1348) | `Globe` | 3 |
| [lucide/radio](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2114) | `Radio` | 3 |
| [lucide/shield](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2338) | `Shield` | 2 |
| [lucide/copy](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-850) | `Copy` | 2 |
| [lucide/file-text](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-1124) | `FileText` | 2 |
| [lucide/pencil](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-1994) | `Pencil` | 1 |
| [lucide/circle-alert](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-618) | `CircleAlert` | 1 |
| [lucide/code](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-794) | `Code` | 1 |
| [lucide/upload](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2806) | `Upload` | 1 |
| [lucide/wifi](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-2918) | `Wifi` | 1 |
| [lucide/calendar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-528) | `Calendar` | 1 |
| [lucide/credit-card](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=128-876) | `CreditCard` | 1 |

### Brand logos

Logo tiles (56×56) come from a linked Figma library: [Facebook](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39047), [Cloudflare](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39093), [Ablefy](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39099), [KlickTipp](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39106), [Digistore24](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39112), [Webinaris](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39121), [EverWebinar](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39126), [HubSpot](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39133), [Meta Ads](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4003-39142). Export them as SVG from those links and keep them in `/public/brands`, or as React components passed to the IntegrationCard `logo` prop.

## 7 · Differences from stock shadcn — read before building

These were changed on purpose or need a decision in code. Each applies once, at component level.

| Item | What to do |
| --- | --- |
| Button sizes are one step smaller than stock shadcn | In this file default is 32px (`h-8 px-4`), sm is 28px (`h-7 px-3`) and lg is 36px (`h-9 px-6`). Stock shadcn v4 uses 36 / 32 / 40. Every button on the screens uses **default (32px)**, including drawer footers. |
| Button “Roundness” prop | Custom variant with no shadcn equivalent: `Default` = `rounded-md`, `Rounded` = `rounded-full`. Add it as a `shape` variant in `buttonVariants`. Primary page actions (Create Snippet, New Site, Connect …) are Rounded; secondary and destructive actions are square. |
| Cap-height text trim on Button and Badge | Space Mono sits low in its line box, so labels are trimmed to cap height in Figma. In CSS use `text-box: trim-both cap alphabetic` on the label. Browser support is still partial (Firefox doesn't support it yet), so add a small padding fallback or a Firefox check. |
| Badge sizing and variants | 22px tall, 7px top/bottom padding with trimmed text, `rounded-full`. Success and Warning variants are Traqqr additions (check the Badge component for their exact colours). |
| Card spacing | 24px sides kept on purpose (stock `px-6`). The centred “Connect your … account” cards use 40px padding (`p-10`) and no header icon. |
| Translucent cards | Cards using the Translucent style (`bg-card/80` via the `card-translucent` token), such as the “No snippets yet” and “No conversions yet” cards. Don't replace them with solid cards. |
| Clickable table rows | Rows with a chevron column (e.g. Snippets and Sites) open a detail view: `hover:bg-muted/50`, `cursor-pointer`, name underlined, chevron column turns foreground. Make the name a link stretched over the row so keyboard focus and screen readers work. Spec: [Table · Clickable row](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4191-3944). |
| Table cell icon slot | Table cell has an extra Icon + Icon swap property (used for the chevron column). In code this is just a child icon in `<TableCell>`. |
| Item extensions | Item has extra media slots (Number badge, Checkbox, small 14px icon) and an inline Kbd for step lists on Site Detail and Event Inspector. Compose them with `ItemMedia` and `ItemContent` rather than adding props. |
| Progress bar, not slider | The Billing trial bar is drawn with SliderTrack/SliderRange but is display-only. Use `<Progress className="h-1">` (4px). |
| Top bar tooltip | Logout icon button shows a Tooltip “Logout” on the left: `<TooltipContent side="left">`. A *Logout hover* variant exists for the story. |
| Sheet overlay and widths | Overlay is `bg-black/50` (stock). Widths are 560px for the snippet drawers and 460px for Create site. |
| Integrations filter | “Toggle group (local)” on the Integrations list is a loose frame of three Toggles. Build it as a single `<ToggleGroup type="single" variant="outline" size="sm">`. |

## 8 · Housekeeping & decisions

### Don't build

- The page **Archive – do not build (old Traqqr drafts)**: superseded screens and a legacy card component.
- The nested “Textarea” sub-component inside [Textarea](https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=1984-1854) points to a deleted component set. Ignore it; stock shadcn Textarea covers it.

### Recently normalised in Figma (so the build can be exact)

- Sidebar, top bar, content column, titles and subtitles sit at identical positions on all 23 screens.
- All buttons are one size (default, 32px).
- Every page body has 40px bottom padding; header gaps are on the Tailwind scale.
- The background is one shared component with a CSS spec (section 5).
- The sidebar background stretches to the full height on long pages (Billing).

### Design decisions (confirmed)

| Topic | Decision |
| --- | --- |
| Heading weight | Manrope headings are Regular on purpose. The styles are now named **Header** (e.g. Text-3xl/Header). |
| Page bottom padding | 40px (`pb-10`) on every screen, now bound to the pb-10 variable in Figma. |
| Off-scale gaps | Rounded to the Tailwind scale: integration description 16px (`gap-4`), title–badge 20px (`gap-5`). |
| Invoice download icon | Lucide `Download`, the same as every other icon. There are no Remix icons left on the screens. |

Component counts and properties were read directly from the Figma file on 25 September 2026. If the file changes, the links still point to the live components.

## 9 · Building this with Claude

If you use Claude (Claude Code or another Claude-powered tool) to implement this, three things make the output far more accurate: the spec as a file in the repo, live read access to the Figma file, and small tasks that can be checked one at a time.

### How Figma, Claude and Storybook fit together

**Flow:** Figma file → (Figma MCP) → Claude → code repo (components + stories) → Storybook. Claude compares each story with the Figma screenshot and fixes differences. The Designs add-on shows the matching Figma frame beside each story. Later, Code Connect shows the real code in Figma Dev Mode.

Storybook never imports the Figma file. It shows code, and Claude is the step that turns the design into that code. Your Figma file stays the source of truth throughout.

### Setup (once)

01

**Add the spec to the repo.** Save the companion file `traqqr-design-handover.md` (the same content as this PDF, as Markdown with every node ID and link) to `docs/`.

02

**Point CLAUDE.md at it**, so every session starts with the rules:

```
# Design system
- Source of truth: docs/traqqr-design-handover.md (Figma file AuTDmsP70q09vix9pojWv0).
- Build screens only from components in components/ui (shadcn) and components/traqqr.
- Apply design deviations inside the component source, never per screen.
- Use Tailwind scale values from the handover; no arbitrary px unless the handover lists them.
- Layout with flex/grid. Never copy absolute positions from Figma.
- Every component and page gets a Storybook story; compare it with the Figma screenshot before finishing.
```

03

**Connect the Figma MCP server** so Claude can read frames, variables and screenshots by node ID. In Claude Code: `claude mcp add --transport http figma https://mcp.figma.com/mcp`, then run `/mcp` to sign in. Useful tools: `get_design_context` (structure + code hints for a node), `get_screenshot` (visual check) and `get_variable_defs` (tokens).

04

**Show the Figma frame next to each story.** Install `@storybook/addon-designs`, add it to `addons` in `.storybook/main.ts`, then give each story the link from section 2 or 6:

```
export const Populated = {
  parameters: {
    design: { type: "figma", url: "https://www.figma.com/design/AuTDmsP70q09vix9pojWv0/Traqqr?node-id=4148-5295" },
  },
};
```

05

**Optional: let Claude see Storybook too.** Storybook has an MCP add-on that lets Claude look up the components and stories that already exist, so it reuses them instead of making near-duplicates. It's newer, so check the Storybook docs for current setup.

### Prompts, in build order

Run them one at a time and review each result before moving on. Copyable versions are in the companion Markdown file.

```
1 · TOKENS
Read docs/traqqr-design-handover.md sections 4 and 5. Use the Figma MCP
get_variable_defs on frame 4148:5295 to confirm values. Set up globals.css with
the shadcn variables for light and dark, add --brand, --card-translucent,
--topbar and --foreground-subtle, load Manrope and Space Mono, and create
Foundations/Colors, Foundations/Typography and Foundations/AppBackground stories.
Don't edit any components yet.
```

```
2 · PRIMITIVES
Install the shadcn components listed in section 6. Apply every item in section 7
(button sizes, Roundness → shape variant, cap-height trim, Badge Success/Warning,
etc.) in the component source. Write a story for each variant listed in the
"Figma properties" column. For each component, call get_screenshot on its node
ID and compare it with the story. List anything you couldn't match.
```

```
3 · APP SHELL
Build components/traqqr: Sidenavbar (4065:953), TopBar (4194:25781, with the
Logout tooltip), AppBackground (4211:139, CSS from section 5, not SVG dots) and an
AppShell layout following section 3 exactly (grid-cols-[216px_1fr], top bar h-14,
body pt-9 px-16 pb-10 gap-9). Add stories and compare with frame 4142:4999.
Give every story a design parameter with its Figma link (addon-designs).
```

```
4 · ONE SCREEN AT A TIME (repeat per frame in section 2)
Build the story Pages/Snippets/Populated for Figma frame 4148:5295. Call
get_design_context and get_screenshot on that node. Compose it only from
components/ui and components/traqqr inside AppShell. If something needs a style
or component that doesn't exist, stop and tell me instead of inventing one.
Finish by comparing the story with the Figma screenshot and listing differences.
```

Give Claude node IDs rather than descriptions. Every link in this document contains one (`node-id=4148-5295` is node `4148:5295`).