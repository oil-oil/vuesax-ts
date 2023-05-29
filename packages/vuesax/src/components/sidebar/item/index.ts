import { App, Plugin } from "vue";

import SideBarItem from "./SideBarItem.tsx";

SideBarItem.install = (app: App) => {
  app.component(SideBarItem.name, SideBarItem);
  return app;
};

export default SideBarItem as typeof SideBarItem & Plugin;
