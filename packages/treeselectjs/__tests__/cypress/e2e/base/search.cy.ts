import { classes, classesSelectors, optionNames } from '../../helpers'

const { list: listClass } = classes
const { list: listSelectors } = classesSelectors

describe('check-uncheck-group', () => {
  beforeEach(() => {
    cy.visitBasePage()
    cy.clearClick()
    cy.treeselectClick()
  })

  it('should open list on search', () => {
    cy.outsideClick()
    cy.getList().should('not.exist')

    cy.treeselectType('Paris')
    cy.getList().should('exist')
  })

  it('should filter and show items on search', () => {
    cy.treeselectType('Chel')

    cy.getListItem(optionNames.EnglandGroup).should('not.have.class', listClass.itemHidden)
    cy.getListItem(optionNames.LondonGroup).should('not.have.class', listClass.itemHidden)
    cy.getListItem(optionNames.ChelseaItem).should('not.have.class', listClass.itemHidden)

    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.BrightonItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.FranceGroup).should('have.class', listClass.itemHidden)

    cy.getInput().find('input').should('have.value', 'Chel')
  })

  it('should clear search on blur', () => {
    cy.treeselectType('Paris')

    cy.getListItem(optionNames.ParisItem).should('not.have.class', listClass.itemHidden)
    cy.outsideClick()
    cy.getInput().find('input').should('have.value', '')
  })

  it('should show no results message', () => {
    cy.get(listSelectors.empty).should('not.be.visible')
    cy.treeselectType('No results')
    cy.get(listSelectors.empty).should('be.visible')
  })
})
