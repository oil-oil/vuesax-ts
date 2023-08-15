import { Highlighter, getHighlighter } from 'shiki'
import { useData } from 'vitepress'
import { defineComponent, ref, provide, onMounted } from 'vue'
import { useLoading } from 'vuesax-ts'

import Config from './components/Config'
import VSContent from './components/Content'
import NavBar from './components/Navbar'
import SideBar from './components/Sidebar'

const Layout = defineComponent({
  name: 'Layout',
  setup() {
    const { page, frontmatter } = useData()
    const { open, close } = useLoading()
    const isSidebarOpen = ref(true)
    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value
    }

    const highlighter = ref<Highlighter>()

    const initHighlighter = async () => {
      if (!highlighter.value) {
        open()
        highlighter.value = await getHighlighter({
          theme: 'material-theme-palenight',
          langs: ['vue'],
          paths: {
            themes: '/shiki',
            languages: '/shiki/language',
            wasm: '/shiki'
          }
        })
        close()
      }
    }

    provide('sidebarController', { isSidebarOpen, toggleSidebar })
    provide('highlighter', highlighter)

    onMounted(() => {
      initHighlighter()
    })

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
