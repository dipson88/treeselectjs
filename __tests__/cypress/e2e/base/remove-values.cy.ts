import { classesSelectors } from '../../helpers'

const { parent: parentSelector, list: listSelector } = classesSelectors

describe('remove-values', () => {
  beforeEach(() => {
    cy.visitBasePage()
  })

  it('should remove values on clear click', () => {
    cy.treeselectClick()
    cy.clearClick()

    cy.get(parentSelector).find(listSelector.itemChecked).should('not.exist')
    cy.get(parentSelector).find(listSelector.itemPartialChecked).should('not.exist')
  })

  it('should remove values on tag click', () => {
    cy.treeselectClick()
    cy.getTagsElements().should('have.length', 2)

    cy.getTagsElements().first().click()
    cy.getTagsElements().should('have.length', 1)
  })

  it('should not open list on clear click', () => {
    cy.treeselectFocus()
    cy.clearClick()

    cy.get(parentSelector).find(listSelector.base).should('not.exist')
  })

  it('should not open list on Backspace key', () => {
    cy.treeselectFocus()
    cy.treeselectType('{backspace}')

    cy.get(parentSelector).find(listSelector.base).should('not.exist')
  })
})
