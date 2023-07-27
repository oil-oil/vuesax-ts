import { VsButton, VsToolTip } from "@/components";

describe("Tooltip", () => {
  it("test Tooltip basic render", () => {
    cy.mount(
        <VsToolTip v-slots={{ tooltip: () => <>This is a beautiful Button</> }}>
          <VsButton flat>Do hover here</VsButton>
        </VsToolTip>
    );
    cy.contains("Do hover here").realHover();
    cy.get(".vs-tooltip").should("be.visible");
  });

  it("test Tooltip color", () => {
    const colors = ["primary", "warn", "success", "danger", "dark"];
    colors.forEach((color) => {
      cy.mount(
        <VsToolTip
          color={color}
          v-slots={{ tooltip: () => <>This is a beautiful Button</> }}
        >
          <VsButton flat>Do hover here</VsButton>
        </VsToolTip>
      );
      cy.contains("Do hover here").realHover();
      cy.get(`.vs-tooltip.vs-component--${color}`).should("be.visible");
    });
  });
});
