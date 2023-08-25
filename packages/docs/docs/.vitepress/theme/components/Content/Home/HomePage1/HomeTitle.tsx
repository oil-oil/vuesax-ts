import { useData, useRouter } from 'vitepress'
import { defineComponent } from 'vue'
import { VsButton } from 'vuesax-ts'

const HomeContent = defineComponent({
  name: 'HomeContent',
  setup() {
    const { site, frontmatter, lang } = useData()
    const router = useRouter()
    const to = () => {
      router.go('/documentation/components/button')
    }
    const homeContentLocales = () => {
      if (lang.value === 'zh') {
        return (
          <div class="title-content">
            <h1>
              <b style={{ marginRight: '10px' }}>
                {frontmatter.value.hero.name}
              </b>
              一个提供给
              <a
                target="_blank "
                href="https://vuejs.org/"
                style={{ marginLeft: '12px', textDecoration: 'underline' }}
              >
                VueTS
              </a>
              的组件框架
            </h1>
          </div>
        )
      }
      return (
        <div class="title-content">
          <h1>
            <b style={{ marginRight: '10px' }}>{frontmatter.value.hero.name}</b>
            Framework Components for
            <a
              target="_blank "
              href="https://vuejs.org/"
              style={{ marginLeft: '12px', textDecoration: 'underline' }}
            >
              VueTS
            </a>
          </h1>
        </div>
      )
    }
    return () => (
      <>
        {homeContentLocales()}
        {(frontmatter.value.hero.text && (
          <p class="tagline">{frontmatter.value.hero.tagline}</p>
        )) || <p>{site.value.description}</p>}
        <div class="button-content">
          <VsButton class="text-button" size="lg" onClick={to}>
            Get Started
          </VsButton>
          <VsButton
            class="icon-button"
            icon
            color="dark"
            href="https://github.com/oil-oil/vuesax-ts"
            blank
            size="lg"
          >
            <i class="bx bxl-github"></i>
          </VsButton>
        </div>
      </>
    )
  }
})

export default HomeContent
