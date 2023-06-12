import { defineComponent, ref } from "vue";

import { VsButton, VsSwitch } from "./components";

const activeTooltip1 = ref(false);
const active = ref("home");
export default defineComponent({
  setup() {
    const text = ref(false);
    return () => (
      <>
        <VsSwitch
          v-model={text.value}
          id="label"
          indeterminate
          v-slots={{
            on: <i class="bx bxs-volume-mute"></i>,
          }}
        >
          label
        </VsSwitch>
      </>
    );
  },
});
