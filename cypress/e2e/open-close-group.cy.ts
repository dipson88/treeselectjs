/// <reference types="cypress" />
import { titleSelectors, classes } from '../helpers'

const { parent, list } = classes
const selector = {
  parent: `.${parent}`,
  list: `.${list.base}`
}

describe('open-close-group', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/app/cypress/cypress-test.html')
  })

  it('should groups can be opened and closed', () => {
    // Open list
    cy.get(selector.parent).click()
    cy.get(selector.list).should('exist')

    cy.get(titleSelectors.EnglandGroup).should('not.have.class', list.itemHidden)
    cy.get(titleSelectors.LondonGroup).should('have.class', list.itemHidden)
    cy.get(titleSelectors.ChelseaItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.BrightonItem).should('have.class', list.itemHidden)

    cy.get(titleSelectors.FranceGroup).should('not.have.class', list.itemHidden)
    cy.get(titleSelectors.ParisItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.LyonItem).should('have.class', list.itemHidden)

    // Open on England group
    cy.get(titleSelectors.EnglandGroup).find(`.${list.itemArrow}`).click()
    cy.get(titleSelectors.LondonGroup).should('not.have.class', list.itemHidden)
    cy.get(titleSelectors.ChelseaItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.BrightonItem).should('have.not.class', list.itemHidden)

    // Open on France group
    cy.get(titleSelectors.FranceGroup).find(`.${list.itemArrow}`).click()
    cy.get(titleSelectors.ParisItem).should('have.not.class', list.itemHidden)
    cy.get(titleSelectors.LyonItem).should('have.not.class', list.itemHidden)

    // Open on London group
    cy.get(titleSelectors.LondonGroup).find(`.${list.itemArrow}`).click()
    cy.get(titleSelectors.ChelseaItem).should('have.not.class', list.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.not.class', list.itemHidden)

    // Close groups

    // Close London group
    cy.get(titleSelectors.LondonGroup).find(`.${list.itemArrow}`).click()
    cy.get(titleSelectors.ChelseaItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', list.itemHidden)

    // Close France group
    cy.get(titleSelectors.FranceGroup).find(`.${list.itemArrow}`).click()
    cy.get(titleSelectors.ParisItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.LyonItem).should('have.class', list.itemHidden)

    // Close England group
    cy.get(titleSelectors.EnglandGroup).find(`.${list.itemArrow}`).click()
    cy.get(titleSelectors.LondonGroup).should('have.class', list.itemHidden)
    cy.get(titleSelectors.ChelseaItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', list.itemHidden)
    cy.get(titleSelectors.BrightonItem).should('have.class', list.itemHidden)
  })
})
