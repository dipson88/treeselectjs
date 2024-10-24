import { renderTreeselect, defaultOptions } from '../../helpers'

describe('destroy method', () => {
  it('should remove treeselect form the DOM', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions
    })

    treeselect.destroy()

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
