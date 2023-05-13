// https://vitepress.dev/guide/custom-theme
import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import card from './global-components/card.vue'
import DocsWarn from './global-components/docsWarn.vue'
import './style.css'
import Vuesax from 'vuesax'
import "vuesax/src/styles/vuesax.scss"

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    //...
    app.use(Vuesax)
    app.component('card', card).component('docs-warn', DocsWarn)

  }
}

export default theme