import { defaultOptions, renderTreeselect, getListGroupsItems } from '../../helpers'

describe('showCount prop', () => {
  it('should not show count by default', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    const groupItems = Array.from(getListGroupsItems(treeselect.parentHtmlContainer))
    const isEveryItemNotContainCount = groupItems.every((groupItem) => !groupItem.innerHTML.includes('(2)'))

    expect(isEveryItemNotContainCount).toBe(true)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should show count when showCount is true', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      showCount: true
    })

    treeselect.toggleOpenClose()

    const groupItems = Array.from(getListGroupsItems(treeselect.parentHtmlContainer))
    const isEveryItemContainCount = groupItems.every((groupItem) => groupItem.innerHTML.includes('(2)'))

    expect(isEveryItemContainCount).toBe(true)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
