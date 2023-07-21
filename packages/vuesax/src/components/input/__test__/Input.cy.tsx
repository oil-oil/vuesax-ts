import { VsInput } from "@/components";

describe("Input", () => {
  it("test input basic render", () => {
    cy.mount(<VsInput value="Default Input"></VsInput>);
    cy.get(".vs-input-parent.vs-component--primary")
      .get(".vs-input")
      .should("have.value", "Default Input");
  });

  it("test disabled render", () => {
    cy.mount(<VsInput disabled value="Disabled Input"></VsInput>);
    cy.get(".vs-input")
      .should("have.value", "Disabled Input")
      .should("be.visible")
      .should("be.disabled");
  });

  it("test input different status", () => {
    const propsArr = ["danger", "success", "warn", "primary"] as const;

    propsArr.forEach((prop) => {
      cy.mount(<VsInput {...{ [prop]: true }} value={prop}></VsInput>);
      cy.get(`.vs-component--${prop}`).should("be.visible");
    });
  });

  it("test input different style", () => {
    const propsArr = ["border", "shadow"] as const;

    propsArr.forEach((prop) => {
      cy.mount(<VsInput {...{ [prop]: true }}>{prop}</VsInput>);
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
        <VsInput type={prop} label={prop}>
          {prop}
        </VsInput>
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
        <VsInput type={prop} label={prop}>
          {prop}
        </VsInput>
      );
      cy.get(`[type='${prop}']`).should("be.visible");
    });
  });

  it("test input different state", () => {
    const propsArr = ["primary", "danger", "success", "warn", "dark"] as const;

    propsArr.forEach((prop) => {
      cy.mount(
        <VsInput state={prop} label={prop}>
          {prop}
        </VsInput>
      );
      cy.get(`.vs-input-parent--state-${prop}`).should("be.visible");
    });
  });

  it("test input with icon", () => {
    cy.mount(
      <VsInput v-slots={{ icon: <i class="bx bxl-bitcoin"></i> }}></VsInput>
    );
    cy.get(".bx.bxl-bitcoin").should("be.visible");
    cy.get(".vs-input__icon").should("have.css", "left", "0px");
    cy.mount(
      <VsInput
        v-slots={{ icon: <i class="bx bxl-bitcoin"></i> }}
        iconAfter
      ></VsInput>
    );
    cy.get(".bx.bxl-bitcoin").should("be.visible");
    cy.get(".vs-input__icon").should("have.css", "right", "0px");
  });
});
