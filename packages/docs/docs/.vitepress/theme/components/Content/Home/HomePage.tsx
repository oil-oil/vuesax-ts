import { useData, useRouter } from "vitepress";
import { defineComponent } from "vue";
import { VsButton } from "vuesax/src/components";
import "./HomePage.scss";

const HomePage = defineComponent({
  name: "HomePage",
  setup() {
    const { site, frontmatter } = useData();
    const router = useRouter();
    const to = () => {
      router.go("/documentation/components/button");
    };
    return () => (
      <div class="page">
        <div class="title-part">
          <div class="title-content">
            {(frontmatter.value.hero.name && frontmatter.value.hero.text && (
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
            )) || <h1>{site.value.title}</h1>}
            {(frontmatter.value.hero.text && (
              <p>{frontmatter.value.hero.tagline}</p>
            )) || <p>{site.value.description}</p>}
            <div class="button-content">
              <VsButton onClick={to}>Get start</VsButton>
              <VsButton border dark href="http://vuesax.com/" blank>
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
          </div>
        </div>
        <div class="features-part"></div>
      </div>
    );
  },
});
export default HomePage;
