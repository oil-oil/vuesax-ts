import { App, Plugin } from 'vue'

import Avatar from './Avatar'

Avatar.install = (app: App) => {
  app.component(Avatar.name, Avatar)
  return app
}

export default Avatar as typeof Avatar & Plugin
