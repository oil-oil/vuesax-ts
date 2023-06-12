import Input from "./Input";

describe("Input", () => {
  it("test input basic render", () => {
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

  it("test input different status", () => {
    const propsArr = ["danger", "success", "warn", "primary"] as const;

    propsArr.forEach((prop) => {
      cy.mount(<Input {...{ [prop]: true }} value={prop}></Input>);
      cy.get(`.vs-component--${prop}`).should("be.visible");
    });
  });

  it("test input different style", () => {
    const propsArr = ["border", "shadow"] as const;

    propsArr.forEach((prop) => {
      cy.mount(<Input {...{ [prop]: true }}>{prop}</Input>);
      cy.get(`.vs-input-parent--${prop}`).should("be.visible");
    });
  });

  it("test input different type", () => {
    const propsArr = [
      "text",
      "password",
      "search",
      "url",
      "time",
      "date",
    ] as const;

    propsArr.forEach((prop) => {
      cy.mount(
        <Input type={prop} label={prop}>
          {prop}
        </Input>
      );
      cy.get(`[type='${prop}']`).should("be.visible");
    });
  });

  it("test input different type", () => {
    const propsArr = [
      "text",
      "password",
      "search",
      "url",
      "time",
      "date",
    ] as const;

    propsArr.forEach((prop) => {
      cy.mount(
        <Input type={prop} label={prop}>
          {prop}
        </Input>
      );
      cy.get(`[type='${prop}']`).should("be.visible");
    });
  });

  it("test input different state", () => {
    const propsArr = ["primary", "danger", "success", "warn", "dark"] as const;

    propsArr.forEach((prop) => {
      cy.mount(
        <Input state={prop} label={prop}>
          {prop}
        </Input>
      );
      cy.get(`.vs-input-parent--state-${prop}`).should("be.visible");
    });
  });

  it("test input with icon", () => {
    cy.mount(
      <Input v-slots={{ icon: <i class="bx bxl-bitcoin"></i> }}></Input>
    );
    cy.get(".bx.bxl-bitcoin").should("be.visible");
    cy.get(".vs-input__icon").should("have.css", "left", "0px");
    cy.mount(
      <Input
        v-slots={{ icon: <i class="bx bxl-bitcoin"></i> }}
        iconAfter
      ></Input>
    );
    cy.get(".bx.bxl-bitcoin").should("be.visible");
    cy.get(".vs-input__icon").should("have.css", "right", "0px");
  });
});
