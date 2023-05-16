import Button from "./Button";

describe("Button", () => {
  it("test basic render", () => {
    cy.mount(<Button>Default Button</Button>);
    cy.contains("Default Button")
      .should("be.visible")
      .should("have.class", "vs-button--primary vs-button--default");
  });

  it("test disabled render", () => {
    cy.mount(<Button disabled>Disabled Button</Button>);
    cy.contains("Disabled Button")
      .should("be.visible")
      .should("have.class", "vs-button--primary vs-button--default")
      .should("be.disabled");
  });

  it("test button different status", () => {
    const propsArr = ["danger", "success", "warn", "dark"] as const;

    propsArr.forEach((prop) => {
      cy.mount(<Button {...{ [prop]: true }}>{prop}</Button>);
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
      cy.mount(<Button {...{ [prop]: true }}>{prop}</Button>);
      cy.contains(prop)
        .should("be.visible")
        .should("not.have.class", "vs-button--default")
        .should("have.class", `vs-button--${prop}`);
    });
  });

  it("test button different shape", () => {
    cy.mount(<Button circle>Circle Button</Button>);
    cy.contains("Circle Button")
      .should("have.class", "vs-button--circle")
      .should("have.css", "border-radius", "25px");

    cy.mount(<Button square>Square Button</Button>);
    cy.contains("Square Button")
      .should("have.class", "vs-button--square")
      .should("have.css", "border-radius", "0px");
  });

  it("test button click", () => {
    const onClickSpy = cy.spy().as("onClickSpy");
    cy.mount(<Button onClick={onClickSpy}>Button</Button>);
    cy.contains("Button").click();
    cy.get("@onClickSpy").should("have.callCount", 1);

    cy.mount(<Button to="testRoute">Router Button</Button>);
    cy.contains("Router Button").click();

    cy.url().should("contain", "/testRoute");
  });

  it("test button loading", () => {
    const onClickSpy = cy.spy().as("onClickSpy");
    cy.mount(
      <Button onClick={onClickSpy} loading>
        Loading Button
      </Button>
    );

    cy.contains("Loading Button")
      .should("have.class", "vs-button--loading")
      .within(() => {
        cy.get(".vs-button__loading").should("be.visible");
      });
  });
});
