import {
  clearClick,
  expandAllGroups,
  getTagsElements,
  titleSelectors,
  treeselectClick,
  visitCypressDefaultPage
} from '../../helpers'

describe('input-tags-values', () => {
  beforeEach(() => {
    visitCypressDefaultPage()
    clearClick()
    treeselectClick()
    expandAllGroups()
  })

  it('should show group tag on group click', () => {
    cy.get(titleSelectors.EnglandGroup).click()
    getTagsElements().should('have.length', 1).should('contain', 'England')
  })

  it('should show item tag on item click', () => {
    cy.get(titleSelectors.BrightonItem).click()
    getTagsElements().should('have.length', 1).should('contain', 'Brighton')
  })

  it('should show sub group tag on sub group click', () => {
    cy.get(titleSelectors.LondonGroup).click()
    getTagsElements().should('have.length', 1).should('contain', 'London')
  })

  it('should show all tags on groups click', () => {
    cy.get(titleSelectors.EnglandGroup).click()
    cy.get(titleSelectors.FranceGroup).click()
    getTagsElements().should('have.length', 2).should('contain', 'England').should('contain', 'France')
  })
})
