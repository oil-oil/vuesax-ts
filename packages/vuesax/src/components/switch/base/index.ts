import { App, Plugin } from 'vue'

import Switch from './Switch'

Switch.install = (app: App) => {
  app.component(Switch.name, Switch)
  return app
}

export default Switch as typeof Switch & Plugin
