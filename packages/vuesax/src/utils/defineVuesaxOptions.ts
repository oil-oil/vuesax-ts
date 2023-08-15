import { App as VueApp } from 'vue'

import colors from '@/styles/colors'

export type VuesaxOptions = {
  colors?: Partial<typeof colors>
}

export const vuesaxOptionsKey = 'vuesaxOption' as const

const defineVuesaxOptions = (app: VueApp, options?: VuesaxOptions) => {
  if (options) {
    app.provide(vuesaxOptionsKey, options)
  }
}

export default defineVuesaxOptions
