import { useData } from 'vitepress'
import { defineComponent } from 'vue'

import DocsPage from './DocPage/DocsPage.tsx'
import Home from './Home/Home.tsx'
import NotFound from '../NotFound.tsx'
import './style.scss'

const index = defineComponent({
  name: 'HomeIndex',
  setup() {
    const { page, frontmatter } = useData()
    const Content = () => {
      if (page.value.isNotFound) {
        return <NotFound class="not-found" />
      }
      if (frontmatter.value.layout) {
        return <Home />
      }
      return <DocsPage class="VSDocsPage" />
    }
    return () => (
      <div
        class={[
          'VSContent',
          {
            'is-docs':
              !(frontmatter.value.layout === 'home') && !page.value.isNotFound
          }
        ]}
        id="VSContent"
      >
        {Content()}
      </div>
    )
  }
})
export default index
