/**
 * Adds one or more class names to an element. No-op if element is null/undefined.
 */
export function setClass(element: Element | null | undefined, ...classNames: string[]): void {
  if (!element) {
    return
  }

  element.classList.add(...classNames)
}

/**
 * Removes one or more class names from an element. No-op if element is null/undefined.
 */
export function removeClass(element: Element | null | undefined, ...classNames: string[]): void {
  if (!element) {
    return
  }

  element.classList.remove(...classNames)
}
