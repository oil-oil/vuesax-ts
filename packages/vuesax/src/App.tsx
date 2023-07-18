import { defineComponent, ref, watch } from "vue";

import { VsRadio } from "./components";

export default defineComponent({
  setup() {
    const active = ref("0");
    watch(active, () => {
      console.log(active.value);
    });
    return () => (
      <>
        <VsRadio
          v-model={active.value}
          value="1"
          v-slots={{ icon: () => <i class="bx bx-yen"></i> }}
        >
          Option 1
        </VsRadio>
        <VsRadio v-model={active.value} value="2">
          Option 2
        </VsRadio>
        <VsRadio disabled v-model={active.value} value="3">
          Option 3
        </VsRadio>
        <VsRadio v-model={active.value} value="4">
          Option 4
        </VsRadio>
        <div style={{ height: "1000px" }}></div>
      </>
    );
  },
});
