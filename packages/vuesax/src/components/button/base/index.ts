import './style.sass'
import '../../../styles/vuesax.sass'
import { App } from 'vue';
import Button from './Button'


Button.install = function (app: App) {
  app.component(Button.name, Button);
  return app;
};

export default Button
