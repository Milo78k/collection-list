import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
