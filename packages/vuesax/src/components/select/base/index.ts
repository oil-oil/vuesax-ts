import { App } from "vue";

import Select from "./Select";

Select.install = (app: App) => {
  app.component(Select.name, Select);
  return app;
};

export default Select;
