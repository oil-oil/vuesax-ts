import { ref } from "vue";

import { VsButton, VsNavbar, VsNavbarGroup, VsNavbarItem } from "@/components";

describe("Navbar", () => {
  it("test Navbar basic render", () => {
    const active = ref("guide");
    cy.mount(
      <VsNavbar
        fixed
        textWhite
        primary
        v-model={active.value}
        v-slots={{
          left: () => <>1111</>,
          right: () => <VsButton flat>Login</VsButton>,
        }}
      >
        <VsNavbarGroup
          v-slots={{
            items: () => (
              <>
                <VsNavbarItem active={active.value === "baidu"} id="baidu">
                  baidu
                </VsNavbarItem>
                <VsNavbarItem active={active.value === "tx"} id="tx">
                  tx
                </VsNavbarItem>
              </>
            ),
          }}
        >
          Docs
        </VsNavbarGroup>
        <VsNavbarItem active={active.value === "guide"} id="guide">
          Guide
        </VsNavbarItem>
        <VsNavbarItem active={active.value === "components"} id="components">
          Documents
        </VsNavbarItem>
        <VsNavbarItem active={active.value === "license"} id="license">
          License
        </VsNavbarItem>
      </VsNavbar>
    );
    cy.get(".vs-navbar__right,.vs-navbar__center,.vs-navbar__left").should(
      "be.visible"
    );
    cy.get(".vs-navbar__line").should("be.visible");
  });
});
