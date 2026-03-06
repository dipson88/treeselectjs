import { optionNames } from '../../helpers'

describe('select-value', () => {
  beforeEach(() => {
    cy.visitSinglePage()
    cy.clearClick()
    cy.treeselectClick()
    cy.expandAllGroups()
  })

  it('should select one element on click', () => {
    cy.getListItem(optionNames.BrightonItem).click()
    cy.getInput().should('contain', 'Brighton')
  })

  it('should not unselect selected element on click', () => {
    cy.getListItem(optionNames.BrightonItem).click()
    cy.getListItem(optionNames.BrightonItem).click()
    cy.getInput().should('contain', 'Brighton')
  })

  it('should select group on click', () => {
    cy.getListItem(optionNames.LondonGroup).click()
    cy.getInput().should('contain', 'London')
  })

  it('should close list on select', () => {
    cy.getListItem(optionNames.BrightonItem).click()
    cy.getList().should('not.exist')
  })
})
