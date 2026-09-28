# Component rules

- **Every component must be real shadcn/ui** — installed via `npx shadcn@latest add <name>` from the official registry (`ui.shadcn.com`), never a hand-rolled component invented to fill a name on a list. If a needed component isn't in shadcn's registry yet, install the closest real primitive and compose it — do not build a bespoke replacement from plain divs.
- Deviations from stock shadcn (sizing, variants, colors, added props) are applied **once, in the installed component's source** (e.g. `src/components/ui/button.tsx`), never per-usage or via a wrapper component that reimplements it.
- This applies every time a new component is needed, in every future task — not just the current Figma handover work.

# Icons

- Icons are **not** part of this library. `lucide-react` is a `peerDependency` (also listed in `devDependencies` so local Storybook keeps working) — never move it back to `dependencies`.
- Consuming apps add `lucide-react` themselves and pick whatever icons they need. Never add a new icon import to solve a "we need icon X" request from a consumer — that icon choice belongs in the app, not the library.
- Components accept icons as **children or props** (e.g. `<Button><Mail data-icon="inline-start" />Email</Button>`), never as a baked-in default for a specific piece of content. The `data-icon="inline-start"|"inline-end"` attribute is what the component's own CSS keys off for icon-slot padding — set it on whatever icon element is passed in.
- The only lucide imports allowed *inside* `src/components/ui/*.tsx` source (not stories) are structural icons that are an intrinsic, non-optional part of the primitive's own rendering — e.g. Checkbox's check mark, NativeSelect's chevron, Sheet's close X, Breadcrumb's default separator/ellipsis. These aren't a content decision, so they don't violate the policy above.
- Storybook stories may import any lucide icon freely to demonstrate a component's icon slots — that's a demo concern, not a library dependency.

# Design system (Traqqr dashboard handover)

- Source of truth: `docs/traqqr-design-handover.md` (Figma file `AuTDmsP70q09vix9pojWv0`).
- Build screens only from components in `components/ui` (shadcn) and `components/traqqr` (app-specific, composed from `ui`).
- Apply design deviations inside the component source, never per screen.
- Use Tailwind scale values from the handover; no arbitrary px unless the handover lists them.
- Layout with flex/grid. Never copy absolute positions from Figma.
- Every component and page gets a Storybook story; compare it with the Figma screenshot before finishing.
