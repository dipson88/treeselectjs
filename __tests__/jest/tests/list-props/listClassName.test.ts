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

  it('should add multiple custom classes to the dropdown list', () => {
    const firstClassName = 'custom-list-class-1'
    const secondClassName = 'custom-list-class-2'
    const listClassName = `${firstClassName} ${secondClassName}`
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      listClassName
    })

    treeselect.toggleOpenClose()

    const list = getListElement(treeselect.parentHtmlContainer)

    const allListClassNames = Array.from(list.classList).join(' ')

    expect(allListClassNames).toContain(firstClassName)
    expect(allListClassNames).toContain(secondClassName)
  })
})
