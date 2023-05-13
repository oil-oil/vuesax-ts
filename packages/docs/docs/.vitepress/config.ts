import { defineConfig } from 'vitepress'
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue.Ts Framework Components",
  titleTemplate: ':title - VuesaxTs',
  lang: 'en-US',
  description: "We love what we do. Let us help you do what You love.",
  lastUpdated: true,
  appearance: true,
  cleanUrls: true,
  srcDir: "./.vitepress/docs",
  themeConfig: {
    svgNav: true,
    mobileActive: false,
    nav: [
      {
        text: 'Home', link: '/'
      }
    ],
    sidebar: [
      {
        text: 'com', link: '/com'
      }
    ]
  },
  vite: {
    plugins: [vueJsx()],
  }
})
