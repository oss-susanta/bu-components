/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
  plugins: [react(), dts({ include: ["lib"] })],
  test: {
    coverage: {
      include: ["lib/*"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup-tests.ts"],
    pool: "forks",
  },
});
