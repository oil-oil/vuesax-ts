import { App, Plugin } from 'vue'

import Td from './TableTd.tsx'

Td.install = (app: App) => {
  app.component(Td.name, Td)
  return app
}

export default Td as typeof Td & Plugin
