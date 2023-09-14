import { Highlighter, getHighlighter } from 'shiki'
import { useData } from 'vitepress'
import { defineComponent, ref, provide, onMounted } from 'vue'
import { useLoading } from 'vuesax-ts'
import './style.scss'

import Config from './components/Config'
import VSContent from './components/Content'
import NavBar from './components/Navbar'
import SideBar from './components/Sidebar'

const highlighter = ref<Highlighter | null>(null)

const Layout = defineComponent({
  name: 'Layout',
  setup() {
    const { page, frontmatter } = useData()
    const { open, close } = useLoading({ type: 'points' })
    const isSidebarOpen = ref(true)

    open()
    onMounted(() => {
      getHighlighter({
        theme: 'material-theme-palenight',
        langs: ['vue'],
        paths: {
          themes: '/shiki',
          languages: '/shiki/language',
          wasm: '/shiki'
        }
      }).then((res) => {
        highlighter.value = res
        close()
      })
    })

    provide('highlighter', highlighter)

    return () => (
      <div class="layout">
        {!page.value.isNotFound && <NavBar />}
        {!page.value.isNotFound && !(frontmatter.value.layout === 'home') && (
          <SideBar />
        )}
        {!page.value.isNotFound && (
          <Config
            class={{
              edge: !isSidebarOpen.value,
              'not-docs':
                frontmatter.value.layout === 'home' || page.value.isNotFound
            }}
          ></Config>
        )}
        {highlighter.value && <VSContent />}
      </div>
    )
  }
})
export default Layout
