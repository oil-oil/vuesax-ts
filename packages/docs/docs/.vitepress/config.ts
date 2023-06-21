import path from "path";

import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfigWithTheme } from "vitepress";

import zhHome from "./locales/zh/home";
import zhNavbar from "./locales/zh/navbar";
import zhSidebar from "./locales/zh/sidebar";

export default defineConfigWithTheme({
  title: "Vue.Ts Framework Components",
  titleTemplate: ":title - VuesaxTs",
  lang: "en",
  description: "We love what we do. Let us help you do what You love.",
  lastUpdated: true,
  appearance: true,
  cleanUrls: true,
  srcDir: "./.vitepress/docs",
  scrollOffset: 135,
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "",
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh",
      title: "中文vuesax",
      titleTemplate: ":title - 唐家VuesaxTs",
      themeConfig: {
        nav: zhNavbar,
        sidebar: zhSidebar,
        home: zhHome,
      },
    },
  },
  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Getting Started", link: "/" },
          { text: "Vuesax + Nuxtjs", link: "/" },
        ],
      },
      {
        text: "Documentation",
        link: "/documentation/components/button",
        parts: [
          {
            title: "Theme",
            part: [{ text: "color", link: "/documentation/theme/color" }],
          },
          {
            title: "Components",
            part: [
              { text: "Button", link: "/documentation/components/button" },
              { text: "Alert", link: "/documentation/components/alert" },
            ],
          },
        ],
      },
      {
        text: "License",
        link: "/license",
      },
      {
        text: "Ecosystem",
        link: "/",
        items: [
          { text: "GitHub", link: "https://www.github.com" },
          { text: "Discord", link: "/itemB" },
        ],
      },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Introduction", link: "/guide/introduction" }],
      },
      {
        text: "Theme",
        items: [{ text: "Colors", link: "/theme/colors" }],
      },
      {
        text: "Components",
        items: [
          { text: "Button", link: "/documentation/components/button" },
          { text: "Alert", link: "/documentation/components/alert" },
        ],
      },
    ],
    home: {
      avatarPart: {
        title: "Segoe cute",
        text: "DO you want to participate in our initiative?We are open.",
        button: { red: "Open", white: "Cancel" },
      },
      checkPart: {
        input: "locale",
        checkList: ["China", "Japan", "Italy", "Germany"],
        button: "Lets Go!",
      },
      search: "Search",
      select: "Dropdown",
      card: {
        title: "Vuesax Ts",
        text: "Framework",
      },
      custom: {
        title: "Potted cactus",
        button: "Button",
      },
    },
  },
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../../../vuesax/src"),
      },
    },
  },
});
