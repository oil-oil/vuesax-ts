import { defineComponent, ref } from "vue";

import { VsInput } from "./components";

export default defineComponent({
  setup() {
    return () => (
      <>
        <VsInput type="date"></VsInput>
      </>
    );
  },
});
