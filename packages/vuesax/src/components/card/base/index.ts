import { App, Plugin } from 'vue'

import Card from './Card'

Card.install = (app: App) => {
  app.component(Card.name, Card)
  return app
}

export default Card as typeof Card & Plugin
