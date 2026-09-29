# Changelog

## [0.2.0](https://github.com/alex-hyslop/traqqr-components/compare/v0.1.2...v0.2.0) (2026-09-29)

### Features

* **ui:** add AlertDialog, Skeleton and Sonner; Tooltip wraps at 240px ([b1b0890](https://github.com/alex-hyslop/traqqr-components/commit/b1b089097346545ef6470cb07db8263ba2c7d20d))
* **ui:** apply Kev's elements handover to existing components ([ebfed59](https://github.com/alex-hyslop/traqqr-components/commit/ebfed5948ddf12682dc4584729a7f8b406256ad4))
* **alert:** add success/warning variants and warning tokens from Figma ([f89fb35](https://github.com/alex-hyslop/traqqr-components/commit/f89fb35649704824ec4469e0f99fe8c3e080abc7))
* **card:** add CardMedia gradient logo tile with overridable tokens ([8dae020](https://github.com/alex-hyslop/traqqr-components/commit/8dae02068b88c3334492574a100bbf22f2353818))

### Upgrade notes (changes to existing components)

* **Card:** padding is now `py-6` / `px-6` with `gap-4` and a 1px border (was 16px all round with a ring); CardFooter is a filled `muted` band.
* **Sheet:** right side is `w-[90%] sm:max-w-[560px]`, left side `w-80`; surface is `background`. Use the new `SheetBody` for a scrolling body.
* **ToggleGroup:** items are joined by default (`spacing` defaults to 0).
* **Table:** plain rows no longer highlight on hover; add `data-clickable` to a row for the clickable style.
* **FieldSet / FieldLegend:** 12px section spacing, Regular-weight legend.
* **Tooltip:** wraps at 240px (`max-w-60`).

### Documentation

* **storybook:** add collapsed breadcrumb ellipsis example ([3893c57](https://github.com/alex-hyslop/traqqr-components/commit/3893c57d7320be2a050918c318050f1da74eb377))
* **storybook:** add Label to Checkbox playground ([e08eff3](https://github.com/alex-hyslop/traqqr-components/commit/e08eff3fecad7143985ad465fa70814608e75025))

## [0.1.2](https://github.com/alex-hyslop/traqqr-components/compare/v0.1.1...v0.1.2) (2026-09-28)

### Features

* ship "use client" for React Server Component consumers ([e60854a](https://github.com/alex-hyslop/traqqr-components/commit/e60854ae025185f20ba70a4cfded3c0586e5ee3e))

### Bug Fixes

* **ui:** match all atoms to Figma values, add InputGroup and state stories ([c0329e8](https://github.com/alex-hyslop/traqqr-components/commit/c0329e8be85e2a81b7c4e39f8625719478684b69)), closes [#79716b](https://github.com/alex-hyslop/traqqr-components/issues/79716b)

### Documentation

* add AGENTS.md with packaging and import rules, replace CLAUDE.md ([a95d902](https://github.com/alex-hyslop/traqqr-components/commit/a95d902f0c7dbe36ebd7f5af198769fe92723a97))

### Miscellaneous Chores

* **dist:** rebuild after merging origin/main ([b2d4a24](https://github.com/alex-hyslop/traqqr-components/commit/b2d4a24d0a53de2b1b1a7d49b57dcfbc419ff394))
* exclude story files from the tsc type-check gate ([72ecb9b](https://github.com/alex-hyslop/traqqr-components/commit/72ecb9b3d44d834cd4745e07bb58833358bc292a))
* make release tolerate nondeterministic dts output ([bd06432](https://github.com/alex-hyslop/traqqr-components/commit/bd06432c0fa669312a410b61f5e758b3d0aaa393))
* **release:** automate releases with release-it ([4b6acf2](https://github.com/alex-hyslop/traqqr-components/commit/4b6acf2a5ed6b410056334d640467b1930f432e6))
* **release:** show all commit types in generated changelog ([c33db26](https://github.com/alex-hyslop/traqqr-components/commit/c33db26f56e136fbc7e70bc99f940411fd90bc64))
* **storybook:** group all stories under ui/ again ([3359ff8](https://github.com/alex-hyslop/traqqr-components/commit/3359ff8e082d252582faab8a10ba232594c8fb4d))
