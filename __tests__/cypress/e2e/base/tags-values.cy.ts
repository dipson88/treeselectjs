import { optionNames } from '../../helpers'

describe('input-tags-values', () => {
  beforeEach(() => {
    cy.visitBasePage()
    cy.clearClick()
    cy.treeselectClick()
    cy.expandAllGroups()
  })

  it('should show group tag on group click', () => {
    cy.getListItem(optionNames.EnglandGroup).click()
    cy.getTagsElements().should('have.length', 1).should('contain', 'England')
  })

  it('should show item tag on item click', () => {
    cy.getListItem(optionNames.BrightonItem).click()
    cy.getTagsElements().should('have.length', 1).should('contain', 'Brighton')
  })

  it('should show sub group tag on sub group click', () => {
    cy.getListItem(optionNames.LondonGroup).click()
    cy.getTagsElements().should('have.length', 1).should('contain', 'London')
  })

  it('should show all tags on groups click', () => {
    cy.getListItem(optionNames.EnglandGroup).click()
    cy.getListItem(optionNames.FranceGroup).click()
    cy.getTagsElements().should('have.length', 2).should('contain', 'England').should('contain', 'France')
  })
})
