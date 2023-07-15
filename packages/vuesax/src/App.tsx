import { defineComponent, ref } from "vue";

import { VsPagination } from "./components";

export default defineComponent({
  setup() {
    const page = ref(1);
    return () => (
      <>
        <VsPagination
          length={6}
          v-model={page.value}
          loadingItems={[3, 4, 9, 10, 11, 12, 19]}
          progress
        ></VsPagination>
      </>
    );
  },
});
