import { renderTreeselect, defaultOptions, getListElement } from '../../helpers'

describe('direction prop', () => {
  it('should render the dropdown list with top direction', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      direction: 'top'
    })

    document.body.style.paddingTop = '300px'

    treeselect.toggleOpenClose()

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list.getAttribute('direction')).toBe('top')
    expect(document.body).toMatchSnapshot()
  })

  it('should render the dropdown list with bottom direction', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      direction: 'bottom'
    })

    document.body.style.paddingBottom = '300px'

    treeselect.toggleOpenClose()

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list.getAttribute('direction')).toBe('bottom')
    expect(document.body).toMatchSnapshot()
  })

  it('should render the dropdown list with auto direction', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      direction: 'auto'
    })

    treeselect.toggleOpenClose()

    const list = getListElement(treeselect.parentHtmlContainer)

    expect(list.getAttribute('direction')).toBe('bottom')
    expect(document.body).toMatchSnapshot()
  })
})
