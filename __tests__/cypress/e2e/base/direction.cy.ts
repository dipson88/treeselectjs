import {
  classes,
  clearClick,
  expandAllGroups,
  getInput,
  getList,
  treeselectClick,
  visitCypressDefaultPage
} from '../../helpers'

const { input: inputClass, list: listClass } = classes

describe('direction', () => {
  beforeEach(() => {
    visitCypressDefaultPage()
    clearClick()
    treeselectClick()
    expandAllGroups()
  })

  it('should open list to the bottom if there is enough space', () => {
    getList().should('have.class', listClass.bottom)
  })

  it('should open list to the top if there is not enough space', () => {
    cy.get('body').invoke('css', 'padding-top', '400px').invoke('css', 'padding-bottom', '400px')
    cy.scrollTo('bottom')
    getList().should('have.class', listClass.bottom)
    getInput().should('have.class', inputClass.bottom)

    cy.scrollTo('top')
    getList().should('have.class', listClass.top)
    getInput().should('have.class', inputClass.top)
  })
})
