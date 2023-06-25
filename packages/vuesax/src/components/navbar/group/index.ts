import { App, Plugin } from "vue";

import NavbarGroup from "./NavbarGroup";

NavbarGroup.install = (app: App) => {
  app.component(NavbarGroup.name, NavbarGroup);
  return app;
};

export default NavbarGroup as typeof NavbarGroup & Plugin;
