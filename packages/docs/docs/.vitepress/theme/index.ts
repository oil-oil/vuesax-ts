// https://vitepress.dev/guide/custom-theme
import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import './style.css'
import Vuesax from 'vuesax'
import "vuesax/src/styles/vuesax.scss"

const theme:Theme = {
  Layout,
  enhanceApp({ app }) {
    //...
    app.use(Vuesax)
  }
}

export default theme