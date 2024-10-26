import { renderTreeselect, defaultOptions, optionsValues } from '../../helpers'

describe('isSingleSelect prop', () => {
  it('should render a Treeselect with single-select mode', () => {
    const treeselect = renderTreeselect({
      isSingleSelect: true,
      value: optionsValues.ChelseaItem,
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual(optionsValues.ChelseaItem)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should select only one value in single-select mode', () => {
    const treeselect = renderTreeselect({
      isSingleSelect: true,
      value: optionsValues.EnglandGroup,
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual(optionsValues.EnglandGroup)
  })
})
