import { App, Plugin } from "vue";

import SidebarGroup from "./SidebarGroup.tsx";
import "./style.scss";

SidebarGroup.install = (app: App) => {
  app.component(SidebarGroup.name, SidebarGroup);
  return app;
};

export default SidebarGroup as typeof SidebarGroup & Plugin;
