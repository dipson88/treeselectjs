import { renderTreeselect, defaultOptions, optionsValues } from '../../helpers'

describe('isIndependentNodes prop', () => {
  it('should not be independent nodes by default', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.EnglandGroup],
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([optionsValues.ChelseaItem, optionsValues.WestEndItem, optionsValues.BrightonItem])
  })

  it('should be independent nodes', () => {
    const treeselect = renderTreeselect({
      isIndependentNodes: true,
      value: [optionsValues.EnglandGroup, optionsValues.BrightonItem],
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([optionsValues.EnglandGroup, optionsValues.BrightonItem])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
