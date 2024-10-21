import ResizeObserver from 'resize-observer-polyfill'
import { defaultOptions, renderTreeselect } from '../../helpers'

describe('appendToBody prop', () => {
  beforeAll(() => {
    global.ResizeObserver = ResizeObserver
  })

  it('should render the dropdown list in the body', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      appendToBody: true
    })

    treeselect.toggleOpenClose()

    expect(treeselect.parentHtmlContainer.innerHTML).not.toContain('treeselect-list')
    expect(document.body.innerHTML).toContain('treeselect-list')
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
