import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "chandan-kumar-yg",
    project: "my-portfolio"
  }), sentryVitePlugin({
    org: "chandan-kumar-yg",
    project: "my-portfolio"
  })],

  server: {
    cors: true
  },

  build: {
    sourcemap: true
  }
});