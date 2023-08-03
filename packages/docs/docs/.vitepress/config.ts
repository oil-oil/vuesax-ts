import path from "path";

import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfigWithTheme } from "vitepress";

import zhHome from "./locales/zh/home";
import zhNavbar from "./locales/zh/navbar";
import zhSidebar from "./locales/zh/sidebar";

export default defineConfigWithTheme({
  head:[['link',{rel:'icon',href:'/vuesax-only.png'}]],
  title: "Vue.Ts Framework Components",
  titleTemplate: "Vue.Ts Framework Components - Vuesax",
  lang: "en",
  description: "We love what we do. Let us help you do what You love.",
  lastUpdated: true,
  appearance: true,
  cleanUrls: true,
  srcDir: "./.vitepress/docs",
  outDir: "./dist",
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
      titleTemplate: ":title - Vuesax-ts",
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
              { text: "Loading", link: "/documentation/components/loading" },
              { text: "Input", link: "/documentation/components/input" },
              { text: "Checkbox", link: "/documentation/components/checkbox" },
              { text: "Switch", link: "/documentation/components/switch" },
              { text: "Select", link: "/documentation/components/select" },
              { text: "Avatar", link: "/documentation/components/avatar" },
              { text: "Notification", link: "/documentation/components/notification" },
              { text: "Radio", link: "/documentation/components/radio" },
              { text: "Tooltip", link: "/documentation/components/tooltip" },
              { text: "Dialog", link: "/documentation/components/dialog" },
              { text: "Pagination", link: "/documentation/components/pagination" },
              { text: "Table", link: "/documentation/components/table" },
              { text: "Navbar", link: "/documentation/components/navbar" },
              { text: "Sidebar", link: "/documentation/components/sidebar" },
              { text: "Card", link: "/documentation/components/card" },
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
          { text: "Loading", link: "/documentation/components/loading" },
          { text: "Input", link: "/documentation/components/input" },
          { text: "Checkbox", link: "/documentation/components/checkbox" },
          { text: "Switch", link: "/documentation/components/switch" },
          { text: "Select", link: "/documentation/components/select" },
          { text: "Avatar", link: "/documentation/components/avatar" },
          { text: "Notification", link: "/documentation/components/notification" },
          { text: "Radio", link: "/documentation/components/radio" },
          { text: "Tooltip", link: "/documentation/components/tooltip" },
          { text: "Dialog", link: "/documentation/components/dialog" },
          { text: "Pagination", link: "/documentation/components/pagination" },
          { text: "Table", link: "/documentation/components/table" },
          { text: "Navbar", link: "/documentation/components/navbar" },
          { text: "Sidebar", link: "/documentation/components/sidebar" },
          { text: "Card", link: "/documentation/components/card" },
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
