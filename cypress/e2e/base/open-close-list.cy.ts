import {
  classes,
  classesSelectors,
  inputArrowClick,
  outsideClick,
  treeselectClick,
  treeselectFocus,
  visitCypressDefaultPage
} from '../../helpers'

const { input: inputClass } = classes
const { input: inputSelector, list: listSelector } = classesSelectors

describe('open-close-list', () => {
  beforeEach(() => {
    visitCypressDefaultPage()
  })

  it('should open list on click', () => {
    treeselectClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')
  })

  it('should open list on arrow icon click', () => {
    inputArrowClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')
  })

  it('should close list on arrow icon click', () => {
    inputArrowClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')

    inputArrowClick()
    cy.get(inputSelector.base).should('not.have.class', inputClass.opened)
    cy.get(listSelector.base).should('not.exist')
  })

  it('should close list on click outside', () => {
    treeselectClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')

    outsideClick()
    cy.get(inputSelector.base).should('not.have.class', inputClass.opened)
    cy.get(listSelector.base).should('not.exist')
  })

  it('should not be opened on focus', () => {
    treeselectFocus()
    cy.get(inputSelector.base).should('have.class', inputClass.focused)
    cy.get(inputSelector.base).should('not.have.class', inputClass.opened)
    cy.get(listSelector.base).should('not.exist')
  })
})
