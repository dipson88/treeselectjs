import { renderTreeselect } from '../../helpers'

describe('id prop', () => {
  it('should render a Treeselect with the given id', () => {
    const id = 'test-id'

    const treeselect = renderTreeselect({
      value: [],
      options: [],
      id
    })

    const input = treeselect.parentHtmlContainer.querySelector('.treeselect-input__edit') as HTMLElement
    expect(input.getAttribute('id')).toBe(id)
  })
})
