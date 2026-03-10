import { renderTreeselect, defaultOptions, optionsValues } from '../../helpers'

describe('isGroupedValue prop', () => {
  it('should not group values by default', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.EnglandGroup],
      options: defaultOptions,
    })

    expect(treeselect.value).toEqual([optionsValues.ChelseaItem, optionsValues.WestEndItem, optionsValues.BrightonItem])
  })

  it('should group values', () => {
    const treeselect = renderTreeselect({
      isGroupedValue: true,
      value: [optionsValues.EnglandGroup],
      options: defaultOptions,
    })

    expect(treeselect.value).toEqual([optionsValues.EnglandGroup])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
