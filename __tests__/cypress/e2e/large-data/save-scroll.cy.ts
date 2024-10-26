describe('save-scroll', () => {
  beforeEach(() => {
    cy.visitLargeDataPage()
    cy.treeselectClick()
  })

  it('should render large data', () => {
    cy.getList().should('exist')
  })

  it('should save scroll position', async () => {
    const middleSelector = '[title="Option 25"]'

    cy.getList().scrollTo('center')
    cy.get(middleSelector).should('be.visible')

    cy.wait(100)
    cy.outsideClick()
    cy.wait(100)

    cy.treeselectClick()
    cy.get(middleSelector).should('be.visible')
  })
})
