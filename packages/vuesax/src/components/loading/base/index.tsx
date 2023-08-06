import { App, Plugin } from 'vue'

import Loading from './Loading.tsx'
import type { LoadingProps } from './Loading.tsx'

Loading.install = (app: App) => {
  app.component(Loading.name, Loading)
  return app
}

export type VsLoadingProps = LoadingProps
export default Loading as typeof Loading & Plugin
