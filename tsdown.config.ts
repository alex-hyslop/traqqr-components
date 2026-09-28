import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/components/ui/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  outDir: "dist",
  tsconfig: "./tsconfig.app.json",
})
