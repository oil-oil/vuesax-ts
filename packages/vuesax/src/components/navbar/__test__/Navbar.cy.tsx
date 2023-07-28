import { reactive } from "vue";

import { VsNavbar, VsNavbarGroup, VsNavbarItem } from "@/components";

describe("Navbar", () => {
  const active = reactive({
    basic: "guide",
    click: "guide",
  });
  it("test Navbar basic render", () => {
    cy.mount(
      <VsNavbar
        fixed
        textWhite
        color="primary"
        v-model={active.basic}
        v-slots={{
          left: () => <>1111</>,
          right: () => 2222,
        }}
      >
        <VsNavbarGroup
          v-slots={{
            items: () => (
              <>
                <VsNavbarItem active={active.basic === "baidu"} id="baidu">
                  baidu
                </VsNavbarItem>
                <VsNavbarItem active={active.basic === "tx"} id="tx">
                  tx
                </VsNavbarItem>
              </>
            ),
          }}
        >
          Docs
        </VsNavbarGroup>
        <VsNavbarItem active={active.basic === "guide"} id="guide">
          Guide
        </VsNavbarItem>
        <VsNavbarItem active={active.basic === "components"} id="components">
          Documents
        </VsNavbarItem>
        <VsNavbarItem active={active.basic === "license"} id="license">
          License
        </VsNavbarItem>
      </VsNavbar>
    );
    cy.get(
      ".vs-navbar__right,.vs-navbar__center,.vs-navbar__left,.vs-navbar__line"
    ).should("be.visible");
    // cy.contains("License").realHover().should("have.css", "opacity", "1");
  });

  it("test Navbar clickEvent", () => {
    cy.mount(
      <VsNavbar
        fixed
        textWhite
        color="primary"
        v-model={active.click}
        v-slots={{
          left: () => <>1111</>,
          right: () => 2222,
        }}
      >
        <VsNavbarGroup
          v-slots={{
            items: () => (
              <>
                <VsNavbarItem active={active.click === "baidu"} id="baidu">
                  baidu
                </VsNavbarItem>
                <VsNavbarItem active={active.click === "tx"} id="tx">
                  tx
                </VsNavbarItem>
              </>
            ),
          }}
        >
          Docs
        </VsNavbarGroup>
        <VsNavbarItem active={active.click === "guide"} id="guide">
          Guide
        </VsNavbarItem>
        <VsNavbarItem active={active.click === "components"} id="components">
          Documents
        </VsNavbarItem>
        <VsNavbarItem active={active.basic === "license"} id="license">
          License
        </VsNavbarItem>
      </VsNavbar>
    );

    cy.contains("Documents").click();
    cy.wrap(active).its("click").should("eq", "components");
  });
});
