import {
  clearClick,
  expandAllGroups,
  getInput,
  getList,
  titleSelectors,
  treeselectClick,
  visitCypressSinglePage
} from '../../helpers'

describe('select-value', () => {
  beforeEach(() => {
    visitCypressSinglePage()
    clearClick()
    treeselectClick()
    expandAllGroups()
  })

  it('should select one element on click', () => {
    cy.get(titleSelectors.BrightonItem).click()
    getInput().should('contain', 'Brighton')
  })

  it('should not unselect selected element on click', () => {
    cy.get(titleSelectors.BrightonItem).click()
    cy.get(titleSelectors.BrightonItem).click()
    getInput().should('contain', 'Brighton')
  })

  it('should select group on click', () => {
    cy.get(titleSelectors.LondonGroup).click()
    getInput().should('contain', 'London')
  })

  it('should close list on select', () => {
    cy.get(titleSelectors.BrightonItem).click()
    getList().should('not.exist')
  })
})
