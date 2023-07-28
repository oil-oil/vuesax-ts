import { defineComponent } from "vue";

import {  VsAvatar ,VsAvatarGroup} from "./components";

export default defineComponent({
  setup() {
    return () => (
      <VsAvatarGroup max={7}>
            <VsAvatar name="lili" color="primary"></VsAvatar>
            <VsAvatar name="lili" color="success"></VsAvatar>
            <VsAvatar name="lili" color="warn"></VsAvatar>
            <VsAvatar name="lili" color="danger"></VsAvatar>
            <VsAvatar name="lili" color="dark"></VsAvatar>
            <VsAvatar name="lili" color="primary"></VsAvatar>
            <VsAvatar name="lili" color="primary"></VsAvatar>
            <VsAvatar name="lili" color="primary"></VsAvatar>
            <VsAvatar name="lili" color="primary"></VsAvatar>
            <VsAvatar name="lili" color="primary"></VsAvatar>
            <VsAvatar name="lili" color="primary"></VsAvatar>
      </VsAvatarGroup>
    );
  },
});
