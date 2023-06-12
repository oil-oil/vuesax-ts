import { App, Plugin } from "vue";

import Tooltip from "./Tooltip.tsx";
import "./style.scss";

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip);
  return app;
};

export default Tooltip as typeof Tooltip & Plugin;
