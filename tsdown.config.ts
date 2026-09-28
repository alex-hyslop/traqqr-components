import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/components/ui/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  outDir: "dist",
  tsconfig: "./tsconfig.app.json",
  // The bundle is a single file, so per-module "use client" directives in
  // sources are stripped at build time. Prepending it to the bundle keeps the
  // package working when imported from React Server Components (Next.js App
  // Router). Revisit if the build ever switches to unbundled output.
  banner: '"use client"',
})
