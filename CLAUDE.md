# Component rules

- **Every component must be real shadcn/ui** — installed via `npx shadcn@latest add <name>` from the official registry (`ui.shadcn.com`), never a hand-rolled component invented to fill a name on a list. If a needed component isn't in shadcn's registry yet, install the closest real primitive and compose it — do not build a bespoke replacement from plain divs.
- Deviations from stock shadcn (sizing, variants, colors, added props) are applied **once, in the installed component's source** (e.g. `src/components/ui/button.tsx`), never per-usage or via a wrapper component that reimplements it.
- This applies every time a new component is needed, in every future task — not just the current Figma handover work.

# Design system (Traqqr dashboard handover)

- Source of truth: `docs/traqqr-design-handover.md` (Figma file `AuTDmsP70q09vix9pojWv0`).
- Build screens only from components in `components/ui` (shadcn) and `components/traqqr` (app-specific, composed from `ui`).
- Apply design deviations inside the component source, never per screen.
- Use Tailwind scale values from the handover; no arbitrary px unless the handover lists them.
- Layout with flex/grid. Never copy absolute positions from Figma.
- Every component and page gets a Storybook story; compare it with the Figma screenshot before finishing.
