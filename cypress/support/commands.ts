/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getTreeselect(selector: string): Chainable<JQuery<HTMLElement>>
    // Open / Close
    openTreeselectList(selector: string): Chainable<void>
    closeTreeselectList(selector: string): Chainable<void>

    // Clear
    clearAll(selector: string): Chainable<void>

    // Select
    toggleVisibleItem(selector: string, id: string): Chainable<void>
    expandItem(selector: string, id: string): Chainable<void>

    // Select / unselect item
    selectItem(selector: string, path: string[]): Chainable<void>
    unselectItem(selector: string, path: string[]): Chainable<void>

    // Get selected items
    getSelectedItems(selector: string): Chainable<string[]>

    // Filter
    filterTreeselect(selector: string, searchText: string): Chainable<void>

    // Assertions
    shouldHaveExactSelectedItems(selector: string, expectedItems: string[]): Chainable<void>
    shouldNotHaveSelectedItems(selector: string, notExpectedItems: string[]): Chainable<void>
  }
}

Cypress.Commands.add('getTreeselect', (selector: string) => {
  return cy.get(selector).find('.treeselect-input')
})

Cypress.Commands.add('getSelectedItems', (selector: string) => {
  return cy.get(selector).then(($el) => {
    const $elements = $el.find('.treeselect-input__tags-element')

    if ($elements.length === 0) {
      return cy.wrap([] as Array<string>)
    }

    const items = $elements
      .map((_, el) => {
        const $el = Cypress.$(el)
        const inputId = $el.attr('tag-id')
        return inputId ? inputId.toString() : ''
      })
      .get()
      .filter((id) => id !== '')

    return cy.wrap(items)
  })
})

Cypress.Commands.add('toggleVisibleItem', (selector: string, id: string) => {
  cy.get(`${selector} .treeselect-list__item`)
    .find(`.treeselect-list__item-checkbox[input-id="${id}"]`)
    .closest('.treeselect-list__item')
    .as('currentItem')

  cy.get('@currentItem').should('be.visible')

  cy.get('@currentItem').click({ force: true })
})
Cypress.Commands.add('expandItem', (selector: string, id: string) => {
  cy.get(`${selector} .treeselect-list__item`)
    .find(`.treeselect-list__item-checkbox[input-id="${id}"]`)
    .closest('.treeselect-list__item')
    .as('currentItem')

  cy.get('@currentItem').should('be.visible')

  cy.get('@currentItem')
    .find('.treeselect-list__item-icon')
    .then(($icon) => {
      if ($icon.closest('.treeselect-list__item').hasClass('treeselect-list__item--closed')) {
        cy.wrap($icon).click()
      }
    })
})

Cypress.Commands.add('clearAll', (selector: string) => {
  cy.getTreeselect(selector).find('.treeselect-input__clear').click()
})

Cypress.Commands.add('selectItem', (selector: string, idPath: string[]) => {
  cy.openTreeselectList(selector)

  idPath.forEach((id, index) => {
    if (index < idPath.length - 1) {
      cy.expandItem(selector, id)
    } else {
      cy.get(`${selector} .treeselect-list__item`)
        .find(`.treeselect-list__item-checkbox[input-id="${id}"]`)
        .as('targetCheckbox')

      cy.get('@targetCheckbox').then(($checkbox) => {
        const isChecked = $checkbox.prop('checked')

        if (isChecked) {
          throw new Error('Checkbox is already checked')
        }
        cy.toggleVisibleItem(selector, id)
      })
    }

    // Wait for any animations or state updates
    cy.wait(100)
  })

  // Close the dropdown
  cy.closeTreeselectList(selector)
})

Cypress.Commands.add('unselectItem', (selector: string, idPath: string[]) => {
  cy.openTreeselectList(selector)

  idPath.forEach((id, index) => {
    if (index < idPath.length - 1) {
      cy.expandItem(selector, id)
    } else {
      cy.get(`${selector} .treeselect-list__item`)
        .find(`.treeselect-list__item-checkbox[input-id="${id}"]`)
        .as('targetCheckbox')

      cy.get('@targetCheckbox').then(($checkbox) => {
        const isChecked = $checkbox.prop('checked')

        if (!isChecked) {
          throw new Error('Checkbox is already unchecked')
        }
        cy.toggleVisibleItem(selector, id)
      })
    }

    // Wait for any animations or state updates
    cy.wait(100)
  })

  // Close the dropdown
  cy.closeTreeselectList(selector)
})

Cypress.Commands.add('openTreeselectList', (selector: string) => {
  cy.getTreeselect(selector).click()
  cy.get('.treeselect-list').should('be.visible')
})

Cypress.Commands.add('closeTreeselectList', (selector: string) => {
  cy.get('body').click(0, 0)
  cy.wait(300)
  cy.get('.treeselect-list').should(($list) => {
    const list = $list[0]
    expect(list).to.satisfy((el) => !el || !el.offsetParent)
  })
})

Cypress.Commands.add('shouldHaveExactSelectedItems', (selector: string, expectedItems: string[]) => {
  cy.getSelectedItems(selector).then((items) => {
    const itemsSet = new Set(items)
    const expectedItemsSet = new Set(expectedItems)

    const missingItems = expectedItems.filter((item) => !itemsSet.has(item))
    const unexpectedItems = items.filter((item) => !expectedItemsSet.has(item))

    const errorMessages = []
    if (missingItems.length > 0) {
      //   errorMessages.push(`Missing items: ${missingItems.join(', ')}`)
    }
    if (unexpectedItems.length > 0) {
      //   errorMessages.push(`Unexpected items: ${unexpectedItems.join(', ')}`)
    }

    expect(items, `Expected ${expectedItems.length} items, but found ${items.length}`).to.have.length(
      expectedItems.length
    )

    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join('. '))
    }

    expect(Array.from(itemsSet)).to.deep.equal(expectedItems)
  })
})

Cypress.Commands.add('shouldNotHaveSelectedItems', (selector: string, notExpectedItems: string[]) => {
  cy.getSelectedItems(selector).then((items) => {
    notExpectedItems.forEach((notExpectedItem) => {
      expect(items).to.not.include(notExpectedItem, `Item ${notExpectedItem} should not be in selection but was found`)
    })
  })
})

Cypress.Commands.add('filterTreeselect', (selector: string, searchText: string) => {
  cy.getTreeselect(selector).click().type(searchText)
})
