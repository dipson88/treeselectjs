import { renderTreeselect, defaultOptions } from '../../helpers'

describe('parentHtmlContainer prop', () => {
  it('should render a Treeselect component', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
    })

    treeselect.toggleOpenClose()

    expect(treeselect).toBeDefined()
    expect(document.body.contains(treeselect.parentHtmlContainer)).toBe(true)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
