import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
