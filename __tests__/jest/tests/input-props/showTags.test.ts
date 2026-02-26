import { renderTreeselect, defaultOptions, optionsValues } from '../../helpers'

describe('showTags prop', () => {
  it('should show tags by default', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.EnglandGroup],
      options: defaultOptions,
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should show group name if group is selected and showTags is false', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.EnglandGroup],
      showTags: false,
      options: defaultOptions,
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should show text with count if multiple values are selected and showTags is false', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.EnglandGroup, optionsValues.FranceGroup],
      showTags: false,
      options: defaultOptions,
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
