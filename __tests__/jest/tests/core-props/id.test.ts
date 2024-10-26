import { renderTreeselect, getEditElement } from '../../helpers'

describe('id prop', () => {
  it('should render a Treeselect with the given id', () => {
    const id = 'test-id'

    const treeselect = renderTreeselect({
      value: [],
      options: [],
      id
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    expect(input.getAttribute('id')).toBe(id)
  })
})
