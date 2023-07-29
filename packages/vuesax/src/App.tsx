import { defineComponent } from "vue";

import { VsButton } from "./components";

export default defineComponent({
  setup() {
    return () => <VsButton color="success">success</VsButton>;
  },
});
