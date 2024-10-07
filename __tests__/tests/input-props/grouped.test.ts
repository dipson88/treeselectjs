import { renderTreeselect, defaultOptions, getTagsElements } from '../../helpers'

describe('grouped prop', () => {
  it('should grouped by default', () => {
    const treeselect = renderTreeselect({
      value: [1],
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)

    expect(tagsElements).toHaveLength(1)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should not be grouped', () => {
    const treeselect = renderTreeselect({
      grouped: false,
      value: [1],
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)

    expect(tagsElements).toHaveLength(3)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
