import { renderTreeselect, getTagsElements, defaultOptions, optionsValues } from '../../helpers'

describe('value prop', () => {
  it('should render a Treeselect with empty tags', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([])
    expect(tagsElements.length).toBe(0)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should render a Treeselect with one tag', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.BrightonItem],
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([optionsValues.BrightonItem])
    expect(tagsElements.length).toBe(1)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should render a Treeselect with multiple tags', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.ChelseaItem, optionsValues.BrightonItem],
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    treeselect.toggleOpenClose()

    expect(tagsElements.length).toBe(2)
    expect(treeselect.value).toEqual([optionsValues.ChelseaItem, optionsValues.BrightonItem])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should not contain non existent tags', () => {
    const treeselect = renderTreeselect({
      value: [100],
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)

    expect(tagsElements.length).toBe(0)
    expect(treeselect.value).toEqual([])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should not contain duplicate tags', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.ChelseaItem, optionsValues.ChelseaItem],
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    treeselect.toggleOpenClose()

    expect(tagsElements.length).toBe(1)
    expect(treeselect.value).toEqual([optionsValues.ChelseaItem])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  // Single mode
  it('should render a Treeselect with empty value in single mode', () => {
    const treeselect = renderTreeselect({
      isSingleSelect: true,
      value: null,
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual(null)
    expect(tagsElements.length).toBe(0)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should render a Treeselect with one value in single mode', () => {
    const treeselect = renderTreeselect({
      isSingleSelect: true,
      value: optionsValues.ChelseaItem,
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual(optionsValues.ChelseaItem)
    expect(tagsElements.length).toBe(1)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should not select non existent value in single mode', () => {
    const treeselect = renderTreeselect({
      isSingleSelect: true,
      value: 100,
      options: defaultOptions
    })

    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)
    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual(null)
    expect(tagsElements.length).toBe(0)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
