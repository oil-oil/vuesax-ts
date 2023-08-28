import { App as VueApp } from 'vue'

import './styles/vuesax.scss'
import * as components from './components'
import defineVuesaxOptions, { VuesaxOptions } from './utils/defineVuesaxOptions'

export const install = (app: VueApp, options?: VuesaxOptions) => {
  // Components
  Object.values(components).forEach((component) => {
    app.use(component)
  })

  defineVuesaxOptions(app, options)
}
export * from './components'
export * from './components/hooks'
export * from './components/styles'

export default { install }
