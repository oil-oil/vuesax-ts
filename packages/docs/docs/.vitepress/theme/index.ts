// https://vitepress.dev/guide/custom-theme
import { Theme } from "vitepress";
import Vuesax from "vuesax-ts";

import "vuesax-ts/dist/es/style.css";
import Card from "./global-components/Card.tsx";
import DocsWarn from "./global-components/DocsWarn.tsx";
import Layout from "./Layout.tsx";

import "./style.scss";

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    // ...
    app.use(Vuesax);
    app.component("Card", Card).component("docs-warn", DocsWarn);
  },
};

export default theme;
