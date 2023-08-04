import { VsPagination } from '@/components'

describe('Pagination', () => {
  it('test Pagination basic render', () => {
    cy.mount(<VsPagination length={6} />)
    Array.from({ length: 6 }).forEach((_, index) => {
      cy.contains('.vs-pagination__button', index + 1).should('be.visible')
    })

    cy.mount(<VsPagination length={20} modelValue={6} />)
    cy.contains('.vs-pagination__button', 1)
      .next()
      .should('contain.text', '...')
      .should('have.data', 'index', '<...')

    cy.contains('.vs-pagination__button', 8)
      .next()
      .should('contain.text', '...')
      .should('have.data', 'index', '...>')
  })

  it('test pagination different shape', () => {
    const shapes = ['circle', 'square', 'compact', 'dotted'] as const
    shapes.forEach((shape) => {
      cy.mount(<VsPagination shape={shape} length={6} />)
      cy.get('.vs-pagination-content').should('have.class', shape)
    })
  })

  it('test pagination disable render', () => {
    const onUpdate = cy.spy().as('onUpdate')

    cy.mount(
      <VsPagination
        length={6}
        disabledItems={[1, 2]}
        onUpdate:modelValue={onUpdate}
      />
    )
    Array.from({ length: 6 }).forEach((_, index) => {
      cy.contains('.vs-pagination__button', index + 1).should('be.visible')
    })

    cy.contains('.vs-pagination__button', 1).should('be.disabled')
    cy.contains('.vs-pagination__button', 2).should('be.disabled')
  })

  it('test pagination loading render', () => {
    const onUpdate = cy.spy().as('onUpdate')

    cy.mount(
      <VsPagination
        length={6}
        loadingItems={[1, 2]}
        onUpdate:modelValue={onUpdate}
      />
    )
    Array.from({ length: 6 }).forEach((_, index) => {
      cy.contains('.vs-pagination__button', index + 1).should('be.visible')
    })

    cy.contains('.vs-pagination__button', 1).should('be.disabled')
    cy.contains('.vs-pagination__button', 2).should('be.disabled')
  })

  it('test pagination switch', () => {
    const length = 20
    const onUpdate = cy.spy().as('onUpdate')
    cy.mount(<VsPagination length={length} onUpdate:modelValue={onUpdate} />)
    Array.from({ length: length - 1 }).forEach((_, index) => {
      cy.get('button.next').click()
      cy.get('@onUpdate').should('be.calledWith', index + 2)
    })

    cy.mount(
      <VsPagination
        length={length}
        onUpdate:modelValue={onUpdate}
        modelValue={20}
      />
    )
    Array.from({ length: length - 1 }).forEach((_, index) => {
      cy.get('button.prev').click()
      cy.get('@onUpdate').should('be.calledWith', 20 - index)
    })
  })

  it('test pagination progress', () => {
    const length = 20
    const onUpdate = cy.spy().as('onUpdate')
    cy.mount(<VsPagination length={length} onUpdate:modelValue={onUpdate} />)
    Array.from({ length: length - 1 }).forEach((_, index) => {
      cy.get('button.next').click()
      cy.get('@onUpdate').should('be.calledWith', index + 2)
    })

    cy.mount(
      <VsPagination
        length={length}
        onUpdate:modelValue={onUpdate}
        modelValue={20}
      />
    )
    Array.from({ length: length - 1 }).forEach((_, index) => {
      cy.get('button.prev').click()
      cy.get('@onUpdate').should('be.calledWith', 20 - index)
    })
  })
})
