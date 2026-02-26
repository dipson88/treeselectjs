import { defaultOptions, renderTreeselect, getListElement } from '../../helpers'

describe('alwaysOpen prop', () => {
  it('should be closed by default', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
    })

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list).toBe(null)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should be opened when alwaysOpen is set', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      alwaysOpen: true,
    })

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list).not.toBe(null)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
