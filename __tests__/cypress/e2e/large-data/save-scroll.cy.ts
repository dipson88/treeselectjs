import { getList, outsideClick, treeselectClick, visitCypressLargeDataPage } from '../../helpers'

describe('save-scroll', () => {
  beforeEach(() => {
    visitCypressLargeDataPage()
    treeselectClick()
  })

  it('should render large data', () => {
    getList().should('exist')
  })

  it('should save scroll position', async () => {
    const middleSelector = '[title="Option 25"]'

    getList().scrollTo('center')
    cy.get(middleSelector).should('be.visible')

    cy.wait(100)
    outsideClick()
    cy.wait(100)

    treeselectClick()
    cy.get(middleSelector).should('be.visible')
  })
})
