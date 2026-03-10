import { classes, classesSelectors, optionNames } from '../../helpers'

const { list: listClass } = classes
const { list: listSelector } = classesSelectors

describe('open-close-group', () => {
  beforeEach(() => {
    cy.visitBasePage()
  })

  it('should groups can be opened and closed', () => {
    // Open list
    cy.treeselectClick()

    cy.getListItem(optionNames.EnglandGroup).should('not.have.class', listClass.itemHidden)
    cy.getListItem(optionNames.LondonGroup).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.BrightonItem).should('have.class', listClass.itemHidden)

    cy.getListItem(optionNames.FranceGroup).should('not.have.class', listClass.itemHidden)
    cy.getListItem(optionNames.ParisItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.LyonItem).should('have.class', listClass.itemHidden)

    // Open on England group
    cy.getListItem(optionNames.EnglandGroup).find(listSelector.itemArrow).click()
    cy.getListItem(optionNames.LondonGroup).should('not.have.class', listClass.itemHidden)
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.BrightonItem).should('have.not.class', listClass.itemHidden)

    // Open on France group
    cy.getListItem(optionNames.FranceGroup).find(listSelector.itemArrow).click()
    cy.getListItem(optionNames.ParisItem).should('have.not.class', listClass.itemHidden)
    cy.getListItem(optionNames.LyonItem).should('have.not.class', listClass.itemHidden)

    // Open on London group
    cy.getListItem(optionNames.LondonGroup).find(listSelector.itemArrow).click()
    cy.getListItem(optionNames.ChelseaItem).should('have.not.class', listClass.itemHidden)
    cy.getListItem(optionNames.WestEndItem).should('have.not.class', listClass.itemHidden)

    // Close groups

    // Close London group
    cy.getListItem(optionNames.LondonGroup).find(listSelector.itemArrow).click()
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemHidden)

    // Close France group
    cy.getListItem(optionNames.FranceGroup).find(listSelector.itemArrow).click()
    cy.getListItem(optionNames.ParisItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.LyonItem).should('have.class', listClass.itemHidden)

    // Close England group
    cy.getListItem(optionNames.EnglandGroup).find(listSelector.itemArrow).click()
    cy.getListItem(optionNames.LondonGroup).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.BrightonItem).should('have.class', listClass.itemHidden)
  })
})
