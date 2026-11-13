import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep CSS processing compatible with managed Windows environments that block native minifier binaries.
    cssMinify: false,
  },
})
