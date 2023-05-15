import Button from "./Button.tsx";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(Button, {});
  });
});
