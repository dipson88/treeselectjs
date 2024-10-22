export const getTagsElements = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelectorAll('.treeselect-input__tags-element') as NodeListOf<HTMLElement>

export const getTagsElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-input__tags') as HTMLElement

export const getEditElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-input__edit') as HTMLElement

export const getArrowElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-input__arrow') as HTMLElement

export const getClearElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-input__clear') as HTMLElement

export const getListItems = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelectorAll('.treeselect-list__item') as NodeListOf<HTMLElement>

export const getNoResultsElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-list__empty') as HTMLElement

export const getListGroupsItems = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelectorAll('.treeselect-list__item--group') as NodeListOf<HTMLElement>

export const getListElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-list') as HTMLElement

export const getListSlotElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-list__slot') as HTMLElement
