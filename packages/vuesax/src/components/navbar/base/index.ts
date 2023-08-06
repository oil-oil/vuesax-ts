import { App, Plugin } from 'vue'

import Navbar from './Navbar'

Navbar.install = (app: App) => {
  app.component(Navbar.name, Navbar)
  return app
}

export default Navbar as typeof Navbar & Plugin
