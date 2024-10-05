export const getTagsElements = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelectorAll('.treeselect-input__tags-element') as NodeListOf<HTMLElement>

export const getTagsElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-input__tags') as HTMLElement

export const getEditElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-input__edit') as HTMLElement

export const getArrowElement = (parentHtmlContainer: HTMLElement) =>
  parentHtmlContainer.querySelector('.treeselect-input__arrow') as HTMLElement
