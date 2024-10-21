import {
  classes,
  clearClick,
  getInput,
  getList,
  outsideClick,
  titleSelectors,
  treeselectClick,
  treeselectType,
  visitCypressDefaultPage
} from '../../helpers'

const { list: listClass } = classes

describe('check-uncheck-group', () => {
  beforeEach(() => {
    visitCypressDefaultPage()
    clearClick()
    treeselectClick()
  })

  it('should open list on search', () => {
    outsideClick()
    getList().should('not.exist')

    treeselectType('Paris')
    getList().should('exist')
  })

  it('should filter and show items on search', () => {
    treeselectType('Chel')

    cy.get(titleSelectors.EnglandGroup).should('not.have.class', listClass.itemHidden)
    cy.get(titleSelectors.LondonGroup).should('not.have.class', listClass.itemHidden)
    cy.get(titleSelectors.ChelseaItem).should('not.have.class', listClass.itemHidden)

    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.BrightonItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.FranceGroup).should('have.class', listClass.itemHidden)

    getInput().find('input').should('have.value', 'Chel')
  })

  it('should clear search on blur', () => {
    treeselectType('Paris')

    cy.get(titleSelectors.ParisItem).should('not.have.class', listClass.itemHidden)
    outsideClick()
    getInput().find('input').should('have.value', '')
  })
})
