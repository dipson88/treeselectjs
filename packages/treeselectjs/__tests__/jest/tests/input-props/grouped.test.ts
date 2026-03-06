import { renderTreeselect, defaultOptions, getTagsElements, optionsValues } from '../../helpers'

describe('grouped prop', () => {
  it('should grouped by default', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.EnglandGroup],
      options: defaultOptions,
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)

    expect(tagsElements).toHaveLength(1)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should not be grouped', () => {
    const treeselect = renderTreeselect({
      grouped: false,
      value: [optionsValues.EnglandGroup],
      options: defaultOptions,
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)

    expect(tagsElements).toHaveLength(3)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
