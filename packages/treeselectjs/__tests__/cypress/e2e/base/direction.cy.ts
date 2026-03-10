import { classes } from '../../helpers'

const { input: inputClass, list: listClass } = classes

describe('direction', () => {
  beforeEach(() => {
    cy.visitBasePage()
    cy.clearClick()
    cy.treeselectClick()
    cy.expandAllGroups()
  })

  afterEach(() => {
    cy.outsideClick()
    cy.get('body').invoke('css', 'padding-top', '0').invoke('css', 'padding-bottom', '0')
  })

  it('should open list to the bottom if there is enough space', () => {
    cy.getList().should('have.class', listClass.bottom)
  })

  it('should open list to the top if there is not enough space', () => {
    cy.get('body').invoke('css', 'padding-top', '400px').invoke('css', 'padding-bottom', '400px')
    cy.scrollTo('bottom')
    cy.getList().should('have.class', listClass.bottom)
    cy.getInput().should('have.class', inputClass.bottom)

    cy.scrollTo('top')
    cy.getList().should('have.class', listClass.top)
    cy.getInput().should('have.class', inputClass.top)
  })
})
