import Select from "./base/Select";
import SelectOption from "./option/SelectOption";

const options = ["vue", "react", "angular"];
describe("Select", () => {
  it("test select basic render", () => {
    cy.mount(
      <Select>
        {options.map((item) => (
          <SelectOption>{item}</SelectOption>
        ))}
      </Select>
    );
    cy.get(".vs-select-content").click();
    options.forEach((item) => {
      cy.contains(".vs-select__option", item).should("be.visible");
    });
  });

  it("test select different color", () => {
    const colors = [
      { status: "danger", color: "255, 71, 87" },
      { status: "success", color: "70, 201, 58" },
      { status: "warn", color: "255, 186, 0" },
      { status: "dark", color: "30, 30, 30" },
      { status: "#7d33ff", color: "125,51,255" },
      { status: "rgb(59,222,200)", color: "59,222,200" },
    ];

    colors.forEach(({ status, color }) => {
      cy.mount(
        <Select color={status}>
          {options.map((item) => (
            <SelectOption>{item}</SelectOption>
          ))}
        </Select>
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
      <Select modelValue="vue" onUpdate:modelValue={onUpdate}>
        {options.map((item) => (
          <SelectOption value={item}>{item}</SelectOption>
        ))}
      </Select>
    );

    cy.get(".vs-select-content").click();
    cy.contains(".activeOption", "vue").should("be.visible");

    cy.contains(".vs-select__option", "react").click();
    cy.get("@onUpdate").should("be.calledWith", "react");
  });
});
