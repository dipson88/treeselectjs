import { classes, optionNames } from '../../helpers'

const { list: listClass } = classes

describe('check-uncheck-group', () => {
  beforeEach(() => {
    cy.visitBasePage()
    cy.clearClick()
    cy.treeselectClick()
    cy.expandAllGroups()
  })

  // Without sub groups
  it('should check group on group check (without sub groups)', () => {
    cy.getListItem(optionNames.FranceGroup)
      .click()
      .should('have.class', listClass.itemChecked)
      .should('have.class', listClass.itemFocused)
      .should('not.have.class', listClass.itemPartialChecked)

    cy.getListItem(optionNames.ParisItem).should('have.class', listClass.itemChecked)
    cy.getListItem(optionNames.LyonItem).should('have.class', listClass.itemChecked)
  })

  it('should uncheck group on group uncheck (without sub groups)', () => {
    cy.getListItem(optionNames.FranceGroup)
      .click()
      .should('have.class', listClass.itemChecked)
      .click()
      .should('not.have.class', listClass.itemChecked)

    cy.getListItem(optionNames.ParisItem).should('not.have.class', listClass.itemChecked)
    cy.getListItem(optionNames.LyonItem).should('not.have.class', listClass.itemChecked)
  })

  it('should partially check group on group partial check (without sub groups)', () => {
    cy.getListItem(optionNames.ParisItem)
      .click()
      .should('have.class', listClass.itemFocused)
      .should('have.class', listClass.itemChecked)

    cy.getListItem(optionNames.FranceGroup).should('have.class', listClass.itemPartialChecked)
  })

  it('should be partially checked when one item are unchecked', () => {
    cy.getListItem(optionNames.FranceGroup).click().should('have.class', listClass.itemChecked)

    cy.getListItem(optionNames.ParisItem).should('have.class', listClass.itemChecked)
    cy.getListItem(optionNames.LyonItem).should('have.class', listClass.itemChecked)

    cy.getListItem(optionNames.ParisItem).click().should('not.have.class', listClass.itemChecked)
    cy.getListItem(optionNames.FranceGroup).should('have.class', listClass.itemPartialChecked)
  })

  // With sub groups
  it('should check group on group check (with sub groups)', () => {
    cy.getListItem(optionNames.EnglandGroup)
      .click()
      .should('have.class', listClass.itemFocused)
      .should('have.class', listClass.itemChecked)

    cy.getListItem(optionNames.LondonGroup).should('have.class', listClass.itemChecked)
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemChecked)
    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemChecked)
    cy.getListItem(optionNames.BrightonItem).should('have.class', listClass.itemChecked)
  })

  it('should uncheck group on group uncheck (with sub groups)', () => {
    cy.getListItem(optionNames.EnglandGroup)
      .click()
      .should('have.class', listClass.itemChecked)
      .click()
      .should('not.have.class', listClass.itemChecked)

    cy.getListItem(optionNames.LondonGroup).should('not.have.class', listClass.itemChecked)
    cy.getListItem(optionNames.ChelseaItem).should('not.have.class', listClass.itemChecked)
    cy.getListItem(optionNames.WestEndItem).should('not.have.class', listClass.itemChecked)
    cy.getListItem(optionNames.BrightonItem).should('not.have.class', listClass.itemChecked)
  })

  it('should partially check group on group partial check (with sub groups)', () => {
    cy.getListItem(optionNames.LondonGroup)
      .click()
      .should('have.class', listClass.itemFocused)
      .should('have.class', listClass.itemChecked)

    cy.getListItem(optionNames.EnglandGroup).should('have.class', listClass.itemPartialChecked)
  })

  it('should be partially checked when one item are unchecked (with sub groups)', () => {
    cy.getListItem(optionNames.EnglandGroup).click().should('have.class', listClass.itemChecked)

    cy.getListItem(optionNames.LondonGroup).click()
    cy.getListItem(optionNames.EnglandGroup).should('have.class', listClass.itemPartialChecked)
  })

  it('should be partially checked when one sub group checked (with sub groups)', () => {
    cy.getListItem(optionNames.EnglandGroup).click().should('have.class', listClass.itemChecked)

    cy.getListItem(optionNames.BrightonItem).click()
    cy.getListItem(optionNames.EnglandGroup).should('have.class', listClass.itemPartialChecked)
  })
})
