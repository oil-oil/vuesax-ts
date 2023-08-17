import { Highlighter } from 'shiki'
import { useData } from 'vitepress'
import { defineComponent, Transition, ref, onMounted, inject, Ref } from 'vue'
import './Codex.scss'

const Codex = defineComponent({
  name: 'Codex',
  props: {
    codesandbox: {
      type: String
    },
    codepen: {
      type: String
    },
    subtitle: {
      type: String,
      default: 'Default'
    }
  },
  slots: ['default', 'template', 'script', 'style'],
  setup(props) {
    const { page } = useData()
    const active = ref(false)
    const check = ref(false)

    const codexRef = ref<HTMLElement>()
    const ulRef = ref<HTMLElement>()

    const template = ref<string>()
    const title = ref<string>()
    const highlighter = inject<Ref<Highlighter>>('highlighter')
    let file: any
    const renderTemplate = async () => {
      template.value = highlighter?.value.codeToHtml(
        file[`./template/${page.value.title}/${props.subtitle}.vue`],
        {
          lang: 'vue'
        }
      )
    }

    onMounted(() => {
      title.value = document
        .getElementsByTagName('h1')
        .item(0)
        ?.innerText.trim()

      file = (import.meta as any).glob(
        '../global-components/template/**/*.vue',
        {
          as: 'raw',
          eager: true
        }
      )

      renderTemplate()
    })

    const toggleCode = () => {
      active.value = !active.value
    }

    const openCodesandbox = (url: string) => {
      window.open(url)
    }

    const copy = () => {
      navigator.clipboard.writeText(
        file[`./template/${page.value.title}/${props.subtitle}.vue`]
      )
      check.value = true
      setTimeout(() => {
        check.value = false
      }, 3000)
    }

    // }
    // animation
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
    const beforeEntercodes = (element: Element) => {
      const el = element as HTMLElement
      el.style.height = '0'
      el.style.opacity = '0'
      el.style.position = 'absolute'
    }
    const entercodes = (element: Element, done: () => void) => {
      const el = element as HTMLElement
      const h = el.scrollHeight
      el.style.position = 'relative'
      el.style.height = `${h - 1}px`
      codexRef.value!.style.height = `${h + 40}px`
      el.style.opacity = '1'
      done()
    }
    const leavecodes = (element: Element) => {
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
            {props.codepen && (
              <li title="Codepen" class="con-link">
                <i class="bx bxl-codepen"></i>
              </li>
            )}

            {props.codesandbox && (
              <li
                title="Codesandbox"
                onClick={() => {
                  openCodesandbox(props.codesandbox!)
                }}
              >
                <svg
                  class="icon"
                  style=""
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9197"
                  width="15px"
                  height="15px"
                >
                  <path
                    d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"
                    p-id="9198"
                  ></path>
                </svg>
              </li>
            )}

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
            {/* 
        <li class="con-api-link">
          <a href="#vs-api">
            <!API
            <i class='bx bx-list-ul' ></i>
          </a>
        </li> */}

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
              <div ref={ulRef} class="ul-codes"></div>
              <div class="con-codes">
                <Transition
                  onBeforeEnter={beforeEntercodes}
                  onEnter={entercodes}
                  onLeave={leavecodes}
                >
                  <div key="3" class="slot-all slots">
                    <div class="language-html" v-html={template.value}></div>
                    <footer
                      onClick={toggleCode}
                      title={active.value ? 'Hide code' : 'View code'}
                      class="footer-code"
                    >
                      <i class="bx bx-hide"></i>
                    </footer>
                  </div>
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
