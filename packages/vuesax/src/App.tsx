import { defineComponent, ref } from "vue";

import {
  VsSideBarItem,
  VsSideBarGroup,
  VsSideBar,
  VsToolTip,
  VsButton,
} from "./components";

const activeTooltip1 = ref(false);
const active = ref("home");
export default defineComponent({
  setup() {
    return () => (
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <VsSideBar open v-model={active.value} style={{ top: "70px" }}>
          <VsSideBarGroup
            style={{ "margin-top": "10px" }}
            open
            v-slots={{
              header: () => (
                <VsSideBarItem
                  arrow
                  v-slots={{ icon: () => <i class="bx bx-group"></i> }}
                >
                  Guide
                </VsSideBarItem>
              ),
            }}
          >
            <VsSideBarItem id="Introduction">Introduction</VsSideBarItem>
          </VsSideBarGroup>
          <VsSideBarItem id="Theme">Theme</VsSideBarItem>
          <VsSideBarItem id="Components">Components</VsSideBarItem>
          <VsSideBarItem id="Layout">Layout</VsSideBarItem>
        </VsSideBar>
      </div>
    );
  },
});
