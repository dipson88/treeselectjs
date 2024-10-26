import { defaultOptions, renderTreeselect, getListElement } from '../../helpers'

describe('listClassName prop', () => {
  it('should add custom class to the dropdown list', () => {
    const listClassName = 'custom-list-class'
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      listClassName
    })

    treeselect.toggleOpenClose()

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list.classList.contains(listClassName)).toBe(true)
  })
})
