import ResizeObserver from 'resize-observer-polyfill'
import { renderTreeselect, defaultOptions, classesSelectors } from '../../helpers'

describe('rtl prop', () => {
  beforeAll(() => {
    global.ResizeObserver = ResizeObserver
  })

  it('should render RTL with rtl prop', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      rtl: true
    })

    expect(treeselect.parentHtmlContainer.getAttribute('dir')).toBe('rtl')
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should render RTL with rtl prop and appendToBody', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      rtl: true,
      appendToBody: true
    })


    treeselect.toggleOpenClose()

    const list = document.querySelector(classesSelectors.list.base)!
    expect(list.getAttribute('dir')).toBe('rtl')
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
