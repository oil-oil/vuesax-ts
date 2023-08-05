import { App, Plugin } from 'vue'

import Pagination from './Pagination.tsx'

Pagination.install = (app: App) => {
  app.component(Pagination.name, Pagination)
  return app
}

export default Pagination as typeof Pagination & Plugin
