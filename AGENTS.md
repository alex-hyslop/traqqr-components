# Agent rules

## Component rules

- **Every component must be real shadcn/ui** — installed via `npx shadcn@latest add <name>` from the official registry (`ui.shadcn.com`), never a hand-rolled component invented to fill a name on a list. If a needed component isn't in shadcn's registry yet, install the closest real primitive and compose it — do not build a bespoke replacement from plain divs.
- Deviations from stock shadcn (sizing, variants, colors, added props) are applied **once, in the installed component's source** (e.g. `src/components/ui/button.tsx`), never per-usage or via a wrapper component that reimplements it.
- This applies every time a new component is needed, in every future task — not just the current Figma handover work.

## Design system (Traqqr dashboard handover)

- Source of truth: `docs/traqqr-design-handover.md` (Figma file `AuTDmsP70q09vix9pojWv0`).
- Build screens only from components in `components/ui` (shadcn) and `components/traqqr` (app-specific, composed from `ui`).
- Apply design deviations inside the component source, never per screen.
- Use Tailwind scale values from the handover; no arbitrary px unless the handover lists them.
- Layout with flex/grid. Never copy absolute positions from Figma.
- Every component and page gets a Storybook story; compare it with the Figma screenshot before finishing.

## Imports (keeps the package consumable)

This repo is consumed as an npm git dependency. The `@/` path alias is **dev-tooling only** (resolved by `vite.config.ts` for the demo app and Storybook) — it does not exist for package consumers.

- Inside `src/components/ui/*.tsx`, use only:
  - bare package specifiers: `react`, `cn`, `radix-ui`, `class-variance-authority`, `lucide-react`
  - relative imports between ui components: `import { Button } from "./button"`
- **Never use `@/` imports in component sources.** The library build (`npm run build:lib`) resolves no alias; dangling `@/` imports fail the build or produce an uninstallable package. This exact bug was fixed in the past by rewriting 5 alias imports to relative ones — do not reintroduce it.
- `*.stories.tsx` files are dev-only (never shipped) and may use `@/`.

## Barrel

- Every component in `src/components/ui/` must be exported from `src/components/ui/index.ts`.
- Adding a component: add `export * from "./name"`.
- Removing a component: remove its barrel export in the same commit — dangling exports break the build for consumers.

## Dependencies

- **peerDependencies** (consumer provides them, never bundled — tsdown externalizes peers and dependencies automatically): `react`, `react-dom` (`^19`), `tailwindcss` (`^4`), `lucide-react`.
- **dependencies** (shipped to consumers): `radix-ui`, `class-variance-authority`, `cn`, `shadcn` (required at runtime — `styles.css` imports `shadcn/tailwind.css`), `tw-animate-css`, `@fontsource-variable/manrope`, `@fontsource/space-mono`.
- **devDependencies**: `@tailwindcss/vite` and all build/Storybook/test tooling. Never move a dev tool into `dependencies` — consumers would install it.
- Never add `react` or `react-dom` to a build output — a bundled second React breaks hooks and hydration in the consumer.

## Styles and tokens

- Design tokens (the `@theme inline` block, `:root`/`.dark` values, `@custom-variant dark`, base layer) live in **`src/styles.css`**, which the package exports as `traqqr-components/styles.css`.
- `src/index.css` stays a thin wrapper: `@import "tailwindcss";` then `@import "./styles.css";`. Do not move tokens back into it.
- Consumers must run Tailwind v4 and `@source` the package (`node_modules` is not scanned by default). Token variables with no usage in shipped components are pruned by Tailwind — that is expected, not a bug.

## Releases

The package is installed pinned to a tag (e.g. `github:alex-hyslop/traqqr-components#v0.1.1`). npm git installs receive the **repo tree at that tag** — consumers must never run a build at install time, so `dist/` is committed.

Release flow, in order:

1. Bump `version` in `package.json` (e.g. `npm version 0.1.2 --no-git-tag-version`).
2. `npm ci` — verifies `package-lock.json` is in sync with the manifest.
3. `npm run build:lib` — must succeed with zero unresolved imports.
4. `npx tsc -b` — no new errors outside `*.stories.tsx` (pre-existing story type errors are tracked separately; do not add new ones).
5. Commit, tag `vX.Y.Z`, then `git push origin main vX.Y.Z`.
6. `dist/` must be fresh: if sources changed since the last build, rebuild and commit before tagging. A tag whose `dist/` doesn't match its sources ships broken code.
