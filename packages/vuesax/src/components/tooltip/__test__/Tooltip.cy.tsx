import { VsButton, VsToolTip } from "@/components";

describe("Tooltip", () => {
  it("test Tooltip", () => {
    cy.mount(
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <VsToolTip
          left
          v-slots={{ tooltip: () => "This is Tooltip is on the left" }}
        >
          <VsButton flat>Do hover here</VsButton>
        </VsToolTip>
        <VsToolTip
          right
          v-slots={{ tooltip: () => "This is Tooltip is on the right" }}
        >
          <VsButton flat>Do hover here</VsButton>
        </VsToolTip>
      </div>
    );
  });
});
