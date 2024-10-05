import { renderTreeselect } from '../../helpers'

describe('toggleOpenClose method', () => {
  it('should open and close the dropdown', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: []
    })

    treeselect.toggleOpenClose()

    expect(treeselect.isListOpened).toBe(true)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()

    treeselect.toggleOpenClose()

    expect(treeselect.isListOpened).toBe(false)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
