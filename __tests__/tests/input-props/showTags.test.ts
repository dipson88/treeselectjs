import { renderTreeselect, defaultOptions } from '../../helpers'

describe('showTags prop', () => {
  it('should show tags by default', () => {
    const treeselect = renderTreeselect({
      value: [1],
      options: defaultOptions
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should show group name if group is selected and showTags is false', () => {
    const treeselect = renderTreeselect({
      value: [1],
      showTags: false,
      options: defaultOptions
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should show text with count if multiple values are selected and showTags is false', () => {
    const treeselect = renderTreeselect({
      value: [1, 6],
      showTags: false,
      options: defaultOptions
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
