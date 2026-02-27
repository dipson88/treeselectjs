import { renderTreeselect, getTagsElement, defaultOptions, optionsValues } from '../../helpers'

describe('tagsCountText prop', () => {
  it('should render a Treeselect with the default tagsCountText', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.EnglandGroup, optionsValues.FranceGroup],
      options: defaultOptions,
      showTags: false,
    })

    const tagsElement = getTagsElement(treeselect.parentHtmlContainer)
    expect(tagsElement.outerHTML).toContain('2 elements selected')
  })

  it('should render a Treeselect with the given tagsCountText', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.EnglandGroup, optionsValues.FranceGroup],
      options: defaultOptions,
      showTags: false,
      tagsCountText: 'test elements',
    })

    const tagsElement = getTagsElement(treeselect.parentHtmlContainer)
    expect(tagsElement.outerHTML).toContain('2 test elements')
  })
})
