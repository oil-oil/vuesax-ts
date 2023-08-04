import { App, Plugin } from 'vue'

import Table from './Table.tsx'

Table.install = (app: App) => {
  app.component(Table.name, Table)
  return app
}

export default Table as typeof Table & Plugin
