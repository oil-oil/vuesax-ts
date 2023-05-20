import { App, Plugin } from "vue";

import Sidebar from "./SideBar.tsx";

Sidebar.install = (app: App) => {
  app.component(Sidebar.name, Sidebar);
  return app;
};

export default Sidebar as typeof Sidebar & Plugin;
