import { renderTreeselect, defaultOptions } from '../../helpers'

describe('isGroupedValue prop', () => {
  it('should not group values by default', () => {
    const treeselect = renderTreeselect({
      value: [1],
      options: defaultOptions
    })

    expect(treeselect.value).toEqual([3, 4, 5])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should group values', () => {
    const treeselect = renderTreeselect({
      isGroupedValue: true,
      value: [1],
      options: defaultOptions
    })

    expect(treeselect.value).toEqual([1])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
