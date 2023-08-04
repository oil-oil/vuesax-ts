import { App as VueApp } from "vue";

import * as vsComponents from "./components";
import {
  defineVuesaxOptions,
  VuesaxOptions,
} from "./utils/defineVuesaxOptions";
import "./styles/vuesax.scss";
import "boxicons/css/boxicons.min.css";
// import App from "./App.vue";

// createApp(App).mount("#app");
const install = (app: VueApp, options?: VuesaxOptions) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    app.use(vsComponent);
  });

  if (options) {
    defineVuesaxOptions(options);
  }
};
export * from "./components";
export default install;
