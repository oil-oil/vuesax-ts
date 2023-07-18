import { App, Plugin } from "vue";

import Radio from "./Radio";

Radio.install = (app: App) => {
  app.component(Radio.name, Radio);
  return app;
};

export default Radio as typeof Radio & Plugin;
