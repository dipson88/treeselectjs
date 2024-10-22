import { defaultOptions, renderTreeselect, getListItems, classes } from '../../helpers'

const { list: listClasses } = classes

describe('openLevel prop', () => {
  it('groups should be closed by default', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions
    })

    treeselect.toggleOpenClose()

    const topGroups = Array.from(getListItems(treeselect.parentHtmlContainer)).filter(
      (item) => !item.classList.contains(listClasses.itemHidden)
    )

    expect(topGroups).toHaveLength(2)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('groups should be opened when openLevel is set', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      openLevel: 10
    })

    treeselect.toggleOpenClose()

    const hiddenItems = Array.from(getListItems(treeselect.parentHtmlContainer)).filter((item) =>
      item.classList.contains(listClasses.itemHidden)
    )

    expect(hiddenItems).toHaveLength(0)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
