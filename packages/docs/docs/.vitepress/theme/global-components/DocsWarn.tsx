import { defineComponent } from "vue";
import { VsAlert } from "vuesax-ts";

const docsWarn = defineComponent({
  name: "docsWarn",
  setup() {
    return () => (
      <VsAlert
        style={{ margin: "1rem 0", zIndex: 0 }}
        v-slots={{ title: () => "Documentation Vuesax 4.0+" }}
        color="warn"
      >
        <p>
          These documents refer to the latest version of{" "}
          <strong>vuesax (4.0+)</strong>, to see the documents of the previous
          versions you can do it here 👉{" "}
          <a target="_blank" href="https://lusaxweb.github.io/vuesax/#/">
            Vuesax 3.x
          </a>
        </p>
      </VsAlert>
    );
  },
});
export default docsWarn;
