import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  }
})
