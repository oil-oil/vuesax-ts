import { useData, useRouter } from 'vitepress'
import { defineComponent, inject, onMounted, Ref } from 'vue'
import { VsSwitch } from 'vuesax-ts'

const ConfigBtn = defineComponent({
  name: 'ConfigBtn',
  setup() {
    const { site, isDark } = useData()
    const router = useRouter()

    const getLocalesRoute = (langLink: string) => {
      if (site.value.localeIndex === 'root') {
        return langLink + router.route.path
      }
      if (langLink === '') {
        return router.route.path.split(site.value.localeIndex!)[1]
      }
      return langLink + router.route.path.split(langLink)[1]
    }

    const sidebarController = inject<{
      toggleSidebar: () => void
      isSidebarOpen: Ref<boolean>
    }>('sidebarController')

    const initTheme = () => {
      if (
        window.localStorage.getItem('vitepress-theme-appearance') === 'dark'
      ) {
        isDark.value = true
      } else {
        isDark.value = false
      }
    }
    onMounted(() => {
      initTheme()
    })

    const changeTheme = (e: MouseEvent) => {
      if (isDark.value) {
        window.localStorage.setItem('vitepress-theme-appearance', 'auto')
        document.documentElement.classList.remove('dark')
      } else {
        window.localStorage.setItem('vitepress-theme-appearance', 'dark')
        document.documentElement.classList.add('dark')
      }
      e.stopPropagation()
    }
    return () => (
      <>
        <button class="config-btn">
          <i class="bx bx-cog"></i>
          <svg
            class="effect1config"
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
            viewBox="0 0 160 160"
          >
            <path
              id="Trazado_200"
              data-name="Trazado 200"
              d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
              transform="translate(0 10)"
            />
          </svg>
          <div class="options">
            <svg
              class="effect1config"
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              viewBox="0 0 160 160"
            >
              <path
                id="Trazado_200"
                data-name="Trazado 200"
                d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
                transform="translate(0 10)"
              />
            </svg>
            <div class="option">
              <i title="reload config" class="bx bx-rotate-left"></i>
            </div>

            <div class="option">
              <i class="bx bx-list-minus" title="Close Side"></i>
              {/* <i v-else class="bx bx-list-plus"></i> */}
            </div>
            <div class="option">
              <i class="bx bx-code-block"></i>
            </div>
            <div class="option">
              <i class="bx bx-paint-roll"></i>
              {/* <input @change="ChangeColorLayout($event.target.value)" type="color" value="#2564ff"> */}
            </div>
            <div class="option">
              <i class="bx bxs-color-fill"></i>
              {/* <input @change="ChangeColor" type="color" value="#2564ff"> */}
            </div>
            <svg
              class="effect1config invert"
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              viewBox="0 0 160 160"
            >
              <path
                id="Trazado_200"
                data-name="Trazado 200"
                d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
                transform="translate(0 10)"
              />
            </svg>
          </div>
        </button>

        <button
          onClick={sidebarController?.toggleSidebar}
          class={{ active: !sidebarController?.isSidebarOpen.value }}
        >
          {sidebarController?.isSidebarOpen.value ? (
            <i
              title="Hidden Sidebar"
              class="bx bx-left-indent hidden-sidebar-hidden"
            ></i>
          ) : (
            <i
              title="Open Sidebar"
              class="bx bx-right-indent visible-sidebar-hidden"
            ></i>
          )}
        </button>

        <button class="btn-lang theme-translate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
          </svg>

          <div
            class="lang"
            style={{
              top: `${(Object.entries(site.value.locales).length - 2) * -40}px`
            }}
          >
            {Object.entries(site.value.locales).map(
              (item) =>
                !(site.value.localeIndex === item[0]) && (
                  <div key={item[0]} class="lang-name">
                    <a href={getLocalesRoute(item[1].link!)}>{item[1].label}</a>
                  </div>
                )
            )}
          </div>
        </button>

        <button
          class="switch-theme"
          title={`Theme ${isDark.value ? 'Light' : 'Deep Dark'}`}
        >
          <VsSwitch
            v-model={isDark.value}
            color="primary"
            onClick={changeTheme}
            v-slots={{
              off: () => <i class="bx bxs-moon"></i>,
              on: () => <i class="bx bxs-sun"></i>
            }}
          ></VsSwitch>
        </button>
      </>
    )
  }
})
export default ConfigBtn
