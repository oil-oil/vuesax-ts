import { App, Plugin } from 'vue'

import CardGroup from './CardGroup'

CardGroup.install = (app: App) => {
  app.component(CardGroup.name, CardGroup)
  return app
}

export default CardGroup as typeof CardGroup & Plugin
