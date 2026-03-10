import { defaultOptions, renderTreeselect, classes } from '../../helpers'

const { list: listClasses } = classes

describe('appendToBody prop', () => {
  it('should render the dropdown list in the body', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      appendToBody: true,
    })

    treeselect.toggleOpenClose()

    expect(treeselect.parentHtmlContainer.innerHTML).not.toContain(listClasses.base)
    expect(document.body.innerHTML).toContain(listClasses.base)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
