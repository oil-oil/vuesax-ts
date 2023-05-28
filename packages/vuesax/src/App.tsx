import { defineComponent, ref } from "vue";

import {
  VsButton,
  VsLoading,
  VsAlert,
  useLoading,
  VsInput,
} from "./components";

export default defineComponent({
  setup() {
    return () => (
      <>
        <VsInput danger></VsInput>
      </>
    );
  },
});
