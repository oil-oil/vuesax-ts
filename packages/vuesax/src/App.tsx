import { defineComponent, ref } from "vue";

import { VsCheckbox, VsInput } from "./components";

export default defineComponent({
  setup() {
    const text = ref(false);
    return () => (
      <>
        <VsCheckbox v-model={text.value} id="label" lineThrough warn>
          label
        </VsCheckbox>
        <div>{text.value}</div>
      </>
    );
  },
});
