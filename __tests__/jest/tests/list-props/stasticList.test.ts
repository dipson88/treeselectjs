import { defaultOptions, renderTreeselect, getListElement } from '../../helpers'

describe('staticList prop', () => {
  it('should not be static by default', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions
    })

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list).toBeFalsy()
  })

  it('should be static when staticList is set', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      staticList: true
    })

    treeselect.toggleOpenClose()

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list).toBeTruthy()
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
