import { renderTreeselect, getEditElement } from '../../helpers'

describe('placeholder prop', () => {
  it('should render default placeholder', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    expect(input.getAttribute('placeholder')).toBe('Search...')
  })

  it('should render a Treeselect with the given placeholder', () => {
    const placeholder = 'test-placeholder'

    const treeselect = renderTreeselect({
      value: [],
      options: [],
      placeholder,
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    expect(input.getAttribute('placeholder')).toBe(placeholder)
  })
})
