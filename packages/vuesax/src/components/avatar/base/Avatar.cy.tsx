import VsAvatar from "./Avatar";

describe("Avatar", () => {
  it("test Avatar all props render", () => {
    cy.mount(
      <VsAvatar
        badge
        badgeColor="#7d33ff"
        writing
        history
        historyGradient
        v-slots={{
          icons: () => (
            <>
              <i class="bx bxl-facebook-square"></i>
              <i class="bx bxl-github"></i>
              <i class="bx bxl-twitter"></i>
            </>
          ),
        }}
      >
        <img src="/avatars/avatar-2.png" alt="" />
      </VsAvatar>
    );
    cy.get(".vs-avatar__badge,writing").should("be.visible");
    cy.get(".vs-avatar__icons").should("be.visible");
    cy.get(".vs-avatar-content")
      .should("have.class", "history--gradient")
      .realHover();
    cy.get(".vs-avatar img")
      .should("be.visible")
      .and("have.css", "transform", "matrix(1.1, 0, 0, 1.1, 0, 0)");
  });
});
