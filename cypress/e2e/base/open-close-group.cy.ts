import { classes, classesSelectors, titleSelectors, treeselectClick, visitCypressDefaultPage } from '../../helpers'

const { list: listClass } = classes
const { list: listSelector } = classesSelectors

describe('open-close-group', () => {
  beforeEach(() => {
    visitCypressDefaultPage()
  })

  it('should groups can be opened and closed', () => {
    // Open list
    treeselectClick()

    cy.get(titleSelectors.EnglandGroup).should('not.have.class', listClass.itemHidden)
    cy.get(titleSelectors.LondonGroup).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.BrightonItem).should('have.class', listClass.itemHidden)

    cy.get(titleSelectors.FranceGroup).should('not.have.class', listClass.itemHidden)
    cy.get(titleSelectors.ParisItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.LyonItem).should('have.class', listClass.itemHidden)

    // Open on England group
    cy.get(titleSelectors.EnglandGroup).find(listSelector.itemArrow).click()
    cy.get(titleSelectors.LondonGroup).should('not.have.class', listClass.itemHidden)
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.BrightonItem).should('have.not.class', listClass.itemHidden)

    // Open on France group
    cy.get(titleSelectors.FranceGroup).find(listSelector.itemArrow).click()
    cy.get(titleSelectors.ParisItem).should('have.not.class', listClass.itemHidden)
    cy.get(titleSelectors.LyonItem).should('have.not.class', listClass.itemHidden)

    // Open on London group
    cy.get(titleSelectors.LondonGroup).find(listSelector.itemArrow).click()
    cy.get(titleSelectors.ChelseaItem).should('have.not.class', listClass.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.not.class', listClass.itemHidden)

    // Close groups

    // Close London group
    cy.get(titleSelectors.LondonGroup).find(listSelector.itemArrow).click()
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemHidden)

    // Close France group
    cy.get(titleSelectors.FranceGroup).find(listSelector.itemArrow).click()
    cy.get(titleSelectors.ParisItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.LyonItem).should('have.class', listClass.itemHidden)

    // Close England group
    cy.get(titleSelectors.EnglandGroup).find(listSelector.itemArrow).click()
    cy.get(titleSelectors.LondonGroup).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.BrightonItem).should('have.class', listClass.itemHidden)
  })
})
