import { App, Plugin } from 'vue'

import Notification from './Notification.tsx'
import type { NotificationProps } from './Notification.tsx'

Notification.install = (app: App) => {
  app.component(Notification.name, Notification)
  return app
}

export type VsNotificationProps = NotificationProps
export default Notification as typeof Notification & Plugin
