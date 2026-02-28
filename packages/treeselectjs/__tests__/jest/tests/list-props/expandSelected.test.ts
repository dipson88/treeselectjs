import { renderTreeselect, defaultOptions, optionsValues, optionNames, getListItems, classes } from '../../helpers'

const { list: listClasses } = classes

describe('expandSelected prop', () => {
  it('should not expand selected items by default', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.BrightonItem, optionsValues.LyonItem],
      options: defaultOptions,
    })

    treeselect.toggleOpenClose()

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should expand selected items when expandSelected is set', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.BrightonItem, optionsValues.LyonItem],
      options: defaultOptions,
      expandSelected: true,
    })

    treeselect.toggleOpenClose()

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should expand selected item with single select', () => {
    const treeselect = renderTreeselect({
      value: optionsValues.WestEndItem,
      options: defaultOptions,
      expandSelected: true,
      isSingleSelect: true,
    })

    treeselect.toggleOpenClose()

    const items = getListItems(treeselect.parentHtmlContainer)
    const itemsToShow = [
      optionNames.EnglandGroup,
      optionNames.LondonGroup,
      optionNames.ChelseaItem,
      optionNames.WestEndItem,
      optionNames.BrightonItem,
      optionNames.FranceGroup,
    ]
    const itemsToHide = [optionNames.LyonItem, optionNames.ParisItem]

    items.forEach((item) => {
      if (itemsToShow.includes(item.textContent)) {
        expect(item.classList.contains(listClasses.itemHidden)).toBe(false)
      } else if (itemsToHide.includes(item.textContent)) {
        expect(item.classList.contains(listClasses.itemHidden)).toBe(true)
      }
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should expand selected item with isIndependentNodes prop', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.BrightonItem],
      options: defaultOptions,
      expandSelected: true,
      isIndependentNodes: true,
    })

    treeselect.toggleOpenClose()

    const items = getListItems(treeselect.parentHtmlContainer)
    const itemsToShow = [
      optionNames.EnglandGroup,
      optionNames.LondonGroup,
      optionNames.BrightonItem,
      optionNames.FranceGroup,
    ]
    const itemsToHide = [optionNames.ChelseaItem, optionNames.WestEndItem, optionNames.LyonItem, optionNames.ParisItem]

    items.forEach((item) => {
      if (itemsToShow.includes(item.textContent)) {
        expect(item.classList.contains(listClasses.itemHidden)).toBe(false)
      } else if (itemsToHide.includes(item.textContent)) {
        expect(item.classList.contains(listClasses.itemHidden)).toBe(true)
      }
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
