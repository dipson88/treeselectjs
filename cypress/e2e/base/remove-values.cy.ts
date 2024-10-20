import {
  classesSelectors,
  clearClick,
  getTagsElements,
  treeselectClick,
  treeselectFocus,
  treeselectType,
  visitCypressDefaultPage
} from '../../helpers'

const { parent: parentSelector, list: listSelector } = classesSelectors

describe('remove-values', () => {
  beforeEach(() => {
    visitCypressDefaultPage()
  })

  it('should remove values on clear click', () => {
    treeselectClick()
    clearClick()

    cy.get(parentSelector).find(listSelector.itemChecked).should('not.exist')
    cy.get(parentSelector).find(listSelector.itemPartialChecked).should('not.exist')
  })

  it('should remove values on tag click', () => {
    treeselectClick()
    getTagsElements().should('have.length', 2)

    getTagsElements().first().click()
    getTagsElements().should('have.length', 1)
  })

  it('should not open list on clear click', () => {
    treeselectFocus()
    clearClick()

    cy.get(parentSelector).find(listSelector.base).should('not.exist')
  })

  it('should remove values on Backspace key', () => {
    treeselectClick()
    getTagsElements().should('have.length', 2)

    treeselectType('{backspace}')
    getTagsElements().should('have.length', 1)

    treeselectType('{backspace}')
    getTagsElements().should('have.length', 0)

    cy.get(listSelector.itemChecked).should('have.length', 0)
    cy.get(listSelector.itemPartialChecked).should('have.length', 0)
  })

  it('should not open list on Backspace key', () => {
    treeselectFocus()
    treeselectType('{backspace}')

    cy.get(parentSelector).find(listSelector.base).should('not.exist')
  })
})
