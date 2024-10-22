import { classesSelectors } from '../../testHelpers'

const { parent: parentSelector, input: inputSelector, list: listSelector } = classesSelectors
const baseUrl = 'http://localhost:5173/__tests__/cypress/pages'

export const visitCypressDefaultPage = () => {
  cy.visit(`${baseUrl}/cypress-base.html`)
}

export const visitCypressSinglePage = () => {
  cy.visit(`${baseUrl}/cypress-single.html`)
}

export const visitCypressDisabledPage = () => {
  cy.visit(`${baseUrl}/cypress-disabled.html`)
}

export const visitCypressLargeDataPage = () => {
  cy.visit(`${baseUrl}/cypress-large-data.html`)
}

export const treeselectClick = () => {
  cy.get(parentSelector).click()
}

export const treeselectFocus = () => {
  cy.get(parentSelector).find('input').focus()
}

export const treeselectType = (query: string) => {
  cy.get(parentSelector).type(query)
}

export const inputArrowClick = () => {
  cy.get(inputSelector.arrow).click()
}

export const outsideClick = () => {
  cy.get('body').click()
}

export const clearClick = () => {
  cy.get(inputSelector.clear).click()
}

export const expandAllGroups = () => {
  cy.get(listSelector.itemGroup).each(($group) => {
    cy.wrap($group).find(listSelector.itemArrow).click()
  })
}

// Get Elements
export const getTreeselect = () => {
  return cy.get(parentSelector)
}

export const getList = () => {
  return cy.get(listSelector.base)
}

export const getInput = () => {
  return cy.get(inputSelector.base)
}

export const getTagsElements = () => {
  return cy.get(inputSelector.tagsElement)
}
