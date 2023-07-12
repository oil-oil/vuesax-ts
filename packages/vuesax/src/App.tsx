import { defineComponent, ref } from "vue";

import {
  VsAvatar,
  VsAvatarGroup,
  VsCheckbox,
  VsInput,
  VsOption,
  VsPagination,
  VsSelect,
  VsTable,
  VsTd,
  VsTh,
  VsTr,
} from "./components";

export default defineComponent({
  setup() {
    const page = ref(1);
    return () => (
      <>
        <VsPagination length={20} v-model={page.value}></VsPagination>
      </>
    );
  },
});
