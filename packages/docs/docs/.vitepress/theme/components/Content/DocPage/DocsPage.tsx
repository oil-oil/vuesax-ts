import { Content, useData } from 'vitepress'
import { defineComponent, ref, onUnmounted } from 'vue'

import RightSidebar from '../../Sidebar/RightSidebar'

import './style.scss'

const DocsPage = defineComponent({
  name: 'DocsPage',
  setup() {
    const { page, frontmatter } = useData()
    const pageHeaderContentTitleRef = ref()
    const pageHeaderTrigger = ref(false)
    const pageHeaderDelta = ref()

    const scrollEvent = () => {
      pageHeaderDelta.value = (window.scrollY * 0.55).toFixed(0)
      const pageHeaderFontDelta = window.scrollY * 0.11
      if (pageHeaderDelta.value >= 85) {
        pageHeaderTrigger.value = true
        pageHeaderContentTitleRef.value.style.fontSize = `20px`
      } else {
        pageHeaderTrigger.value = false
        if (!(pageHeaderFontDelta >= 15)) {
          pageHeaderContentTitleRef.value.style.fontSize = `calc(35px - ${pageHeaderFontDelta}px)`
        }
      }
    }
    window.addEventListener('scroll', scrollEvent)
    onUnmounted(() => {
      window.removeEventListener('scroll', scrollEvent)
    })

    return () => (
      <main class="Page">
        <header class="page-header">
          <div
            class="page-header-back"
            style={{
              position: pageHeaderTrigger.value ? 'fixed' : 'absolute',
              top: pageHeaderTrigger.value ? '61px' : '',
              left: '300px'
            }}
          >
            <a href="/">
              <i class="bx bx-left-arrow-alt"></i>
            </a>
          </div>
          <div
            class="page-header-content"
            style={{
              position: pageHeaderTrigger.value ? 'fixed' : 'absolute',
              transform: pageHeaderTrigger.value
                ? 'translateY(0px)'
                : 'translateY(50%)',
              padding: pageHeaderTrigger.value ? '10px 100%' : '0px',
              top: pageHeaderTrigger.value
                ? '70px'
                : `calc(50% + ${pageHeaderDelta.value}px)`,
              backgroundColor: pageHeaderTrigger.value
                ? 'var(--vs-theme-bg)'
                : '',
              width: pageHeaderTrigger.value ? '720px' : ''
            }}
          >
            <div ref={pageHeaderContentTitleRef} class="h1">
              {page.value.title}
            </div>
            <ul ref="titleul" class="interactive-links">
              <li title="Share">
                <button>
                  <i class="bx bx-share-alt"></i>
                  <ul class="options">
                    <li class="tw">
                      <a
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&text=@vuesax+framework+components+for+vuejs+/+${page.value.title}&hashtags=${page.value.title},framework,components,vuejs,vuesax,lusaxweb,design,developer,frontend`}
                      >
                        <i class="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li class="f">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Flusaxweb.github.io%2Fvuesax%2F"
                      >
                        <i class="bx bxl-facebook-square"></i>
                      </a>
                    </li>
                    <li class="in">
                      <a
                        target="_blank"
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&title=Vuesax+Framework&summary=framework+components+for+vuejs.&source=Vuesax`}
                      >
                        <i class="bx bxl-linkedin-square"></i>
                      </a>
                    </li>
                    <li class="redit">
                      <a
                        target="_blank"
                        href={`https://www.reddit.com/submit?url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&title=Vuesax+Framework+components+for+vuejs`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g>
                            <circle cx="9.67" cy="13" r="1.001" />
                            <path d="M14.09 15.39C13.483 15.826 12.746 16.041 12 16c-.744.034-1.479-.189-2.081-.63-.099-.081-.242-.081-.342 0-.115.095-.132.265-.037.38.71.535 1.582.808 2.471.77.887.038 1.76-.234 2.47-.77v.04c.109-.107.111-.285.006-.396C14.377 15.284 14.2 15.282 14.09 15.39zM14.299 12.04c-.552 0-.999.448-.999 1.001 0 .552.447.999.999.999l-.008.039c.016.002.033 0 .051 0 .551-.021.979-.487.958-1.038C15.3 12.488 14.853 12.04 14.299 12.04z" />
                            <path d="M12,2C6.479,2,2,6.477,2,12c0,5.521,4.479,10,10,10s10-4.479,10-10C22,6.477,17.521,2,12,2z M17.86,13.33 c0.011,0.146,0.011,0.293,0,0.439c0,2.241-2.61,4.062-5.83,4.062c-3.221,0-5.83-1.82-5.83-4.062c-0.012-0.146-0.012-0.293,0-0.439 c-0.145-0.066-0.275-0.155-0.392-0.264c-0.587-0.553-0.614-1.477-0.063-2.063c0.552-0.588,1.477-0.616,2.063-0.063 c1.152-0.781,2.509-1.209,3.899-1.23L12.45,6.24c0-0.001,0-0.002,0-0.004C12.487,6.069,12.652,5.964,12.82,6l2.449,0.49 c0.16-0.275,0.441-0.458,0.758-0.492c0.55-0.059,1.042,0.338,1.102,0.888c0.059,0.549-0.338,1.042-0.889,1.101 c-0.548,0.059-1.041-0.338-1.102-0.887L13,6.65l-0.649,3.12c1.375,0.029,2.712,0.457,3.85,1.23 c0.259-0.248,0.599-0.393,0.957-0.406c0.807-0.029,1.483,0.6,1.512,1.406C18.679,12.562,18.363,13.08,17.86,13.33z" />
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </button>
              </li>
              <li class="divider" />
              <li title="Package NPM">
                <a target="_blank" href="https://www.npmjs.com/package/vuesax">
                  <i class="bx bx-package"></i>
                </a>
              </li>
              <li title="View Code Github">
                <a target="_blank" href="https://github.com/oil-oil/vuesax-ts">
                  <i class="bx bx-code-alt"></i>
                </a>
              </li>
              <li title="Edit Page">
                <a target="_blank" href="">
                  <i class="bx bx-edit"></i>
                </a>
              </li>
              <li title="Report a Bug">
                <a
                  target="_blank"
                  href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[${page.value.title}] - Your Bug Name&amp;body=**Steps to Reproduce**%0A1. Do something%0A2. Do something else.%0A3. Do one last thing.%0A%0A**Expected**%0AThe ${page.value.title} should do this%0A%0A**Result**%0AThe ${page.value.title} does not do this%0A%0A**Testcase**%0A(fork this to get started)%0Ahttp://jsfiddle.net/exmple-bug/1/`}
                >
                  <i class="bx bx-bug"></i>
                </a>
              </li>
            </ul>
            <div
              class={{
                shadow: pageHeaderTrigger.value === false,
                'shadow-active': pageHeaderTrigger.value === true
              }}
            ></div>
          </div>
        </header>
        <div class="header-effect">
          <div class="header-effect-corner"></div>
        </div>
        <div class="page-docs-content">
          <div class="empty-space"></div>
          <Content class="page-docs-content-docs" />
          <RightSidebar></RightSidebar>
        </div>
        <footer class="page-footer">
          <div class="next-control">
            {frontmatter.value.prev && (
              <a href={`${frontmatter.value.prev}`} class="prev">
                <i class="bx bx-chevron-left" />
                {frontmatter.value.prev}
              </a>
            )}
            {frontmatter.value.next && (
              <a href={`${frontmatter.value.next}`} class="next">
                {frontmatter.value.next}
                <i class="bx bx-chevron-right" />
              </a>
            )}
          </div>
        </footer>
        <div
          class={['up', { active: pageHeaderTrigger.value }]}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <i class="bx bx-chevron-up"></i>
        </div>
      </main>
    )
  }
})
export default DocsPage
