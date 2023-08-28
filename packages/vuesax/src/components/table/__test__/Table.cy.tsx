import { VsTable, VsTd, VsTh, VsTr } from '@/components'

const data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net'
  }
]

describe('Table', () => {
  it('test table basic render', () => {
    cy.mount(
      <VsTable
        v-slots={{
          header: () => <h1>Table header</h1>,
          thead: () => (
            <VsTr>
              <VsTh>Id</VsTh>
              <VsTh>Name</VsTh>
              <VsTh>Email</VsTh>
            </VsTr>
          ),
          tbody: () =>
            data.map(({ username, email, id }) => (
              <VsTr>
                <VsTd checkbox>{id}</VsTd>
                <VsTd>{username}</VsTd>
                <VsTd>{email}</VsTd>
              </VsTr>
            )),
          footer: () => <span>footer</span>
        }}
      ></VsTable>
    )

    cy.contains('.vs-table__header', 'Table header').should('be.visible')
    cy.contains('.vs-table__th', 'Id').should('be.visible')
    cy.contains('.vs-table__th', 'Name').should('be.visible')
    cy.contains('.vs-table__th', 'Email').should('be.visible')

    data.forEach(({ username, email, id }) => {
      cy.contains('.vs-table__td', username).should('be.visible')
      cy.contains('.vs-table__td', email).should('be.visible')
      cy.contains('.vs-table__td', id).should('be.visible')
    })

    cy.contains('.vs-table__footer', 'footer').should('be.visible')
  })

  it('test table expand', () => {
    cy.mount(
      <VsTable
        v-slots={{
          header: () => <h1>Table header</h1>,
          thead: () => (
            <VsTr>
              <VsTh>Id</VsTh>
              <VsTh>Name</VsTh>
              <VsTh>Email</VsTh>
            </VsTr>
          ),
          tbody: () =>
            data.map(({ username, email, id }) => (
              <VsTr
                v-slots={{ expand: () => <h1>Expand content</h1> }}
                expand={id === 1}
              >
                <VsTd>{id}</VsTd>
                <VsTd>{username}</VsTd>
                <VsTd>{email}</VsTd>
              </VsTr>
            )),
          footer: () => <span>footer</span>
        }}
      ></VsTable>
    )

    cy.contains('.vs-table__td', '1')
      .parent()
      .next()
      .contains('h1', 'Expand')
      .should('be.visible')
  })

  it('test table striped', () => {
    cy.mount(
      <VsTable
        striped
        v-slots={{
          header: () => <h1>Table header</h1>,
          thead: () => (
            <VsTr>
              <VsTh>Id</VsTh>
              <VsTh>Name</VsTh>
              <VsTh>Email</VsTh>
            </VsTr>
          ),
          tbody: () =>
            data.map(({ username, email, id }) => (
              <VsTr v-slots={{ expand: () => <h1>Expand content</h1> }}>
                <VsTd>{id}</VsTd>
                <VsTd>{username}</VsTd>
                <VsTd>{email}</VsTd>
              </VsTr>
            )),
          footer: () => <span>footer</span>
        }}
      ></VsTable>
    )

    cy.get('.vs-table__tr:nth-child(2n)').should(
      'have.css',
      'background-color',
      'rgb(249, 252, 253)'
    )
  })
})
