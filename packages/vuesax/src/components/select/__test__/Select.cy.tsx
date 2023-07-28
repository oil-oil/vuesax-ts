import { VsOption, VsSelect } from "@/components";
import { COLOR_MAP } from "@/test-utils/color";

const options = ["vue", "react", "angular"];
describe("Select", () => {
  it("test select basic render", () => {
    cy.mount(
      <VsSelect>
        {options.map((item) => (
          <VsOption>{item}</VsOption>
        ))}
      </VsSelect>
    );
    cy.get(".vs-select-content").click();
    options.forEach((item) => {
      cy.contains(".vs-select__option", item).should("be.visible");
    });
  });

  it("test select different color", () => {
    Object.entries(COLOR_MAP).forEach(([status, color]) => {
      cy.mount(
        <VsSelect color={status as Status}>
          {options.map((item) => (
            <VsOption>{item}</VsOption>
          ))}
        </VsSelect>
      );
      cy.get(".vs-select-content").click();
      options.forEach((item) => {
        cy.contains(".vs-select__option", item).should("be.visible");
      });
      cy.get(".vs-select__options")
        .should("have.attr", "style")
        .and("include", `--vs-color: ${color}`);
    });
  });

  it("test select modelValue", () => {
    const onUpdate = cy.spy().as("onUpdate");
    cy.mount(
      <VsSelect modelValue="vue" onUpdate:modelValue={onUpdate}>
        {options.map((item) => (
          <VsOption value={item}>{item}</VsOption>
        ))}
      </VsSelect>
    );

    cy.get(".vs-select-content").click();
    cy.contains(".activeOption", "vue").should("be.visible");

    cy.contains(".vs-select__option", "react").click();
    cy.get("@onUpdate").should("be.calledWith", "react");
  });
});
