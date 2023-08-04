import { App, Plugin } from 'vue'

import Sidebar from './Sidebar.tsx'
import './style.scss'

Sidebar.install = (app: App) => {
  app.component(Sidebar.name, Sidebar)
  return app
}

export default Sidebar as typeof Sidebar & Plugin
