import "./style.scss";
import { App, Plugin } from "vue";

import Alert from "./Alert.tsx";

Alert.install = (app: App) => {
  app.component(Alert.name, Alert);
  return app;
};

export default Alert as typeof Alert & Plugin;
