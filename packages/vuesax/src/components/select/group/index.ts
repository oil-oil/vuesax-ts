import { App, Plugin } from 'vue'

import OptionGroup from './OptionGroup'

OptionGroup.install = (app: App) => {
  app.component(OptionGroup.name, OptionGroup)
  return app
}

export default OptionGroup as typeof OptionGroup & Plugin
