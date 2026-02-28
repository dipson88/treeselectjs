import { fireEvent } from '@testing-library/dom'
import { defaultOptions, renderTreeselect, getListGroupsItems, optionsValues, optionNames } from '../../helpers'

describe('disabledBranchNode prop', () => {
  it('group should be selectable by default', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      openLevel: 5,
    })

    treeselect.toggleOpenClose()

    const [groupItem] = Array.from(getListGroupsItems(treeselect.parentHtmlContainer)).filter(
      (item) => item.getAttribute('title') === optionNames.FranceGroup,
    )

    fireEvent.mouseDown(groupItem)

    const checkboxes = groupItem.querySelectorAll('input') as NodeListOf<HTMLInputElement>
    const isEveryIsChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked)

    expect(treeselect.value).toEqual([optionsValues.ParisItem, optionsValues.LyonItem])
    expect(isEveryIsChecked).toBe(true)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('group should not be selectable when disabledBranchNode is true', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      openLevel: 5,
      disabledBranchNode: true,
    })

    treeselect.toggleOpenClose()

    const [groupItem] = Array.from(getListGroupsItems(treeselect.parentHtmlContainer)).filter(
      (item) => item.getAttribute('title') === optionNames.FranceGroup,
    )

    fireEvent.mouseDown(groupItem)

    const checkboxes = groupItem.querySelectorAll('input') as NodeListOf<HTMLInputElement>
    const isEveryIsChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked)

    expect(treeselect.value).toEqual([])
    expect(isEveryIsChecked).toBe(false)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
