import Input from "./Input";

describe("Button", () => {
  it("test button basic render", () => {
    cy.mount(<Input value="Default Input"></Input>);
    cy.get(".vs-input-parent.vs-component--primary")
      .get(".vs-input")
      .should("have.value", "Default Input");
  });

  it("test disabled render", () => {
    cy.mount(<Input disabled value="Disabled Input"></Input>);
    cy.get(".vs-input")
      .should("have.value", "Disabled Input")
      .should("be.visible")
      .should("be.disabled");
  });

  it.only("test button different status", () => {
    const propsArr = ["danger", "success", "warn", "primary"] as const;

    propsArr.forEach((prop) => {
      cy.mount(<Input {...{ [prop]: true }} value={prop}></Input>);
      cy.contains(prop)
        .should("be.visible")
        .should("have.class", `vs-button--${prop}`);
    });
  });

  it("test button different style", () => {
    const propsArr = [
      "flat",
      "border",
      "gradient",
      "relief",
      "transparent",
      "shadow",
      "floating",
    ] as const;

    propsArr.forEach((prop) => {
      cy.mount(<Input {...{ [prop]: true }}>{prop}</Input>);
      cy.contains(prop)
        .should("be.visible")
        .should("not.have.class", "vs-button--default")
        .should("have.class", `vs-button--${prop}`);
    });
  });
});
