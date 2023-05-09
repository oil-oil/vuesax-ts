// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.css'
import {VsButton} from 'vuesax'

export default {

  Layout,
  enhanceApp({ app, router, siteData }) {
    //...
    app.use(VsButton)
  }
}

