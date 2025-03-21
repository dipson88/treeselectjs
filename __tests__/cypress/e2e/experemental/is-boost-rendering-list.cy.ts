import { classes, classesSelectors } from '../../helpers'

const { list: listClass } = classes
const { list: listSelector } = classesSelectors

const optionsVisibility = {
  visible: ['Option 495', 'Option 504'],
  hidden: ['Option 494', 'Option 505']
}

const visibleSubOptions = ['SubOption 495-0', 'SubOption 495-1', 'SubOption 495-2']

describe('is-boost-rendering-list', () => {
  beforeEach(() => {
    cy.visitBoostRenderingPage()
    cy.treeselectClick()
  })

  it('should render list with boost rendering', () => {
    cy.treeselectClick()
    cy.getList().scrollTo('center')

    optionsVisibility.visible.forEach((option) => {
      cy.getListItem(option).should('not.have.class', listClass.itemScrollNotVisible)
    })

    optionsVisibility.hidden.forEach((option) => {
      cy.getListItem(option).should('have.class', listClass.itemScrollNotVisible)
    })
  })

  it('should work correctly with search', () => {
    cy.treeselectClick()
    cy.getList().scrollTo('center')

    const [firstVisibleOption] = optionsVisibility.visible

    cy.getListItem(firstVisibleOption).find(listSelector.itemArrow).click()

    const lastVisibleOption = optionsVisibility.visible.at(-1) ?? ''
    cy.getListItem(lastVisibleOption).should('have.class', listClass.itemScrollNotVisible)

    visibleSubOptions.forEach((subOption) => {
      cy.getListItem(subOption).should('not.have.class', listClass.itemScrollNotVisible)
      cy.getListItem(subOption).should('not.have.class', listClass.itemHidden)
    })

    cy.getListItem(firstVisibleOption).click()
    cy.getListItem(firstVisibleOption).should('have.class', listClass.itemChecked)

    visibleSubOptions.forEach((subOption) => {
      cy.getListItem(subOption).should('have.class', listClass.itemChecked)
    })
  })
})
