import { defineComponent, ref } from "vue";

import { VsButton, VsInput, VsPagination, useModal } from "./components";

export default defineComponent({
  setup() {
    const { open, close } = useModal({
      title: "Modal Title",
      content: "Modal Content",
    });
    const isShow = ref(true);
    return () => (
      <>
        <VsButton
          onClick={() => {
            open();
          }}
        >
          isShow
        </VsButton>
      </>
    );
  },
});
