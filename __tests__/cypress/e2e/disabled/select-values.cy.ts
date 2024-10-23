import { classes, optionNames } from '../../helpers'

const { list: listClasses } = classes

describe('select-value', () => {
  beforeEach(() => {
    cy.visitDisabledPage()
    cy.clearClick()
    cy.treeselectClick()
    cy.expandAllGroups()
  })

  it('should render disabled elements', () => {
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClasses.itemDisabled)
    cy.getListItem(optionNames.FranceGroup).should('have.class', listClasses.itemDisabled)
    cy.getListItem(optionNames.ParisItem).should('have.class', listClasses.itemDisabled)
    cy.getListItem(optionNames.LyonItem).should('have.class', listClasses.itemDisabled)
  })

  it('should not select disabled element on group click', () => {
    cy.getListItem(optionNames.EnglandGroup).click()
    cy.getInput().should('contain', 'Brighton').should('contain', 'West End').should('not.contain', 'Chelsea')
  })

  it('should not select disabled element on item click', () => {
    cy.getListItem(optionNames.ChelseaItem).click().should('not.have.class', listClasses.itemChecked)
    cy.getInput().should('not.contain', 'Chelsea')
  })

  it('should not select disabled element on group click', () => {
    cy.getListItem(optionNames.FranceGroup).click()
    cy.getInput().should('not.contain', 'France').should('not.contain', 'Paris').should('not.contain', 'Lyon')
  })

  it('should not select disabled element on Enter key', () => {
    cy.getListItem(optionNames.ChelseaItem).trigger('mouseover').should('have.class', listClasses.itemFocused)

    cy.treeselectType('{enter}')

    cy.getInput().should('not.contain', 'Chelsea')
  })
})
