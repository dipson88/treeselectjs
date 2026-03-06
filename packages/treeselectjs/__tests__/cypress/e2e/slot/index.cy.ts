import { classesSelectors } from '../../helpers'

const { list: listSelectors } = classesSelectors

describe('slot', () => {
  beforeEach(() => {
    cy.visitSlotPage()
    cy.clearClick()
    cy.treeselectClick()
  })

  it('should be opened after slot click', () => {
    cy.get('.treeselect-demo-slot__slot').should('exist')
    cy.get('.treeselect-demo-slot__slot').click()
    cy.get(listSelectors.base).should('exist')
  })

  it('should be opened after btn slot click', () => {
    cy.get('.treeselect-demo-slot__slot-btn').should('exist')
    cy.get('.treeselect-demo-slot__slot-btn').click()
    cy.get(listSelectors.base).should('exist')
  })
})
