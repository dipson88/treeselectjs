import { fireEvent } from '@testing-library/dom'
import {
  classes,
  defaultOptions,
  getEditElement,
  getListItems,
  getNoResultsElement,
  optionNames,
  renderTreeselect
} from '../../helpers'

const { list: listClasses } = classes

describe('searchable prop', () => {
  const awaitInput = async () => new Promise((resolve) => setTimeout(resolve, 400))

  it('should be searchable by default', async () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    fireEvent.input(input, { target: { value: optionNames.ParisItem } })
    await awaitInput()

    const listItems = Array.from(getListItems(treeselect.parentHtmlContainer)).filter(
      (item) => !item.classList.contains(listClasses.itemHidden)
    )
    const visibleItems = [optionNames.FranceGroup, optionNames.ParisItem]

    expect(listItems).toHaveLength(2)
    expect(listItems.every((item) => visibleItems.includes(item.textContent!))).toBe(true)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should not be searchable', async () => {
    const treeselect = renderTreeselect({
      searchable: false,
      value: [],
      options: defaultOptions
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    fireEvent.input(input, { target: { value: optionNames.ParisItem } })
    await awaitInput()

    const listItems = Array.from(getListItems(treeselect.parentHtmlContainer)).filter(
      (item) => !item.classList.contains(listClasses.itemHidden)
    )

    expect(listItems).toHaveLength(0)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should show no results message', async () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    fireEvent.input(input, { target: { value: 'Not found' } })
    await awaitInput()

    const listItems = Array.from(getListItems(treeselect.parentHtmlContainer)).filter(
      (item) => !item.classList.contains(listClasses.itemHidden)
    )

    const emptyElement = getNoResultsElement(treeselect.parentHtmlContainer)

    expect(listItems).toHaveLength(0)
    expect(emptyElement).toBeDefined()
    expect(emptyElement.classList.contains(listClasses.itemHidden)).toBe(false)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
