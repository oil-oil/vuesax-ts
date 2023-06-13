// https://vitepress.dev/guide/custom-theme
import { Theme } from "vitepress";
import Vuesax from "vuesax";

import Card from "./global-components/Card.tsx";
import DocsWarn from "./global-components/docsWarn.tsx";
import Layout from "./Layout.tsx";

import "./style.css";

import "vuesax/src/styles/vuesax.scss";

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    // ...
    app.use(Vuesax);
    app.component("Card", Card).component("docs-warn", DocsWarn);
  },
};

export default theme;
