import { App, Plugin } from "vue";

import SelectOption from "./SelectOption";

SelectOption.install = (app: App) => {
  app.component(SelectOption.name, SelectOption);
  return app;
};

export default SelectOption as typeof SelectOption & Plugin;
