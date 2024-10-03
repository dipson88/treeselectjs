import { renderTreeselect, getTagsElements } from '../../helpers'

describe('updateValue method', () => {
  it('should update valid value', async () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        { value: 1, name: 'Option 1', children: [] },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    treeselect.updateValue([1, 2])

    const tags = getTagsElements(treeselect.parentHtmlContainer)

    expect(tags.length).toBe(2)
    expect(treeselect.value).toEqual([1, 2])
  })

  it("shouldn't update invalid value", () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        { value: 1, name: 'Option 1', children: [] },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    treeselect.updateValue([1, 4])

    const tags = getTagsElements(treeselect.parentHtmlContainer)

    expect(tags.length).toBe(1)
    expect(treeselect.value).toEqual([1])
  })
})
