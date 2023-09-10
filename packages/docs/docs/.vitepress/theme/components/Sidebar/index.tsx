/* eslint-disable no-restricted-syntax */
import { useData, useRouter } from 'vitepress'
import { defineComponent, computed } from 'vue'
import { VsSidebar, VsSidebarItem, VsSidebarGroup } from 'vuesax-ts'
import './style/style.scss'

const SideBar = defineComponent({
  name: 'SideBar',
  setup() {
    const router = useRouter()
    const { theme, isDark } = useData<{
      sidebar: { text: string; items: { text: string; link: string }[] }[]
    }>()
    const sideBarValue = computed(() => {
      const { sidebar } = theme.value
      for (const group of sidebar) {
        for (const item of group.items) {
          if (item.link === router.route.path) {
            return item.text
          }
        }
      }
      return ''
    })
    const sideBarContent = () => (
      <VsSidebar
        color={isDark.value ? 'white' : 'text'}
        modelValue={sideBarValue.value}
        style={{
          top: '70px',
          backgroundColor: 'var(--vs-theme-layout)'
        }}
      >
        {theme.value.sidebar.map((item) => (
          <VsSidebarGroup
            v-slots={{
              title: () => <VsSidebarItem arrow>{item.text}</VsSidebarItem>
            }}
          >
            {item.items.map((link) => (
              <VsSidebarItem
                onClick={() => {
                  router.go(link.link)
                }}
                id={link.text}
                style={{
                  backgroundColor: 'var(--vs-theme-layout)'
                }}
              >
                {link.text}
              </VsSidebarItem>
            ))}
          </VsSidebarGroup>
        ))}
      </VsSidebar>
    )
    return () => sideBarContent()
  }
})
export default SideBar
