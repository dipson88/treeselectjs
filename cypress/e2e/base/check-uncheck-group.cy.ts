import {
  classes,
  clearClick,
  expandAllGroups,
  titleSelectors,
  treeselectClick,
  visitCypressDefaultPage
} from '../../helpers'

const { list: listClass } = classes

describe('check-uncheck-group', () => {
  beforeEach(() => {
    visitCypressDefaultPage()
    clearClick()
    treeselectClick()
    expandAllGroups()
  })

  // Without sub groups
  it('should check group on group check (without sub groups)', () => {
    cy.get(titleSelectors.FranceGroup)
      .click()
      .should('have.class', listClass.itemChecked)
      .should('have.class', listClass.itemFocused)
      .should('not.have.class', listClass.itemPartialChecked)

    cy.get(titleSelectors.ParisItem).should('have.class', listClass.itemChecked)
    cy.get(titleSelectors.LyonItem).should('have.class', listClass.itemChecked)
  })

  it('should uncheck group on group uncheck (without sub groups)', () => {
    cy.get(titleSelectors.FranceGroup)
      .click()
      .should('have.class', listClass.itemChecked)
      .click()
      .should('not.have.class', listClass.itemChecked)

    cy.get(titleSelectors.ParisItem).should('not.have.class', listClass.itemChecked)
    cy.get(titleSelectors.LyonItem).should('not.have.class', listClass.itemChecked)
  })

  it('should partially check group on group partial check (without sub groups)', () => {
    cy.get(titleSelectors.ParisItem)
      .click()
      .should('have.class', listClass.itemFocused)
      .should('have.class', listClass.itemChecked)

    cy.get(titleSelectors.FranceGroup).should('have.class', listClass.itemPartialChecked)
  })

  it('should be partially checked when one item are unchecked', () => {
    cy.get(titleSelectors.FranceGroup).click().should('have.class', listClass.itemChecked)

    cy.get(titleSelectors.ParisItem).should('have.class', listClass.itemChecked)
    cy.get(titleSelectors.LyonItem).should('have.class', listClass.itemChecked)

    cy.get(titleSelectors.ParisItem).click().should('not.have.class', listClass.itemChecked)
    cy.get(titleSelectors.FranceGroup).should('have.class', listClass.itemPartialChecked)
  })

  // With sub groups
  it('should check group on group check (with sub groups)', () => {
    cy.get(titleSelectors.EnglandGroup)
      .click()
      .should('have.class', listClass.itemFocused)
      .should('have.class', listClass.itemChecked)

    cy.get(titleSelectors.LondonGroup).should('have.class', listClass.itemChecked)
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemChecked)
    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemChecked)
    cy.get(titleSelectors.BrightonItem).should('have.class', listClass.itemChecked)
  })

  it('should uncheck group on group uncheck (with sub groups)', () => {
    cy.get(titleSelectors.EnglandGroup)
      .click()
      .should('have.class', listClass.itemChecked)
      .click()
      .should('not.have.class', listClass.itemChecked)

    cy.get(titleSelectors.LondonGroup).should('not.have.class', listClass.itemChecked)
    cy.get(titleSelectors.ChelseaItem).should('not.have.class', listClass.itemChecked)
    cy.get(titleSelectors.WestEndItem).should('not.have.class', listClass.itemChecked)
    cy.get(titleSelectors.BrightonItem).should('not.have.class', listClass.itemChecked)
  })

  it('should partially check group on group partial check (with sub groups)', () => {
    cy.get(titleSelectors.LondonGroup)
      .click()
      .should('have.class', listClass.itemFocused)
      .should('have.class', listClass.itemChecked)

    cy.get(titleSelectors.EnglandGroup).should('have.class', listClass.itemPartialChecked)
  })

  it('should be partially checked when one item are unchecked (with sub groups)', () => {
    cy.get(titleSelectors.EnglandGroup).click().should('have.class', listClass.itemChecked)

    cy.get(titleSelectors.LondonGroup).click()
    cy.get(titleSelectors.EnglandGroup).should('have.class', listClass.itemPartialChecked)
  })

  it('should be partially checked when one sub group checked (with sub groups)', () => {
    cy.get(titleSelectors.EnglandGroup).click().should('have.class', listClass.itemChecked)

    cy.get(titleSelectors.BrightonItem).click()
    cy.get(titleSelectors.EnglandGroup).should('have.class', listClass.itemPartialChecked)
  })
})
