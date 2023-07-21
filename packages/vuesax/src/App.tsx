import { defineComponent, ref } from "vue";

import { VsButton, useNotification } from "./components";

export default defineComponent({
  setup() {
    const { open, close, clear } = useNotification();
    let key: string;
    const n = ref(true);
    return () => (
      <>
        <VsButton
          onClick={() => {
            key = open({
              text: "These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x",
              title: "Documentation Vuesax 4.0+",
              warn: true,
              sticky: true,
            });
          }}
        >
          open
        </VsButton>
        <VsButton
          onClick={() => {
            n.value = true;
          }}
        >
          true
        </VsButton>
        <VsButton
          onClick={() => {
            n.value = false;
          }}
        >
          false
        </VsButton>
        <VsButton
          onClick={() => {
            close();
          }}
        >
          close
        </VsButton>
        <VsButton onClick={clear}>clear</VsButton>

        <div style={{ height: "1000px" }}></div>
      </>
    );
  },
});
