import path from 'path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vuesax-ts',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      input: {
        index: 'src/index.ts'
      }
    }
  },
  plugins: [vue(), vueJsx(), dts({ outputDir: 'dist', copyDtsFiles: true })]
})
