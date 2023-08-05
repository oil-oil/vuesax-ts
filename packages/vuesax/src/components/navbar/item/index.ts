import { App, Plugin } from 'vue'

import NavbarItem from './Navbaritem'

NavbarItem.install = (app: App) => {
  app.component(NavbarItem.name, NavbarItem)
  return app
}

export default NavbarItem as typeof NavbarItem & Plugin
