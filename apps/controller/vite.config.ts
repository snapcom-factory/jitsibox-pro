import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"
import svgr from "@honkhonk/vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
})

