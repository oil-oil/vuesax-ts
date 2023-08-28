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
      entry: 'src/index.ts'
    },
    outDir: 'es',
    rollupOptions: {
      external: ['vue'],
      input: {
        index: 'src/index.ts',
      },
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: 'dist/es',
          preserveModulesRoot: 'src',
          exports:"named"
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: 'dist/lib',
          preserveModulesRoot: 'src',
          exports:"named"
        }
      ]
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outputDir: ['dist/lib', 'dist/es'],
      tsConfigFilePath: './tsconfig.json',
      entryRoot: 'src',
      copyDtsFiles: true
    })
  ]
})
