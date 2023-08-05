import { VsButton, VsButtonGroup } from '@/components'

describe('Button', () => {
  it('test basic render', () => {
    cy.mount(
      <VsButtonGroup>
        <VsButton flat>Button1</VsButton>
        <VsButton relief>Button2</VsButton>
        <VsButton>Button3</VsButton>
      </VsButtonGroup>
    )

    cy.contains('Button1')
      .should('be.visible')
      .should('have.css', 'border-radius', '12px 0px 0px 12px')

    cy.contains('Button2')
      .should('be.visible')
      .should('have.css', 'border-radius', '0px')

    cy.contains('Button3')
      .should('be.visible')
      .should('have.css', 'border-radius', '0px 12px 12px 0px')
  })
})
