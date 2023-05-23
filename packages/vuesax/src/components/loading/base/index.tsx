import { App, Plugin } from "vue";

import Loading from "./Loading.tsx";

Loading.install = (app: App) => {
  app.component(Loading.name, Loading);
  return app;
};

export default Loading as typeof Loading & Plugin;
