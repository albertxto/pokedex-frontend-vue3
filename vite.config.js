import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nightwatchPlugin({
      componentType: 'vue'
    }),
    vue()
  ],
  resolve: {
    alias: [
      {
        find: '@', replacement: '/src'
      }
    ]
  }
})
