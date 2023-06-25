import { defineComponent, ref } from "vue";

import { VsNavbar, VsNavbarItem, VsNavbarGroup, VsButton } from "./components";

export default defineComponent({
  setup() {
    const active = ref("guide");
    return () => (
      <>
        <VsNavbar
          fixed
          textWhite
          color="dark"
          v-model={active.value}
          v-slots={{
            left: () => <>1111</>,
            right: () => <VsButton flat>Login</VsButton>,
          }}
        >
          <VsNavbarGroup
            v-slots={{
              items: () => (
                <>
                  <VsNavbarItem active={active.value === "baidu"} id="baidu">
                    baidu
                  </VsNavbarItem>
                  <VsNavbarItem active={active.value === "tx"} id="tx">
                    tx
                  </VsNavbarItem>
                </>
              ),
            }}
          >
            Docs
          </VsNavbarGroup>
          <VsNavbarItem active={active.value === "guide"} id="guide">
            Guide
          </VsNavbarItem>
          <VsNavbarItem active={active.value === "components"} id="components">
            Documents
          </VsNavbarItem>
          <VsNavbarItem active={active.value === "license"} id="license">
            License
          </VsNavbarItem>
        </VsNavbar>
        <div style={{ height: "2000px" }}></div>
      </>
    );
  },
});
