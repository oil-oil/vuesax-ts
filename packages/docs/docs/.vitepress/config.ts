import path from 'path'

import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfigWithTheme } from 'vitepress'

import enCatalogs from './locales/en/catalogs'
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
    home: {
      avatarPart: {
        title: 'Segoe cute',
        text: 'DO you want to participate in our initiative?We are open.',
        button: { red: 'Open', white: 'Cancel' }
      },
      checkPart: {
        input: 'locale',
        checkList: ['China', 'Japan', 'Italy', 'Germany'],
        button: 'Lets Go!'
      },
      search: 'Search',
      select: 'Dropdown',
      card: {
        title: 'Vuesax Ts',
        text: 'Framework'
      },
      custom: {
        title: 'Potted cactus',
        button: 'Button'
      }
    }
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
