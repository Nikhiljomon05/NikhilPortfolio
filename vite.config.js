import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the same build works on
// Vercel, Cloudflare Pages and GitHub Pages (including /repo-name/ sub-paths).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 700,
  },
})
