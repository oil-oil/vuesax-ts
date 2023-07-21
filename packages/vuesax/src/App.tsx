import { defineComponent } from "vue";

import { VsButton, useNotification } from "./components";

export default defineComponent({
  setup() {
    const { open, close, clear } = useNotification();
    let key: string;
    return () => (
      <>
        <VsButton
          onClick={() => {
            key = open({
              success: true,
              text: "These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x",
              title: "Documentation Vuesax 4.0+",
            });
            console.log(key);
          }}
        >
          open
        </VsButton>
        <VsButton
          onClick={() => {
            open({
              warn: true,
              position: "bottom-left",
              text: "These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x",
              title: "Documenasdasdtation Vuesax 4.0+",
            });
          }}
        >
          bottom-left
        </VsButton>
        <VsButton
          onClick={() => {
            open({
              warn: true,
              position: "top-center",
              text: "These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x",
              title: "Documenasdasdtation Vuesax 4.0+",
            });
          }}
        >
          top-center
        </VsButton>
        <VsButton
          onClick={() => {
            open({
              warn: true,
              position: "bottom-center",
              text: "These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x",
              title: "Documenasdasdtation Vuesax 4.0+",
            });
          }}
        >
          bottom-center
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
