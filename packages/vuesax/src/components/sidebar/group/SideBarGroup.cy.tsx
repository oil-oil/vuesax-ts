describe("SideBar", () => {
  it("test SideBar render", () => {
    cy.mount(<div class="vs-sidebar__logo">11</div>);
    cy.get(".vs-sidebar__logo");
  });
});
