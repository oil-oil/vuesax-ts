import { VsLoading } from '@/components'

describe('Loading', () => {
  it('test loading basic render', () => {
    cy.mount(<VsLoading />)
    cy.get('.vs-loading ').get('.vs-loading--default').should('be.visible')
  })

  it('test loading different type', () => {
    const typeArray = [
      'waves',
      'corners',
      'points',
      'square',
      'gradient',
      'rectangle',
      'circles',
      'square-rotate',
      'scale'
    ] as const

    typeArray.forEach((type) => {
      cy.mount(<VsLoading type={type} />)
      cy.get(`.vs-loading--${type}`).should('be.visible')
    })
  })

  it('test loading visible', () => {
    cy.mount(<VsLoading visible={false} />)
    cy.get('.vs-loading--default').should('not.exist')
  })

  it('test loading style', () => {
    cy.mount(<VsLoading background="#7a76cb" color="#fff" />)
    cy.get('.vs-loading--default')
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should(
        'have.css',
        'background',
        'rgba(122, 118, 203, 0.6) none repeat scroll 0% 0% / auto padding-box border-box'
      )
  })

  it('test loading text and percent', () => {
    cy.mount(<VsLoading text="Loading text" percent="70" />)
    cy.get('.vs-loading--default').should('be.visible')
    cy.contains('Loading text').should('have.class', 'vs-loading__load__text')
    cy.contains('70').should('have.class', 'vs-loading__load__percent')
  })

  it('test loading progress', () => {
    cy.mount(<VsLoading progress={70} />)
    cy.get('.vs-loading__progress__bar')
      .should('have.attr', 'style')
      .and('include', 'width: 70%')
  })
})
