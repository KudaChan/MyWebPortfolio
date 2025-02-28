import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "chandan-kumar-yg",
      project: "my-portfolio"
    })
  ],
  server: {
    cors: true
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'react-tilt'],
        }
      }
    }
  },
  // Add this to ensure environment variables are handled correctly
  envPrefix: 'VITE_'
});
