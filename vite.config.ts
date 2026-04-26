import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // In CI the workflow sets VITE_BASE_URL=/<repo-name>/ for GitHub Pages routing.
  // Locally it falls back to './' so `npm run dev` and `npm run preview` work unchanged.
  base: process.env.VITE_BASE_URL ?? './',
})
