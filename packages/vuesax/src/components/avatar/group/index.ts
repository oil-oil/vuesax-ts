import { App, Plugin } from 'vue'

import AvatarGroup from './AvatarGroup'

AvatarGroup.install = (app: App) => {
  app.component(AvatarGroup.name, AvatarGroup)
  return app
}

export default AvatarGroup as typeof AvatarGroup & Plugin
