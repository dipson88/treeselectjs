import { defaultOptions, renderTreeselect, getListElement } from '../../helpers'

describe('listClassName prop', () => {
  it('should add custom class to the dropdown list', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      listClassName: 'custom-list-class'
    })

    treeselect.toggleOpenClose()

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list.classList.contains('custom-list-class')).toBe(true)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
