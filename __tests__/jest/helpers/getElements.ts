import { classesSelectors } from '../../testHelpers'

const { input: inputSelectors, list: listSelectors } = classesSelectors

// Input
export const getInputElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector(inputSelectors.base) as HTMLElement

export const getTagsElements = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelectorAll(inputSelectors.tagsElement) as NodeListOf<HTMLElement>

export const getTagsElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector(inputSelectors.tags) as HTMLElement

export const getEditElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector(inputSelectors.edit) as HTMLElement

export const getArrowElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector(inputSelectors.arrow) as HTMLElement

export const getClearElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector(inputSelectors.clear) as HTMLElement

// List
export const getListElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector(listSelectors.base) as HTMLElement

export const getListItems = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelectorAll(listSelectors.item) as NodeListOf<HTMLElement>

export const getNoResultsElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector(listSelectors.empty) as HTMLElement

export const getListGroupsItems = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelectorAll(listSelectors.itemGroup) as NodeListOf<HTMLElement>

export const getListSlotElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector(listSelectors.slot) as HTMLElement

export const getGroupArrowIcons = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelectorAll(listSelectors.itemArrow) as NodeListOf<HTMLElement>
