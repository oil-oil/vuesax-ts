// https://vitepress.dev/guide/custom-theme
import { Theme } from 'vitepress'

import 'vuesax-ts/dist/es/style.css'
import 'boxicons/css/boxicons.min.css'
import Card from './global-components/Card.tsx'
import Layout from './Layout.tsx'

import './style.scss'

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    // ...
    // app.use(Vuesax)
    app.component('Card', Card)
  }
}

export default theme
