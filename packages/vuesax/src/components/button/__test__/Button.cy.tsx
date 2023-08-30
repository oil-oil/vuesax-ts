import { VsButton } from '@/components'
import colors from '@/styles/colors'
import { Color } from '@/types/utils'

describe('Button', () => {
  it('test button basic render', () => {
    cy.mount(<VsButton>Default Button</VsButton>)
    cy.contains('Default Button')
      .should('be.visible')
      .should('have.class', 'vs-button--default')
  })

  it('test disabled render', () => {
    cy.mount(<VsButton disabled>Disabled Button</VsButton>)
    cy.contains('Disabled Button')
      .should('be.visible')
      .should('have.class', 'vs-button--default')
      .should('be.disabled')
  })

  it('test button different colors', () => {
    Object.entries(colors).forEach(([status, color]) => {
      cy.mount(<VsButton color={status as Color}>{status}</VsButton>)
      cy.get('.vs-button')
        .should('have.attr', 'style')
        .and('include', `--vs-color:${color};`)
    })
  })

  it('test button different style', () => {
    const propsArr = [
      'flat',
      'border',
      'gradient',
      'relief',
      'transparent',
      'shadow',
      'floating'
    ] as const

    propsArr.forEach((prop) => {
      cy.mount(<VsButton {...{ [prop]: true }}>{prop}</VsButton>)
      cy.contains(prop)
        .should('be.visible')
        .should('not.have.class', 'vs-button--default')
        .should('have.class', `vs-button--${prop}`)
    })
  })

  it('test button different shape', () => {
    cy.mount(<VsButton circle>Circle Button</VsButton>)
    cy.contains('Circle Button')
      .should('have.class', 'vs-button--circle')
      .should('have.css', 'border-radius', '25px')

    cy.mount(<VsButton square>Square Button</VsButton>)
    cy.contains('Square Button')
      .should('have.class', 'vs-button--square')
      .should('have.css', 'border-radius', '0px')
  })

  it('test button loading', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    cy.mount(
      <VsButton onClick={onClickSpy} loading>
        Loading Button
      </VsButton>
    )

    cy.contains('Loading Button')
      .should('have.class', 'vs-button--loading')
      .within(() => {
        cy.get('.vs-button__loading').should('be.visible')
      })
  })

  it('test button different size', () => {
    const sizeArr = ['xs', 'sm', 'md', 'lg', 'xl'] as const

    sizeArr.forEach((prop) => {
      cy.mount(<VsButton size={prop}>{prop}</VsButton>)
      cy.contains(prop)
        .should('be.visible')
        .should('have.class', `vs-button--size-${prop}`)
    })
  })
})
