// https://vitepress.dev/guide/custom-theme
import { Theme } from 'vitepress'

import 'vuesax-ts/style.css'
import 'boxicons/css/boxicons.min.css'

import Card from './global-components/Card'
import Layout from './Layout.tsx'

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    // ...
    // app.use(Vuesax)
    app.component('Card', Card)
  }
}

export default theme
