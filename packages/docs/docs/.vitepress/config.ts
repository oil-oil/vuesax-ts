import path from 'path'

import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfigWithTheme } from 'vitepress'

import enCatalogs from './locales/en/catalogs'
import enHome from './locales/en/home'
import zhCatalogs from './locales/zh/catalogs'
import zhHome from './locales/zh/home'

export default defineConfigWithTheme({
  head: [['link', { rel: 'icon', href: '/vuesax-only.png' }]],
  title: 'Vue.Ts Framework Components',
  titleTemplate: 'Vue.Ts Framework Components - Vuesax',
  lang: 'en',
  description: 'We love what we do. Let us help you do what You love.',
  lastUpdated: true,
  appearance: true,
  cleanUrls: true,
  srcDir: './.vitepress/docs',
  outDir: './dist',
  scrollOffset: 135,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: ''
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh',
      title: 'Vue.Ts Framework Components - Vuesax',
      titleTemplate: ':title - Vuesax-ts',
      themeConfig: {
        nav: zhCatalogs,
        sidebar: zhCatalogs,
        home: zhHome
      }
    }
  },
  themeConfig: {
    nav: enCatalogs,
    sidebar: enCatalogs,
    home: enHome
  },
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../../vuesax/src')
      }
    }
  }
})
