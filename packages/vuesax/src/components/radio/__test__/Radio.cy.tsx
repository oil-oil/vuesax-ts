import { VsRadio } from '@/components'
import colors from '@/styles/colors'
import { Color } from '@/types/utils'

describe('Radio', () => {
  it('test radio basic render', () => {
    cy.mount(<VsRadio>Option 1</VsRadio>)
    cy.get('.vs-radio-content').should('be.visible')
    cy.contains('Option 1').should('be.visible')
  })

  it('test Radio click', () => {
    const clickSpy = cy.spy().as('onClick')
    cy.mount(
      <VsRadio modelValue="0" onUpdate:modelValue={clickSpy} value="2">
        Option 2
      </VsRadio>
    )

    cy.get('.vs-radio input').should('not.be.checked')
    cy.contains('Option 2').click()
    cy.get('@onClick').should('be.calledWith', '2')

    cy.get<VueWrapper>('@vue').then((wrapper) => {
      wrapper.setProps({ modelValue: '2' })
    })
    cy.get('.vs-radio input').should('be.checked')
  })

  it('test radio different color', () => {
    Object.entries(colors).forEach(([status, color]) => {
      cy.mount(<VsRadio color={status as Color}>{status}</VsRadio>)
      cy.get('.vs-radio-content')
        .should('have.attr', 'style')
        .and('include', `--vs-color:${color};`)
    })
  })
})
