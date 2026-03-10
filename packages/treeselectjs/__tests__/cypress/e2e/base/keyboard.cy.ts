import { classes, classesSelectors, optionNames } from '../../helpers'

const { input: inputClass, list: listClass } = classes
const { input: inputSelector, list: listSelector } = classesSelectors

describe('keyboard', () => {
  beforeEach(() => {
    cy.visitBasePage()
    cy.treeselectClick()
  })

  it('should open/close list on Space key', () => {
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')

    cy.treeselectType('{ }')
    cy.get(inputSelector.base).should('not.have.class', inputClass.opened)
    cy.get(listSelector.base).should('not.exist')

    cy.treeselectType('{ }')
    cy.get(inputSelector.base).should('have.class', inputClass.opened)
    cy.get(listSelector.base).should('exist')
  })

  it('should remove values on Backspace key', () => {
    cy.getTagsElements().should('have.length', 2)

    cy.treeselectType('{backspace}')
    cy.getTagsElements().should('have.length', 1)

    cy.treeselectType('{backspace}')
    cy.getTagsElements().should('have.length', 0)

    cy.get(listSelector.itemChecked).should('have.length', 0)
    cy.get(listSelector.itemPartialChecked).should('have.length', 0)
  })

  it('should select/unselect first item on Enter key', () => {
    cy.clearClick()

    cy.getListItem(optionNames.EnglandGroup).should('not.have.class', listClass.itemChecked)
    cy.getTagsElements().should('have.length', 0)

    cy.treeselectType('{enter}')
    cy.getListItem(optionNames.EnglandGroup).should('have.class', listClass.itemChecked)
    cy.getTagsElements().should('have.length', 1)

    cy.treeselectType('{enter}')
    cy.getListItem(optionNames.EnglandGroup).should('not.have.class', listClass.itemChecked)
    cy.getTagsElements().should('have.length', 0)
  })

  it('should change group on ArrowDown/ArrowUp keys', () => {
    cy.clearClick()
    cy.treeselectType('{downarrow}')
    cy.getListItem(optionNames.FranceGroup).should('have.class', listClass.itemFocused)

    cy.treeselectType('{downarrow}')
    cy.getListItem(optionNames.EnglandGroup).should('have.class', listClass.itemFocused)

    cy.treeselectType('{uparrow}')
    cy.getListItem(optionNames.FranceGroup).should('have.class', listClass.itemFocused)

    cy.treeselectType('{uparrow}')
    cy.getListItem(optionNames.EnglandGroup).should('have.class', listClass.itemFocused)
  })

  it('should open/close group on ArrowRight/ArrowLeft keys', () => {
    cy.clearClick()
    cy.getListItem(optionNames.LondonGroup).should('have.class', listClass.itemHidden)

    cy.treeselectType('{rightarrow}')
    cy.getListItem(optionNames.LondonGroup).should('not.have.class', listClass.itemHidden)

    cy.treeselectType('{leftarrow}')
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemHidden)
  })

  it('should run full keyboard navigation', () => {
    cy.clearClick()

    cy.getListItem(optionNames.EnglandGroup).should('have.class', listClass.itemFocused)

    cy.treeselectType('{rightarrow}')
    cy.getListItem(optionNames.LondonGroup).should('not.have.class', listClass.itemHidden)
    cy.getListItem(optionNames.BrightonItem).should('not.have.class', listClass.itemHidden)

    cy.treeselectType('{downarrow}')
    cy.getListItem(optionNames.LondonGroup).should('have.class', listClass.itemFocused)

    cy.treeselectType('{rightarrow}')
    cy.getListItem(optionNames.ChelseaItem).should('not.have.class', listClass.itemHidden)
    cy.getListItem(optionNames.WestEndItem).should('not.have.class', listClass.itemHidden)

    cy.treeselectType('{downarrow}')
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemFocused)

    cy.treeselectType('{downarrow}')
    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemFocused)

    cy.treeselectType('{downarrow}')
    cy.getListItem(optionNames.BrightonItem).should('have.class', listClass.itemFocused)

    cy.treeselectType('{downarrow}')
    cy.getListItem(optionNames.FranceGroup).should('have.class', listClass.itemFocused)

    cy.treeselectType('{rightarrow}')
    cy.getListItem(optionNames.ParisItem).should('not.have.class', listClass.itemHidden)
    cy.getListItem(optionNames.LyonItem).should('not.have.class', listClass.itemHidden)

    cy.treeselectType('{leftarrow}')
    cy.getListItem(optionNames.ParisItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.LyonItem).should('have.class', listClass.itemHidden)

    cy.treeselectType('{uparrow}')
    cy.getListItem(optionNames.BrightonItem).should('have.class', listClass.itemFocused)

    cy.treeselectType('{uparrow}')
    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemFocused)

    cy.treeselectType('{uparrow}')
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemFocused)

    cy.treeselectType('{uparrow}')
    cy.getListItem(optionNames.LondonGroup).should('have.class', listClass.itemFocused)

    cy.treeselectType('{leftarrow}')
    cy.getListItem(optionNames.ChelseaItem).should('have.class', listClass.itemHidden)
    cy.getListItem(optionNames.WestEndItem).should('have.class', listClass.itemHidden)

    cy.treeselectType('{uparrow}')
    cy.getListItem(optionNames.EnglandGroup).should('have.class', listClass.itemFocused)

    cy.treeselectType('{leftarrow}')
    cy.getListItem(optionNames.LondonGroup).should('have.class', listClass.itemHidden)
  })
})
