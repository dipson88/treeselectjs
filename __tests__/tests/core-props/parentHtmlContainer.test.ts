import { renderTreeselect } from '../../helpers/renderTreeselect'

describe('parentHtmlContainer prop', () => {
  it('should render a Treeselect component', async () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        {
          value: 1,
          name: 'Option 1',
          children: [
            { value: 4, name: 'Option 4', children: [] },
            { value: 5, name: 'Option 5', children: [] }
          ]
        },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    expect(treeselect).toBeDefined()
    expect(document.body.contains(treeselect.parentHtmlContainer)).toBe(true)
  })
})
