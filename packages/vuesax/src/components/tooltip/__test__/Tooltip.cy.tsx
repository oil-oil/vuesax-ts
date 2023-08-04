import { VsButton, VsToolTip } from "@/components";
import colors from "@/styles/colors";
import { Color } from "@/types/utils";

describe("Tooltip", () => {
  it("test tooltip basic render", () => {
    cy.mount(
      <VsToolTip v-slots={{ tooltip: () => <>This is a beautiful Button</> }}>
        <VsButton flat>Do hover here</VsButton>
      </VsToolTip>
    );
    cy.contains("Do hover here").realHover();
    cy.get(".vs-tooltip").should("be.visible");
  });

  it("test tooltip color", () => {
    Object.entries(colors).forEach(([status, color]) => {
      cy.mount(
        <VsToolTip
          color={status as Color}
          v-slots={{ tooltip: () => "This is a beautiful Button" }}
        >
          {" "}
          <VsButton flat>Do hover here</VsButton>
        </VsToolTip>
      );
      cy.get(".vs-tooltip")
        .should("have.attr", "style")
        .and("include", `--vs-color:${color};`);
    });
  });
});
