import { useData, useRouter } from "vitepress";
import { defineComponent } from "vue";
import { VsButton } from "vuesax/src/components";

const HomeContent = defineComponent({
  name: "HomeContent",
  setup() {
    const { site, frontmatter, isDark, lang } = useData();
    const router = useRouter();
    const to = () => {
      router.go("/documentation/components/button");
    };
    const homeContentLocales = () => {
      if (lang.value === "zh") {
        return (
          <>
            <div class="title-content">
              <h1>
                <b style={{ marginRight: "10px" }}>
                  {frontmatter.value.hero.name}
                </b>
                一个提供给
                <a
                  target="_blank "
                  href="https://vuejs.org/"
                  style={{ marginLeft: "12px", textDecoration: "underline" }}
                >
                  VueTS
                </a>
                的组件框架
              </h1>
              {<p>{frontmatter.value.hero.tagline}</p>}
            </div>

            <div class="button-content">
              <VsButton onClick={to}>快速上手</VsButton>
              <VsButton
                border
                href="http://vuesax.com/"
                blank
                color={isDark.value ? "#fff" : "#22252A"}
              >
                <i class="bx bxl-discord"></i>Discord
              </VsButton>
              <VsButton
                icon
                dark
                href="https://github.com/lusaxweb/vuesax"
                blank
              >
                <i class="bx bxl-github"></i>
              </VsButton>
            </div>
          </>
        );
      }
      return (
        <>
          {(frontmatter.value.hero.name && frontmatter.value.hero.text && (
            <div class="title-content">
              <h1>
                <b style={{ marginRight: "10px" }}>
                  {frontmatter.value.hero.name}
                </b>
                {frontmatter.value.hero.text}
                <a
                  target="_blank "
                  href="https://vuejs.org/"
                  style={{ marginLeft: "12px", textDecoration: "underline" }}
                >
                  VueTS
                </a>
              </h1>
            </div>
          )) || <h1>{site.value.title}</h1>}
          {(frontmatter.value.hero.text && (
            <p class="tagline">{frontmatter.value.hero.tagline}</p>
          )) || <p>{site.value.description}</p>}
          <div class="button-content">
            <VsButton onClick={to}>Get start</VsButton>
            <VsButton
              border
              href="http://vuesax.com/"
              blank
              color={isDark.value ? "#fff" : "#22252A"}
            >
              <i class="bx bxl-discord"></i>Discord
            </VsButton>
            <VsButton icon dark href="https://github.com/lusaxweb/vuesax" blank>
              <i class="bx bxl-github"></i>
            </VsButton>
          </div>
        </>
      );
    };

    return homeContentLocales;
  },
});

export default HomeContent;
