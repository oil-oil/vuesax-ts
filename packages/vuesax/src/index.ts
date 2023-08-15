import { App as VueApp } from 'vue'

import * as vsComponents from './components'
import './styles/vuesax.scss'
import defineVuesaxOptions, { VuesaxOptions } from './utils/defineVuesaxOptions'

const install = (app: VueApp, options?: VuesaxOptions) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    app.use(vsComponent)
  })

  defineVuesaxOptions(app, options)
}
export * from './components'

export { default as color } from './styles/colors'

export default install
