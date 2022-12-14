import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
    resolve: {
        alias: {
          '@lib': `${path.resolve('src/lib')}`,
          '@routes': `${path.resolve('src/routes')}`,
          '@stores': `${path.resolve('src/stores')}`,
          '@assets': `${path.resolve('src/assets')}`,
        },
    },
})
