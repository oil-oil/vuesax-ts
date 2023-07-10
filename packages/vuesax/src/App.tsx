import { defineComponent, ref } from "vue";

import { VsNavbar, VsNavbarGroup, VsNavbarItem, VsButton } from "./components";

export default defineComponent({
  setup() {
    const active = ref(0);
    return () => (
      <>
        <VsButton border active={active.value === 0} onClick={()=>{active.value = 0}}>active</VsButton>
        <VsButton border active={active.value === 1} onClick={()=>{active.value = 1}}>default</VsButton>
        <div style={{ height: "1000px" }}></div>
      </>
    );
  },
});
