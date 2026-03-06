import { classes, classesSelectors, optionNames } from '../../helpers'

const { input: inputClass } = classes
const { parent: parentSelector, input: inputSelector, list: listSelector } = classesSelectors

describe('shadow-root-base-open-close-list', () => {
  const shadowTreeselectClick = () => {
    cy.getShadowRoot().find(parentSelector).click()
  }

  const findFranceGroup = () => {
    return cy.getShadowRoot().find(`[title="${optionNames.FranceGroup}"]`)
  }

  beforeEach(() => {
    cy.visitShadowRootPage()
  })

  it('should open list on click', () => {
    shadowTreeselectClick()
    cy.getShadowRoot().find(inputSelector.base).should('have.class', inputClass.opened)
    cy.getShadowRoot().find(listSelector.base).should('exist')
  })

  it('should not close list on select group', () => {
    shadowTreeselectClick()
    findFranceGroup().click()
    cy.getShadowRoot().find(inputSelector.base).should('have.class', inputClass.opened)
    cy.getShadowRoot().find(listSelector.base).should('exist')
  })

  it('should not close list on open and close group', () => {
    shadowTreeselectClick()
    findFranceGroup().find(listSelector.itemArrow).click()
    findFranceGroup().find(listSelector.itemArrow).click()
    cy.getShadowRoot().find(inputSelector.base).should('have.class', inputClass.opened)
    cy.getShadowRoot().find(listSelector.base).should('exist')
  })
})
