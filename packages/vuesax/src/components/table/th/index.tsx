import { App, Plugin } from "vue";

import Th from "./TableTh.tsx";

Th.install = (app: App) => {
  app.component(Th.name, Th);
  return app;
};

export default Th as typeof Th & Plugin;
