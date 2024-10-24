import { classesSelectors, classes } from '../../helpers'

const { list: listSelectors } = classesSelectors
const { list: litsClasses, input: inputClasses } = classes

describe('appendToBody', () => {
  beforeEach(() => {
    cy.visitAppendToBodyPage()
    cy.clearClick()
    cy.treeselectClick()
  })

  it('should render the list in the body', () => {
    cy.getTreeselect().find(listSelectors.base).should('not.exist')
    cy.get('body').find(listSelectors.base).should('exist')
  })

  it('should change direction on change viewport', () => {
    cy.outsideClick()
    cy.get('body').invoke('css', 'padding-top', '400px').invoke('css', 'padding-bottom', '400px')
    cy.treeselectClick()
    cy.expandAllGroups()

    cy.scrollTo('top')

    cy.getList().should('have.class', litsClasses.topToBody)
    cy.getInput().should('have.class', inputClasses.top)

    cy.scrollTo('bottom')

    cy.getList().should('have.class', litsClasses.bottomToBody)
    cy.getInput().should('have.class', inputClasses.bottom)

    cy.getInput().then(($input) => {
      const inputRect = $input[0].getBoundingClientRect()

      cy.getList().then(($list) => {
        const listRect = $list[0].getBoundingClientRect()

        const distanceY = Math.abs(inputRect.bottom - listRect.top)
        const distanceX = Math.abs(inputRect.left - listRect.left)

        cy.log('distanceY', distanceY)
        cy.log('distanceX', distanceX)

        expect(distanceY).to.be.lessThan(1)
        expect(distanceX).to.be.lessThan(1)
      })
    })
  })
})
