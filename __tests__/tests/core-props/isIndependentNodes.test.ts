import { renderTreeselect, defaultOptions } from '../../helpers'

describe('isIndependentNodes prop', () => {
  it('should not be independent nodes by default', () => {
    const treeselect = renderTreeselect({
      value: [1],
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([3, 4, 5])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should be independent nodes', () => {
    const treeselect = renderTreeselect({
      isIndependentNodes: true,
      value: [1, 5],
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([1, 5])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
