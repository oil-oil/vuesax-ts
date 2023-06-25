import { App, Plugin } from "vue";

import Tr from "./TableTr.tsx";

Tr.install = (app: App) => {
  app.component(Tr.name, Tr);
  return app;
};

export default Tr as typeof Tr & Plugin;
