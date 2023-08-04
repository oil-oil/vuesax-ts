import avatar1 from "./avatar-1.png";
import avatar2 from "./avatar-2.png";
import avatar3 from "./avatar-3.png";
import avatar4 from "./avatar-4.png";
import avatar5 from "./avatar-5.png";
import avatar6 from "./avatar-6.png";
import avatar7 from "./avatar-7.png";
import avatar8 from "./avatar-8.png";
import { VsAvatar, VsAvatarGroup } from "@/components";

describe("Avatar", () => {
  it("text AvatarGroup render", () => {
    cy.mount(
      <VsAvatarGroup max={5}>
        <VsAvatar>
          <img src={avatar1} alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src={avatar2} alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src={avatar3} alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src={avatar4} alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src={avatar5} alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src={avatar6} alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src={avatar7} alt="" />
        </VsAvatar>
        <VsAvatar>
          <img src={avatar8} alt="" />
        </VsAvatar>
      </VsAvatarGroup>,
    );
    cy.get(".vs-avatar__group").should("be.visible");
    cy.get(".vs-avatar-content--hidden").should("not.be.visible");
    cy.get(".vs-avatar-content").realHover();
  });
});
