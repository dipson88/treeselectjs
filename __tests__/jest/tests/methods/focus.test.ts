import { renderTreeselect, getEditElement } from '../../helpers'

describe('focus method', () => {
  it('should focus on the input', async () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
    })

    treeselect.focus()
    await new Promise((resolve) => setTimeout(resolve, 0))
    const input = getEditElement(treeselect.parentHtmlContainer)

    expect(document.activeElement).toBe(input)
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
