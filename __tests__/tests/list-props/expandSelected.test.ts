import { renderTreeselect, defaultOptions } from '../../helpers'

describe('expandSelected prop', () => {
  it('should not expand selected items by default', () => {
    const treeselect = renderTreeselect({
      value: [5, 8],
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should expand selected items when expandSelected is set', () => {
    const treeselect = renderTreeselect({
      value: [5, 8],
      options: defaultOptions,
      expandSelected: true
    })

    treeselect.toggleOpenClose()

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
