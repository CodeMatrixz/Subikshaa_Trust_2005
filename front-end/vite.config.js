import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Subikshaa_Trust_2005/',
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
