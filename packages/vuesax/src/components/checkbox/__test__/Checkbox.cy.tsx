import { VsCheckbox } from "@/components";

describe("Input", () => {
  it("test input basic render", () => {
    const onClick = cy.spy().as("onClick");
    cy.mount(
      <VsCheckbox id="default" modelValue={false} onUpdate:modelValue={onClick}>
        Default Checkbox
      </VsCheckbox>
    );
    cy.contains(".vs-checkbox-label", "Default Checkbox").should("be.visible");
    cy.get("#default")
      .should("have.class", "vs-checkbox")
      .should("not.be.checked");

    cy.get<VueWrapper>("@vue").then((wrapper) => {
      wrapper.setProps({ modelValue: true });
    });
    cy.get("#default").should("be.checked");

    cy.get("#default").click();
    cy.get("#default").should("not.be.checked");
  });

  it("test checkbox different styles", () => {
    const propsArr = ["success", "danger", "warn", "dark"];
    propsArr.forEach((prop) => {
      cy.mount(
        <VsCheckbox {...{ [prop]: true }} id="default">
          {prop}
        </VsCheckbox>
      );
      cy.get(`.vs-component--${prop}`).click();
    });

    cy.mount(<VsCheckbox color="#7d33ff" id="default"></VsCheckbox>);

    cy.get("[style='--vs-color: 125,51,255;']").should("be.visible");
    cy.mount(<VsCheckbox color="rgb(59,222,200)" id="default"></VsCheckbox>);
    cy.get("[style='--vs-color: 59,222,200;']").should("be.visible");
  });

  it("test checkbox different status", () => {
    cy.mount(
      <VsCheckbox id="default" labelBefore lineThrough>
        lineThrough Checkbox
      </VsCheckbox>
    );

    cy.get("#default").click();

    cy.get(".lineThrough")
      .should("contain.text", "lineThrough Checkbox")
      .should("have.css", "order", "-1");
  });

  it("test checkbox with icon", () => {
    cy.mount(
      <VsCheckbox
        id="default"
        labelBefore
        lineThrough
        v-slots={{
          icon: () => <i class="bx bx-check-double"></i>,
        }}
      >
        lineThrough Checkbox
      </VsCheckbox>
    );

    cy.get("#default").click();

    cy.get(".bx.bx-check-double").should("be.visible");
  });
});
