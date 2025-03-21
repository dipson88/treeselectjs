import { defaultOptions, renderTreeselect, getListElement, classes, getInputElement } from '../../helpers'

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
    expect(list.classList).toContain(classes.list.static)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should have always bottom direction when staticList is set', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      direction: 'top',
      alwaysOpen: true,
      staticList: true
    })

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list.getAttribute('direction')).toBe('bottom')
    expect(list.classList).toContain(classes.list.bottom)

    const input = getInputElement(treeselect.parentHtmlContainer)
    expect(input.classList).toContain(classes.input.bottom)
  })

  it('should not have static position with appendToBody', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      staticList: true,
      appendToBody: true
    })

    treeselect.toggleOpenClose()
    const list = getListElement(treeselect.parentHtmlContainer)
    expect(list).toBeFalsy()
  })

  it('should correctly render static list with alwaysOpen', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      alwaysOpen: true,
      staticList: true
    })

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list).toBeTruthy()
    expect(list.classList).toContain(classes.list.static)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
