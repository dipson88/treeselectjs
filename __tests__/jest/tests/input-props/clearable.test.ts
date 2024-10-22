import { fireEvent } from '@testing-library/dom'
import { renderTreeselect, defaultOptions, getClearElement } from '../../helpers'

describe('clearable prop', () => {
  it('should render a clear button', () => {
    const treeselect = renderTreeselect({
      value: [1, 6],
      options: defaultOptions
    })

    const clearElement = getClearElement(treeselect.parentHtmlContainer)
    expect(clearElement).toBeDefined()
    expect(treeselect.srcElement).toMatchSnapshot()
  })

  it('should not render a clear button', () => {
    const treeselect = renderTreeselect({
      clearable: false,
      value: [1, 6],
      options: defaultOptions
    })

    const clearElement = getClearElement(treeselect.parentHtmlContainer)
    expect(clearElement).toBeNull()
    expect(treeselect.srcElement).toMatchSnapshot()
  })

  it('should clear the value when the clear button is clicked', () => {
    const treeselect = renderTreeselect({
      value: [1, 6],
      options: defaultOptions
    })

    const clearElement = getClearElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(clearElement)
    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([])
    expect(treeselect.srcElement).toMatchSnapshot()
  })
})
