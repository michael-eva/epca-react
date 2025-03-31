import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/video-proxy': {
        target: 'https://d19kz0rwf2xrwq.cloudfront.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/video-proxy/, ''),
        headers: {
          'Origin': 'https://www.epca.net.au'
        }
      }
    }
  }
})
