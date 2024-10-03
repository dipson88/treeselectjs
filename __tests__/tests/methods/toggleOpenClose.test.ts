import { renderTreeselect } from '../../helpers'

describe('toggleOpenClose method', () => {
  it('should open and close the dropdown', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: []
    })

    treeselect.toggleOpenClose()
    const openedList = treeselect.parentHtmlContainer.querySelector('.treeselect-list') as HTMLElement
    expect(openedList).toBeTruthy()
    expect(treeselect.isListOpened).toBe(true)

    treeselect.toggleOpenClose()
    const closedList = treeselect.parentHtmlContainer.querySelector('.treeselect-list') as HTMLElement
    expect(closedList).toBeFalsy()
    expect(treeselect.isListOpened).toBe(false)
  })
})
