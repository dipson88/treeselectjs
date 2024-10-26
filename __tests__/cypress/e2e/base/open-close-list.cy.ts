import { classes, classesSelectors } from '../../helpers'

const { input: inputClass } = classes
const { input: inputSelector, list: listSelector } = classesSelectors

describe('open-close-list', () => {
  beforeEach(() => {
    cy.visitBasePage()
  })

  it('should open list on click', () => {
    cy.treeselectClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')
  })

  it('should open list on arrow icon click', () => {
    cy.inputArrowClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')
  })

  it('should close list on arrow icon click', () => {
    cy.inputArrowClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')

    cy.inputArrowClick()
    cy.get(inputSelector.base).should('not.have.class', inputClass.opened)
    cy.get(listSelector.base).should('not.exist')
  })

  it('should close list on click outside', () => {
    cy.treeselectClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')

    cy.outsideClick()
    cy.get(inputSelector.base).should('not.have.class', inputClass.opened)
    cy.get(listSelector.base).should('not.exist')
  })

  it('should not be opened on focus', () => {
    cy.treeselectFocus()
    cy.get(inputSelector.base).should('have.class', inputClass.focused)
    cy.get(inputSelector.base).should('not.have.class', inputClass.opened)
    cy.get(listSelector.base).should('not.exist')
  })
})
