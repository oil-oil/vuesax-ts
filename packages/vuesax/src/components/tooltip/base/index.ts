import { App, Plugin } from "vue";

import ToolTip from "./ToolTip.tsx";
import "./style.scss";

ToolTip.install = (app: App) => {
  app.component(ToolTip.name, ToolTip);
  return app;
};

export default ToolTip as typeof ToolTip & Plugin;
