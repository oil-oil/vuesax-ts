import ButtonGroup from "./ButtonGroup";
import Button from "../base/Button";

describe("Button", () => {
  it("test basic render", () => {
    cy.mount(
      <ButtonGroup>
        <Button flat>Button1</Button>
        <Button relief>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
    );

    cy.contains("Button1")
      .should("be.visible")
      .should("have.css", "border-radius", "12px 0px 0px 12px");

    cy.contains("Button2")
      .should("be.visible")
      .should("have.css", "border-radius", "0px");

    cy.contains("Button3")
      .should("be.visible")
      .should("have.css", "border-radius", "0px 12px 12px 0px");
  });
});
