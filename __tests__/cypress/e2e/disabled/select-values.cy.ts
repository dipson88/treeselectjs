import {
  classes,
  clearClick,
  expandAllGroups,
  getInput,
  titleSelectors,
  treeselectClick,
  treeselectType,
  visitCypressDisabledPage
} from '../../helpers'

const { list: listClasses } = classes

describe('select-value', () => {
  beforeEach(() => {
    visitCypressDisabledPage()
    clearClick()
    treeselectClick()
    expandAllGroups()
  })

  it('should render disabled elements', () => {
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClasses.itemDisabled)
    cy.get(titleSelectors.FranceGroup).should('have.class', listClasses.itemDisabled)
    cy.get(titleSelectors.ParisItem).should('have.class', listClasses.itemDisabled)
    cy.get(titleSelectors.LyonItem).should('have.class', listClasses.itemDisabled)
  })

  it('should not select disabled element on group click', () => {
    cy.get(titleSelectors.EnglandGroup).click()
    getInput().should('contain', 'Brighton').should('contain', 'West End').should('not.contain', 'Chelsea')
  })

  it('should not select disabled element on item click', () => {
    cy.get(titleSelectors.ChelseaItem).click().should('not.have.class', listClasses.itemChecked)
    getInput().should('not.contain', 'Chelsea')
  })

  it('should not select disabled element on group click', () => {
    cy.get(titleSelectors.FranceGroup).click()
    getInput().should('not.contain', 'France').should('not.contain', 'Paris').should('not.contain', 'Lyon')
  })

  it('should not select disabled element on Enter key', () => {
    cy.get(titleSelectors.ChelseaItem).trigger('mouseover').should('have.class', listClasses.itemFocused)

    treeselectType('{enter}')

    getInput().should('not.contain', 'Chelsea')
  })
})
