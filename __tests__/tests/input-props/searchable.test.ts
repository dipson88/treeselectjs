import { fireEvent } from '@testing-library/dom'
import { renderTreeselect, getEditElement, getListItems, getNoResultsElement, defaultOptions } from '../../helpers'

describe('searchable prop', () => {
  const awaitInput = async () => new Promise((resolve) => setTimeout(resolve, 400))

  it('should be searchable by default', async () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    fireEvent.input(input, { target: { value: 'Paris' } })
    await awaitInput()

    const listItems = Array.from(getListItems(treeselect.parentHtmlContainer)).filter(
      (item) => !item.classList.contains('treeselect-list__item--hidden')
    )
    const visibleItems = ['France', 'Paris']

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
    fireEvent.input(input, { target: { value: 'Paris' } })
    await awaitInput()

    const listItems = Array.from(getListItems(treeselect.parentHtmlContainer)).filter(
      (item) => !item.classList.contains('treeselect-list__item--hidden')
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
      (item) => !item.classList.contains('treeselect-list__item--hidden')
    )

    const emptyElement = getNoResultsElement(treeselect.parentHtmlContainer)

    expect(listItems).toHaveLength(0)
    expect(emptyElement).toBeDefined()
    expect(emptyElement.classList.contains('treeselect-list__empty--hidden')).toBe(false)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
