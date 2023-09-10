import { reactive } from 'vue'

import { VsNavbar, VsNavbarGroup, VsNavbarItem } from '@/components'

describe('Navbar', () => {
  const active = reactive({
    basic: 'guide',
    click: 'guide'
  })
  it('test Navbar basic render', () => {
    cy.mount(
      <VsNavbar
        fixed
        backgroud="primary"
        color="white"
        v-model={active.basic}
        v-slots={{
          left: () => <>1111</>,
          right: () => 2222
        }}
      >
        <VsNavbarGroup
          v-slots={{
            title: () => 'Docs'
          }}
        >
          <VsNavbarItem id="baidu">baidu</VsNavbarItem>
          <VsNavbarItem id="tx">tx</VsNavbarItem>
        </VsNavbarGroup>
        <VsNavbarItem id="guide">Guide</VsNavbarItem>
        <VsNavbarItem id="components">Documents</VsNavbarItem>
        <VsNavbarItem id="license">License</VsNavbarItem>
      </VsNavbar>
    )
    cy.get(
      '.vs-navbar__right,.vs-navbar__center,.vs-navbar__left,.vs-navbar__line'
    ).should('be.visible')
    // cy.contains("License").realHover().should("have.css", "opacity", "1");
  })

  it('test Navbar clickEvent', () => {
    cy.mount(
      <VsNavbar
        fixed
        color="white"
        backgroud="primary"
        v-model={active.click}
        v-slots={{
          left: () => <>1111</>,
          right: () => 2222
        }}
      >
        <VsNavbarGroup
          v-slots={{
            title: () => 'Docs'
          }}
        >
          <VsNavbarItem id="baidu">baidu</VsNavbarItem>
          <VsNavbarItem id="tx">tx</VsNavbarItem>
        </VsNavbarGroup>
        <VsNavbarItem id="guide">Guide</VsNavbarItem>
        <VsNavbarItem id="components">Documents</VsNavbarItem>
        <VsNavbarItem id="license">License</VsNavbarItem>
      </VsNavbar>
    )

    cy.contains('Documents').click()
    cy.wrap(active).its('click').should('eq', 'components')
  })
})
