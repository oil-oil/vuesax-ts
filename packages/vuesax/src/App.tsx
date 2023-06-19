import { defineComponent } from "vue";

import { VsAvatar, VsAvatarGroup } from "./components";

export default defineComponent({
  setup() {
    return () => (
      <>
        <VsAvatarGroup>
          <VsAvatar color="#7d33ff">Cat</VsAvatar>
          <VsAvatar color="#7d33ff">Cat</VsAvatar>
          <VsAvatar color="#7d33ff">Cat</VsAvatar>
          <VsAvatar color="#7d33ff">Cat</VsAvatar>
          <VsAvatar color="#7d33ff">Cat</VsAvatar>
          <VsAvatar color="#7d33ff">Cat</VsAvatar>
        </VsAvatarGroup>
      </>
    );
  },
});
