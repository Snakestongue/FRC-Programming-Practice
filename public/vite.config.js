// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '.',         // Build directly into the FRONTEND folder
    emptyOutDir: false   // Don’t delete existing files (so src/ etc. stay)
  },
  base: './'             // Use relative paths for GitHub Pages
})