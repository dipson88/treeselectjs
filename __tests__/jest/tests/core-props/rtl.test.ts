import { renderTreeselect, defaultOptions } from '../../helpers'

describe('rtl prop', () => {
  it('should render RTL with rtl prop', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      rtl: true
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
