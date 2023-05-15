import Button from "./Button";
import "@/styles/vuesax.scss";

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

  it("test button click", () => {
    const onClickSpy = cy.spy().as("onClickSpy");
    cy.mount(<Button onClick={onClickSpy}>Button</Button>);
    cy.contains("Button").click();
    cy.get("@onClickSpy").should("have.callCount", 1);
  });

  it("test button different style", () => {
    cy.mount(<Button disabled>Disabled Button</Button>);
  });
});
