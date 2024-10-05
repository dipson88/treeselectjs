import { renderTreeselect, defaultOptions } from '../../helpers'

describe('isSingleSelect prop', () => {
  it('should render a Treeselect with single-select mode', () => {
    const treeselect = renderTreeselect({
      isSingleSelect: true,
      value: 3,
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should select only one value in single-select mode', () => {
    const treeselect = renderTreeselect({
      isSingleSelect: true,
      value: 1,
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual(1)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should select full group children without single-select mode', () => {
    const treeselect = renderTreeselect({
      isSingleSelect: false,
      value: [1],
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([3, 4, 5])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
