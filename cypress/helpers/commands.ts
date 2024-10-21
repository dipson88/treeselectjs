import { classesSelectors } from './constants'

const { parent: parentSelector, input: inputSelector, list: listSelector } = classesSelectors

export const visitCypressDefaultPage = () => {
  cy.visit('http://localhost:5173/app/cypress/cypress-default.html')
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
export const getTreeselct = () => {
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
