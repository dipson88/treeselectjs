import { fireEvent } from '@testing-library/dom'
import { renderTreeselect, defaultOptions, getClearElement, optionsValues } from '../../helpers'

describe('clearable prop', () => {
  it('should render a clear button', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.LondonGroup, optionsValues.FranceGroup],
      options: defaultOptions
    })

    const clearElement = getClearElement(treeselect.parentHtmlContainer)
    expect(clearElement).toBeDefined()
  })

  it('should not render a clear button', () => {
    const treeselect = renderTreeselect({
      clearable: false,
      value: [optionsValues.LondonGroup, optionsValues.FranceGroup],
      options: defaultOptions
    })

    const clearElement = getClearElement(treeselect.parentHtmlContainer)
    expect(clearElement).toBeNull()
  })

  it('should clear the value when the clear button is clicked', () => {
    const treeselect = renderTreeselect({
      value: [optionsValues.LondonGroup, optionsValues.FranceGroup],
      options: defaultOptions
    })

    const clearElement = getClearElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(clearElement)
    treeselect.toggleOpenClose()

    expect(treeselect.value).toEqual([])
  })
})
