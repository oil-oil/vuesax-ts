import { VsInput } from "@/components";
import { COLOR_MAP } from "@/test-utils/color";

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

  it("test input different color", () => {
    Object.entries(COLOR_MAP).forEach(([status, color]) => {
      cy.mount(<VsInput color={status as Status}>{status}</VsInput>);
      cy.get(".vs-input-parent")
        .should("have.attr", "style")
        .and("include", `--vs-color: ${color};`);
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

  it("test input different status", () => {
    const propsArr = ["primary", "danger", "success", "warn", "dark"] as const;

    propsArr.forEach((prop) => {
      cy.mount(
        <VsInput status={prop} label={prop}>
          {prop}
        </VsInput>
      );

      cy.get(`.vs-input-parent--status-${prop}`).should("be.visible");
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
