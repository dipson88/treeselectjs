import { renderTreeselect } from '../../helpers'

describe('ariaLabel prop', () => {
  it('should render a Treeselect with the given aria-label', () => {
    const ariaLabel = 'test-aria-label'

    const treeselect = renderTreeselect({
      value: [],
      options: [],
      ariaLabel
    })

    const input = treeselect.parentHtmlContainer.querySelector('.treeselect-input__edit') as HTMLElement
    expect(input.getAttribute('aria-label')).toBe(ariaLabel)
  })
})
