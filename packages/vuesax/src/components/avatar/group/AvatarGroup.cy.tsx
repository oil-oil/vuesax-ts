import VsAvatarGroup from "./AvatarGroup";
import VsAvatar from "../base/Avatar";

describe("Avatar", () => {
  it("text AvatarGroup render", () => {
    cy.mount(
      <VsAvatarGroup max={5}>
        <VsAvatar>
          <img src="/avatars/avatar-1.png" alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src="/avatars/avatar-2.png" alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src="/avatars/avatar-3.png" alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src="/avatars/avatar-4.png" alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src="/avatars/avatar-5.png" alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src="/avatars/avatar-6.png" alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src="/avatars/avatar-7.png" alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src="/avatars/avatar-8.png" alt="" />
        </VsAvatar>
      </VsAvatarGroup>
    );
    cy.get(".vs-avatar__group").should("be.visible");
    cy.get(".vs-avatar-content--hidden").should("not.be.visible");
    cy.get(".vs-avatar-content").realHover();
  });
});
