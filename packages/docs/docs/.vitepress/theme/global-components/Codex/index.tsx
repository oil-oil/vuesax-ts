import { Highlighter } from 'shiki'
import { useData } from 'vitepress'
import {
  defineComponent,
  Transition,
  ref,
  onMounted,
  inject,
  Ref,
  reactive,
  watch,
  nextTick,
  computed
} from 'vue'
import './Codex.scss'
import { VsNavbar, VsNavbarItem } from 'vuesax-ts'

function splitVueTemplate(templateString: string) {
  const templateStart = '<template>'
  const templateEnd = '</template>'
  const scriptStart = '<script'
  const scriptEnd = '</script>'
  const styleStart = '<style'
  const styleEnd = '</style>'

  const templateIndex = templateString.indexOf(templateStart)
  const templateEndIndex =
    templateString.lastIndexOf(templateEnd) + templateEnd.length
  const scriptIndex = templateString.indexOf(scriptStart)
  const scriptEndIndex =
    templateString.lastIndexOf(scriptEnd) + scriptEnd.length
  const styleIndex = templateString.indexOf(styleStart)
  const styleEndIndex = templateString.lastIndexOf(styleEnd) + styleEnd.length

  let template = ''
  let script = ''
  let style = ''

  if (templateIndex !== -1 && templateEndIndex !== -1) {
    template = templateString.substring(templateIndex, templateEndIndex)
  }

  if (scriptIndex !== -1 && scriptEndIndex !== -1) {
    script = templateString.substring(scriptIndex, scriptEndIndex)
  }

  if (styleIndex !== -1 && styleEndIndex !== -1) {
    style = templateString.substring(styleIndex, styleEndIndex)
  }

  return {
    template,
    script,
    style
  }
}

const file: Record<string, string> = (import.meta as any).glob(
  '../template/**/*.vue',
  { eager: true, as: 'raw' }
)

const Codex = defineComponent({
  name: 'Codex',
  props: {
    subtitle: {
      type: String,
      default: 'Default'
    }
  },
  slots: ['default', 'template', 'script', 'style'],
  setup(props) {
    const { page, lang } = useData()
    const active = ref(false)
    const check = ref(false)
    const codexRef = ref<HTMLElement>()
    const ulRef = ref<HTMLElement>()
    const highlighter = inject<Ref<Highlighter>>('highlighter')
    const codeFlag = ref(false)

    const navbarData = reactive<{
      current: string
      menu: { title: string; template: string; html: string }[]
    }>({ current: '', menu: [] })

    watch(
      () => navbarData.current,
      () => {
        codeFlag.value = false
        nextTick(() => {
          codeFlag.value = true
        })
      }
    )

    const renderTemplate = async () => {
      const title =
        lang.value === 'zh' ? page.value.title.split(' ')[0] : page.value.title
      const fullTemplate = file?.[`../template/${title}/${props.subtitle}.vue`]

      if (fullTemplate) {
        const splitTemplate = splitVueTemplate(fullTemplate)
        navbarData.menu = [
          ...Object.entries(splitTemplate)
            .filter(([, template]) => !!template)
            .map(([navbarTitle, template]) => ({
              title: navbarTitle,
              template,
              html: highlighter?.value?.codeToHtml(template, {
                lang: 'vue'
              }) as string
            })),
          {
            title: 'all',
            template: fullTemplate,
            html: highlighter?.value?.codeToHtml(fullTemplate, {
              lang: 'vue'
            }) as string
          }
        ]
        navbarData.current = navbarData.menu[0].title
      }
    }

    const currentNavbar = computed(
      () =>
        navbarData.menu.filter(({ title }) => title === navbarData.current)[0]
    )

    onMounted(() => {
      renderTemplate()
    })

    const toggleCode = () => {
      active.value = !active.value
    }

    const copy = () => {
      navigator.clipboard.writeText(currentNavbar.value.template)
      check.value = true
      setTimeout(() => {
        check.value = false
      }, 3000)
    }

    const beforeEnter = (element: Element) => {
      const el = element as HTMLElement
      el.style.height = '0'
    }

    const enter = (element: Element, done: () => void) => {
      const el = element as HTMLElement
      const h = el.scrollHeight
      el.style.height = `${h - 1}px`
      codexRef.value!.style.height = `${h + 5}px`
      done()
    }

    const leave = (element: Element) => {
      const el = element as HTMLElement
      el.style.height = '0px'
    }

    const beforeEnterCodes = (element: Element) => {
      const el = element as HTMLElement
      el.style.height = '0'
      el.style.opacity = '0'
      el.style.position = 'absolute'
    }

    const enterCodes = (element: Element, done: () => void) => {
      const el = element as HTMLElement
      const h = el.scrollHeight
      el.style.position = 'relative'
      el.style.height = `${h - 1}px`
      codexRef.value!.style.height = `${h + 40}px`
      el.style.opacity = '1'
      done()
    }

    const leaveCodes = (element: Element) => {
      const el = element as HTMLElement
      el.style.height = '0px'
      el.style.opacity = '0'
      el.style.position = 'absolute'
    }

    return () => (
      <div class="code">
        <div class={['noti-code', { copied: check.value }]}>
          <i class="bx bx-check"></i> Code copied
        </div>
        <header class="header-codex">
          <ul>
            <li
              title="Copy code"
              class={{ copied: check.value }}
              onClick={() => {
                copy()
              }}
            >
              {(!check.value && <i class="bx bx-copy"></i>) || (
                <i class="bx bx-check"></i>
              )}
            </li>

            <li
              title={active.value ? 'hide code' : 'View code'}
              class={['not-a con-link', { active: active.value }]}
              onClick={toggleCode}
            >
              {(!active.value && <i class="bx bx-code-alt"></i>) || (
                <i class="bx bx-hide"></i>
              )}
            </li>
          </ul>
        </header>

        <Transition onBeforeEnter={beforeEnter} onEnter={enter} onLeave={leave}>
          {active.value && (
            <div ref={codexRef} class="con-code">
              <div ref={ulRef} class="ul-codes">
                <VsNavbar
                  activeColor="white"
                  color="white"
                  background="#363449"
                  square
                  v-model={navbarData.current}
                >
                  {navbarData.menu.map(({ title }) => (
                    <VsNavbarItem
                      id={title}
                      style={{ textTransform: 'capitalize' }}
                    >
                      {navbarData.menu.length === 1 ? 'all' : title}
                    </VsNavbarItem>
                  ))}
                </VsNavbar>
              </div>
              <div class="con-codes">
                <Transition
                  onBeforeEnter={beforeEnterCodes}
                  onEnter={enterCodes}
                  onLeave={leaveCodes}
                >
                  {codeFlag.value && (
                    <div class="slots">
                      <div
                        class="language-html"
                        v-html={currentNavbar.value.html}
                      />
                      <footer
                        onClick={toggleCode}
                        title={active.value ? 'Hide code' : 'View code'}
                        class="footer-code"
                      >
                        <i class="bx bx-hide" />
                      </footer>
                    </div>
                  )}
                </Transition>
              </div>
            </div>
          )}
        </Transition>
      </div>
    )
  }
})
export default Codex
