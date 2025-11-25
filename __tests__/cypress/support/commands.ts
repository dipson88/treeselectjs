import { classesSelectors } from '../../testHelpers'

const {
  parent: parentSelector,
  input: inputSelector,
  list: listSelector,
  shadowRoot: shadowRootSelector
} = classesSelectors
const baseUrl = 'http://localhost:5173/__tests__/cypress/pages'

declare global {
  namespace Cypress {
    interface Chainable {
      // Visits
      visitBasePage(): void
      visitSinglePage(): void
      visitDisabledPage(): void
      visitLargeDataPage(): void
      visitAppendToBodyPage(): void
      visitBoostRenderingPage(): void
      visitSlotPage(): void
      visitShadowRootPage(): void

      // Actions
      treeselectClick(): void
      treeselectFocus(): void
      treeselectType(query: string): void
      inputArrowClick(): void
      outsideClick(): void
      clearClick(): void
      expandAllGroups(): void

      // Getters
      getTreeselect(): Chainable<JQuery<HTMLElement>>
      getList(): Chainable<JQuery<HTMLElement>>
      getListItem(selector: string): Chainable<JQuery<HTMLElement>>
      getInput(): Chainable<JQuery<HTMLElement>>
      getTagsElements(): Chainable<JQuery<HTMLElement>>
      getShadowRoot(): Chainable<JQuery<HTMLElement>>
    }
  }
}

// Visits
Cypress.Commands.add('visitBasePage', () => {
  cy.visit(`${baseUrl}/cypress-base.html`)
})

Cypress.Commands.add('visitSinglePage', () => {
  cy.visit(`${baseUrl}/cypress-single.html`)
})

Cypress.Commands.add('visitDisabledPage', () => {
  cy.visit(`${baseUrl}/cypress-disabled.html`)
})

Cypress.Commands.add('visitLargeDataPage', () => {
  cy.visit(`${baseUrl}/cypress-large-data.html`)
})

Cypress.Commands.add('visitAppendToBodyPage', () => {
  cy.visit(`${baseUrl}/cypress-append-to-body.html`)
})

Cypress.Commands.add('visitBoostRenderingPage', () => {
  cy.visit(`${baseUrl}/cypress-boost-rendering.html`)
})

Cypress.Commands.add('visitSlotPage', () => {
  cy.visit(`${baseUrl}/cypress-slot.html`)
})

Cypress.Commands.add('visitShadowRootPage', () => {
  cy.visit(`${baseUrl}/cypress-shadow-root.html`)
})

// Actions
Cypress.Commands.add('treeselectClick', () => {
  cy.get(parentSelector).click()
})

Cypress.Commands.add('treeselectFocus', () => {
  cy.get(parentSelector).find('input').focus()
})

Cypress.Commands.add('treeselectType', (query: string) => {
  cy.get(parentSelector).type(query)
})

Cypress.Commands.add('inputArrowClick', () => {
  cy.get(inputSelector.arrow).click()
})

Cypress.Commands.add('outsideClick', () => {
  cy.get('body').click(0, 0)
})

Cypress.Commands.add('clearClick', () => {
  cy.get(inputSelector.clear).first().click()
})

Cypress.Commands.add('expandAllGroups', () => {
  cy.get(listSelector.itemGroup).each(($group) => {
    cy.wrap($group).find(listSelector.itemArrow).click()
  })
})

// Getters
Cypress.Commands.add('getTreeselect', () => {
  return cy.get(parentSelector)
})

Cypress.Commands.add('getList', () => {
  return cy.get(listSelector.base)
})

Cypress.Commands.add('getListItem', (optionName: string) => {
  return cy.get(`[title="${optionName}"]`)
})

Cypress.Commands.add('getInput', () => {
  return cy.get(inputSelector.base)
})

Cypress.Commands.add('getTagsElements', () => {
  return cy.get(inputSelector.tagsElement)
})

Cypress.Commands.add('getShadowRoot', () => {
  return cy.get(shadowRootSelector.parent).shadow()
})
