import { defineComponent, ref } from "vue";

import { VsAvatar, VsAvatarGroup, VsOption, VsSelect } from "./components";

export default defineComponent({
  setup() {
    const options = ["vue", "react", "angular"];
    const value = ref("");
    return () => (
      <>
        <VsSelect v-model={value.value} multiple>
          {options.map((item) => (
            <VsOption value={item} label={item}>
              {item}
            </VsOption>
          ))}
        </VsSelect>
      </>
    );
  },
});
