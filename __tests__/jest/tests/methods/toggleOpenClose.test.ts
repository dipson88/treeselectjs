import { renderTreeselect, getListElement } from '../../helpers'

describe('toggleOpenClose method', () => {
  it('should open and close the dropdown', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
    })

    treeselect.toggleOpenClose()
    const listElementOpened = getListElement(treeselect.parentHtmlContainer)

    expect(treeselect.isListOpened).toBe(true)
    expect(listElementOpened).toBeTruthy()

    treeselect.toggleOpenClose()
    const listElementClosed = getListElement(treeselect.parentHtmlContainer)

    expect(treeselect.isListOpened).toBe(false)
    expect(listElementClosed).toBeFalsy()
  })
})
