import foto1 from './foto1.png'
import { VsButton, VsCard } from '@/components'

describe('Card', () => {
  it('test Card type-1 render', () => {
    cy.mount(
      <VsCard
        type="1"
        v-slots={{
          title: () => <h3>pot with a plant</h3>,
          img: () => <img src={foto1} />,
          text: () => (
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          ),
          interactions: () => (
            <>
              <VsButton color="danger" icon>
                <i class="bx bx-heart"></i>
              </VsButton>
              <VsButton class="btn-chat" shadow color="primary">
                <i class="bx bx-chat"></i>
                <span class="span">54</span>
              </VsButton>
            </>
          )
        }}
      ></VsCard>
    )
    cy.get('.vs-card-content').should('have.class', 'type-1')
    cy.get('.vs-card__img img').should('be.visible')
    cy.get('.vs-card__interactions button').should('be.visible')
    cy.contains('pot with a plant').should('be.visible')
    cy.contains(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    ).should('be.visible')
    cy.get('.vs-card').realHover()
    cy.get('.vs-card__img img').should(
      'have.css',
      'transform',
      'matrix(1.15, 0, 0, 1.15, 0, 0)'
    )
  })

  it('test Card type-2 render', () => {
    cy.mount(
      <VsCard
        type="2"
        v-slots={{
          title: () => <h3>pot with a plant</h3>,
          img: () => <img src={foto1} />,
          text: () => (
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          ),
          interactions: () => (
            <>
              <VsButton color="danger" icon>
                <i class="bx bx-heart"></i>
              </VsButton>
              <VsButton class="btn-chat" shadow color="primary">
                <i class="bx bx-chat"></i>
                <span class="span">54</span>
              </VsButton>
            </>
          )
        }}
      ></VsCard>
    )
    cy.get('.vs-card-content').should('have.class', 'type-2')
    cy.get('.vs-card__img img').should('be.visible')
    cy.get('.vs-card__interactions button').should('be.visible')
    cy.get('.vs-card').realHover()
    cy.contains('pot with a plant').should('be.visible')
    cy.contains(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    ).should('be.visible')
    cy.get('.vs-card__img img').should(
      'have.css',
      'transform',
      'matrix(1.15, 0, 0, 1.15, 0, 0)'
    )
    cy.get('.vs-card').should(
      'have.css',
      'transform',
      'matrix(0.95, 0, 0, 0.95, 0, 0)'
    )
  })

  it('test Card type-3 render', () => {
    cy.mount(
      <VsCard
        type="3"
        v-slots={{
          title: () => <h3>pot with a plant</h3>,
          img: () => <img src={foto1} />,
          text: () => (
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          ),
          interactions: () => (
            <>
              <VsButton color="danger" icon>
                <i class="bx bx-heart"></i>
              </VsButton>
              <VsButton class="btn-chat" shadow color="primary">
                <i class="bx bx-chat"></i>
                <span class="span">54</span>
              </VsButton>
            </>
          )
        }}
      ></VsCard>
    )
    cy.get('.vs-card-content').should('have.class', 'type-3')
    cy.get('.vs-card__img img').should('be.visible')
    cy.get('.vs-card__interactions button').should('be.visible')
    cy.contains('pot with a plant').should('be.visible')
    cy.contains(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    ).should('be.visible')
    cy.get('.vs-card').realHover()
    cy.get('.vs-card').should(
      'have.css',
      'transform',
      'matrix(1.04, 0, 0, 1.04, 0, 0)'
    )
  })

  it('test Card type-4 render', () => {
    cy.mount(
      <VsCard
        type="4"
        v-slots={{
          title: () => <h3>pot with a plant</h3>,
          img: () => <img src={foto1} />,
          text: () => (
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          ),
          interactions: () => (
            <>
              <VsButton color="danger" icon>
                <i class="bx bx-heart"></i>
              </VsButton>
              <VsButton class="btn-chat" shadow color="primary">
                <i class="bx bx-chat"></i>
                <span class="span">54</span>
              </VsButton>
            </>
          )
        }}
      ></VsCard>
    )
    cy.get('.vs-card-content').should('have.class', 'type-4')
    cy.get('.vs-card__img img').should('be.visible')
    cy.get('.vs-card__interactions button').should('be.visible')
    cy.contains('pot with a plant').should('be.visible')
    cy.contains(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    ).should('be.visible')
    cy.get('.vs-card').realHover()
    cy.get('.vs-card').should(
      'have.css',
      'transform',
      'matrix(1, 0, 0, 1, 0, -5)'
    )
    cy.get('.vs-card__img img').should(
      'have.css',
      'transform',
      'matrix(1, 0, 0, 1, 0, 0)'
    )
  })

  it('test Card type-5 render', () => {
    cy.mount(
      <VsCard
        type="5"
        v-slots={{
          title: () => <h3>pot with a plant</h3>,
          img: () => <img src={foto1} />,
          text: () => (
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          ),
          interactions: () => (
            <>
              <VsButton color="danger" icon>
                <i class="bx bx-heart"></i>
              </VsButton>
              <VsButton class="btn-chat" shadow color="primary">
                <i class="bx bx-chat"></i>
                <span class="span">54</span>
              </VsButton>
            </>
          )
        }}
      ></VsCard>
    )
    cy.get('.vs-card-content').should('have.class', 'type-5')
    cy.get('.vs-card__img img').should('be.visible')
    cy.get('.vs-card__interactions button').should('be.visible')
    cy.get('.vs-card').realHover()
    cy.contains('pot with a plant').should('be.visible')
    cy.contains(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    ).should('be.visible')
    cy.get('.vs-card__img img').should(
      'have.css',
      'transform',
      'matrix(1.1, 0, 0, 1.1, 0, 0)'
    )
    cy.get('.vs-card__interactions').should('have.css', 'bottom', '50px')
    cy.get('.vs-card__text')
      .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)')
      .and('have.css', 'opacity', '1')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.05) 0px 0px 30px 0px')
  })
})
