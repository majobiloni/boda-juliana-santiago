import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project site on GitHub Pages is served from /boda-juliana-santiago/,
  // not the domain root, so built asset URLs need this prefix.
  base: '/boda-juliana-santiago/',
})
