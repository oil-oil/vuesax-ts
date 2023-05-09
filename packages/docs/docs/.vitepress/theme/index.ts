// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.css'
import Vuesax from 'vuesax'
import "vuesax/src/styles/vuesax.scss"
export default {

  Layout,
  enhanceApp({ app, router, siteData }) {
    //...
    app.use(Vuesax)
  }
}

