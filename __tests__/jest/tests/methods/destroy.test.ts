import { renderTreeselect, getEditElement, getListElement, defaultOptions } from '../../helpers'

describe('destroy method', () => {
  it('should remove treeselect form the DOM', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
    })

    treeselect.destroy()

    const input = getEditElement(document.body)
    const list = getListElement(document.body)

    expect(input).toBeFalsy()
    expect(list).toBeFalsy()
  })
})
