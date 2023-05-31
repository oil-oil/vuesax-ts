import { defineComponent, ref } from "vue";

import { VsButton, VsToolTip } from "./components";

const activeTooltip1 = ref(false);
export default defineComponent({
  setup() {
    return () => (
      <div
        style={{
          display: "flex",
          width: "500px",
          height: "500px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VsToolTip v-slots={{ tooltip: () => "This is a beautiful button" }}>
          <VsButton flat>Do hover here</VsButton>
        </VsToolTip>
        <VsToolTip
          v-model={activeTooltip1.value}
          shadow
          notHover
          v-slots={{
            tooltip: () => (
              <div>
                <h4>Confirm</h4>
                <p>You are sure to delete ?</p>
                <footer>
                  <VsButton
                    onClick={() => {
                      activeTooltip1.value = false;
                    }}
                    danger
                    block
                  >
                    Delete
                  </VsButton>
                  <VsButton
                    onClick={() => {
                      activeTooltip1.value = false;
                    }}
                    transparent
                    dark
                    block
                  >
                    Cancel
                  </VsButton>
                </footer>
              </div>
            ),
          }}
        >
          <VsButton
            onClick={() => {
              activeTooltip1.value = !activeTooltip1.value;
            }}
            border
          >
            Do click here
          </VsButton>
        </VsToolTip>
      </div>
    );
  },
});
