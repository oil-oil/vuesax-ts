import { App as VueApp } from "vue";

import * as vsComponents from "./components/index";
import { defineVuesaxOptions, VuesaxOptions } from "./util/defineVuesaxOptions";
import "./styles/vuesax.scss";

const install = (app: VueApp, options?: VuesaxOptions) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    app.use(vsComponent);
  });

  if (options) {
    defineVuesaxOptions(options);
  }
};

// export default install
export default install;
