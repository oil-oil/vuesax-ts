import { App as VueApp, createApp } from "vue";

import App from "./App";
import * as vsComponents from "./components/index";
import {
  defineVuesaxOptions,
  VuesaxOptions,
} from "./utils/defineVuesaxOptions";
import "./styles/vuesax.scss";
import "boxicons/css/boxicons.min.css";

createApp(App).mount("#app");
const install = (app: VueApp, options?: VuesaxOptions) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    app.use(vsComponent);
  });

  if (options) {
    defineVuesaxOptions(options);
  }
};

export default install;
