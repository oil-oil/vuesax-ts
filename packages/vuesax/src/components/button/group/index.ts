import { App, Plugin } from 'vue'

import ButtonGroup from './ButtonGroup.tsx'

ButtonGroup.install = (app: App) => {
  app.component(ButtonGroup.name, ButtonGroup)
  return app
}

export default ButtonGroup as typeof ButtonGroup & Plugin
