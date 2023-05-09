import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuesax For Ts",
  titleTemplate: ':title - Vuesax',
  lang: 'en-US',
  description: "Vue.js Framework Components - Vuesax",
  lastUpdated: true,
  appearance: true,
  srcDir: "./.vitepress/docs",
  themeConfig: {
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
  }
})
