/// <reference types="cypress" />
import { classes } from '../helpers'

const { parent, input, list } = classes
const selector = {
  parent: `.${parent}`,
  input: `.${input.base}`,
  list: `.${list.base}`,
  arrow: `.${input.arrow}`
}

describe('open-close-list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/app/cypress/cypress-test.html')
  })

  it('should open list on click', () => {
    cy.get(selector.parent).click()
    cy.get(selector.input).should('have.class', input.opened)
    cy.get(selector.list).should('exist')
  })

  it('should open list on arrow icon click', () => {
    cy.get(selector.arrow).click()
    cy.get(selector.input).should('have.class', input.opened)
    cy.get(selector.list).should('exist')
  })

  it('should close list on arrow icon click', () => {
    cy.get(selector.parent).click()
    cy.get(selector.input).should('have.class', input.opened)
    cy.get(selector.list).should('exist')

    cy.get(selector.arrow).click()
    cy.get(selector.input).should('not.have.class', input.opened)
    cy.get(selector.list).should('not.exist')
  })

  it('should close list on click outside', () => {
    cy.get(selector.parent).click()
    cy.get(selector.input).should('have.class', input.opened)
    cy.get(selector.list).should('exist')

    cy.get('body').click()
    cy.get(selector.input).should('not.have.class', input.opened)
    cy.get(selector.list).should('not.exist')
  })

  it('should open/close list on Space key', () => {
    cy.get(selector.parent).click()
    cy.get(selector.input).should('have.class', input.opened)
    cy.get(selector.list).should('exist')

    cy.get(selector.parent).type('{ }')
    cy.get(selector.input).should('not.have.class', input.opened)
    cy.get(selector.list).should('not.exist')

    cy.get(selector.parent).type('{ }')
    cy.get(selector.input).should('have.class', input.opened)
    cy.get(selector.list).should('exist')
  })

  it('should not be opened on focus', () => {
    cy.get(selector.parent).find('input').focus()
    cy.get(selector.input).should('have.class', input.focused)
    cy.get(selector.input).should('not.have.class', input.opened)
    cy.get(selector.list).should('not.exist')
  })
})
