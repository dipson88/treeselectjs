import {
  classes,
  classesSelectors,
  clearClick,
  getTagsElements,
  titleSelectors,
  treeselectClick,
  treeselectType,
  visitCypressDefaultPage
} from '../../helpers'

const { input: inputClass, list: listClass } = classes
const { input: inputSelector, list: listSelector } = classesSelectors

describe('keyboard', () => {
  beforeEach(() => {
    visitCypressDefaultPage()
    // clearClick()
    // treeselectClick()
    // expandAllGroups()
  })

  it('should open/close list on Space key', () => {
    treeselectClick()
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')

    treeselectType('{ }')
    cy.get(inputSelector.base).should('not.have.class', inputClass.opened)
    cy.get(listSelector.base).should('not.exist')

    treeselectType('{ }')
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')
  })

  it('should remove values on Backspace key', () => {
    treeselectClick()
    getTagsElements().should('have.length', 2)

    treeselectType('{backspace}')
    getTagsElements().should('have.length', 1)

    treeselectType('{backspace}')
    getTagsElements().should('have.length', 0)

    cy.get(listSelector.itemChecked).should('have.length', 0)
    cy.get(listSelector.itemPartialChecked).should('have.length', 0)
  })

  it('should select/unselect first item on Enter key', () => {
    treeselectClick()
    clearClick()

    cy.get(titleSelectors.EnglandGroup).should('not.have.class', listClass.itemChecked)
    getTagsElements().should('have.length', 0)

    treeselectType('{enter}')
    cy.get(titleSelectors.EnglandGroup).should('have.class', listClass.itemChecked)
    getTagsElements().should('have.length', 1)

    treeselectType('{enter}')
    cy.get(titleSelectors.EnglandGroup).should('not.have.class', listClass.itemChecked)
    getTagsElements().should('have.length', 0)
  })

  it('should change group on ArrowDown/ArrowUp keys', () => {
    treeselectClick()
    clearClick()
    treeselectType('{downarrow}')
    cy.get(titleSelectors.FranceGroup).should('have.class', listClass.itemFocused)

    treeselectType('{downarrow}')
    cy.get(titleSelectors.EnglandGroup).should('have.class', listClass.itemFocused)

    treeselectType('{uparrow}')
    cy.get(titleSelectors.FranceGroup).should('have.class', listClass.itemFocused)

    treeselectType('{uparrow}')
    cy.get(titleSelectors.EnglandGroup).should('have.class', listClass.itemFocused)
  })

  it('should open/close group on ArrowRight/ArrowLeft keys', () => {
    treeselectClick()
    clearClick()
    cy.get(titleSelectors.LondonGroup).should('have.class', listClass.itemHidden)

    treeselectType('{rightarrow}')
    cy.get(titleSelectors.LondonGroup).should('not.have.class', listClass.itemHidden)

    treeselectType('{leftarrow}')
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemHidden)
  })

  it('should run full keyboard navigation', () => {
    treeselectClick()
    clearClick()

    cy.get(titleSelectors.EnglandGroup).should('have.class', listClass.itemFocused)

    treeselectType('{rightarrow}')
    cy.get(titleSelectors.LondonGroup).should('not.have.class', listClass.itemHidden)
    cy.get(titleSelectors.BrightonItem).should('not.have.class', listClass.itemHidden)

    treeselectType('{downarrow}')
    cy.get(titleSelectors.LondonGroup).should('have.class', listClass.itemFocused)

    treeselectType('{rightarrow}')
    cy.get(titleSelectors.ChelseaItem).should('not.have.class', listClass.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('not.have.class', listClass.itemHidden)

    treeselectType('{downarrow}')
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemFocused)

    treeselectType('{downarrow}')
    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemFocused)

    treeselectType('{downarrow}')
    cy.get(titleSelectors.BrightonItem).should('have.class', listClass.itemFocused)

    treeselectType('{downarrow}')
    cy.get(titleSelectors.FranceGroup).should('have.class', listClass.itemFocused)

    treeselectType('{rightarrow}')
    cy.get(titleSelectors.ParisItem).should('not.have.class', listClass.itemHidden)
    cy.get(titleSelectors.LyonItem).should('not.have.class', listClass.itemHidden)

    treeselectType('{leftarrow}')
    cy.get(titleSelectors.ParisItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.LyonItem).should('have.class', listClass.itemHidden)

    treeselectType('{uparrow}')
    cy.get(titleSelectors.BrightonItem).should('have.class', listClass.itemFocused)

    treeselectType('{uparrow}')
    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemFocused)

    treeselectType('{uparrow}')
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemFocused)

    treeselectType('{uparrow}')
    cy.get(titleSelectors.LondonGroup).should('have.class', listClass.itemFocused)

    treeselectType('{leftarrow}')
    cy.get(titleSelectors.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.get(titleSelectors.WestEndItem).should('have.class', listClass.itemHidden)

    treeselectType('{uparrow}')
    cy.get(titleSelectors.EnglandGroup).should('have.class', listClass.itemFocused)

    treeselectType('{leftarrow}')
    cy.get(titleSelectors.LondonGroup).should('have.class', listClass.itemHidden)
  })
})
