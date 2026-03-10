import { renderTreeselect, getNoResultsElement, noResultsText } from '../../helpers'

describe('emptyText prop', () => {
  it('should render the empty text by default', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
    })

    treeselect.toggleOpenClose()

    const emptyItem = getNoResultsElement(treeselect.parentHtmlContainer)

    expect(emptyItem.innerHTML).toContain(noResultsText)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should render the custom empty text', () => {
    const newNotResultsText = 'No data'
    const treeselect = renderTreeselect({
      value: [],
      options: [],
      emptyText: newNotResultsText,
    })

    treeselect.toggleOpenClose()

    const emptyItem = getNoResultsElement(treeselect.parentHtmlContainer)

    expect(emptyItem.innerHTML).toContain(newNotResultsText)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
