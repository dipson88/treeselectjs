import { renderTreeselect, getEditElement } from '../../helpers'

describe('ariaLabel prop', () => {
  it('should render a Treeselect with the given aria-label', () => {
    const ariaLabel = 'test-aria-label'

    const treeselect = renderTreeselect({
      value: [],
      options: [],
      ariaLabel,
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    expect(input.getAttribute('aria-label')).toBe(ariaLabel)
  })
})
