import "./style.sass";
import { App } from "vue";

import Button from "./Button.tsx";

Button.install = (app: App) => {
  app.component(Button.name, Button);
  return app;
};

export default Button;
