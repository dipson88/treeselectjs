import { renderTreeselect, getNoResultsElement } from '../../helpers'

describe('emptyText prop', () => {
  it('should render the empty text by default', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: []
    })

    treeselect.toggleOpenClose()

    const emptyItem = getNoResultsElement(treeselect.parentHtmlContainer)

    expect(emptyItem.innerHTML).toContain('No results found...')
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should render the custom empty text', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
      emptyText: 'No data'
    })

    treeselect.toggleOpenClose()

    const emptyItem = getNoResultsElement(treeselect.parentHtmlContainer)

    expect(emptyItem.innerHTML).toContain('No data')
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
