import { App } from "vue";

import Checkbox from "./Checkbox";

Checkbox.install = (app: App) => {
  app.component(Checkbox.name, Checkbox);
  return app;
};

export default Checkbox;
