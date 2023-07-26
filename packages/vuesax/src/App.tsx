import { defineComponent, ref } from "vue";

import { VsSelect, VsOption, VsOptionGroup } from "./components";

export default defineComponent({
  setup() {
    const value = ref("1");
    // watch(value, () => {
    //   console.log("value", value.value);
    // });
    return () => (
      <VsSelect
        color="success"
        v-model={value.value}
        placeholder="Select"
        class="select"
      >
        <VsOptionGroup v-slots={{ title: () => <>VueTs</> }}>
          <VsOption label="Vuesax" value="1">
            Vuesax
          </VsOption>
          <VsOption label="Vue" value="2">
            Vue
          </VsOption>
          <VsOption label="Javascript" value="3">
            Javascript
          </VsOption>
        </VsOptionGroup>
        <VsOptionGroup v-slots={{ title: () => <>Other</> }}>
          <VsOption label="Scss" value="4">
            Scss
          </VsOption>
          <VsOption label="Typescript" value="5">
            Typescript
          </VsOption>
          <VsOption label="Nodejs" value="6">
            Nodejs
          </VsOption>
        </VsOptionGroup>
        <VsOption label="JETT" value="7">
          JETT
        </VsOption>
      </VsSelect>
    );
  },
});
