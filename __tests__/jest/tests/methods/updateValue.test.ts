import { renderTreeselect, getTagsElements } from '../../helpers'

const values = { Option1: 1, Option2: 2, Option3: 3 }
const options = [
  { value: values.Option1, name: 'Option 1', children: [] },
  { value: values.Option2, name: 'Option 2', children: [] },
  { value: values.Option3, name: 'Option 3', children: [] }
]

describe('updateValue method', () => {
  it('should update valid value', () => {
    const newValues = [values.Option1, values.Option2]
    const treeselect = renderTreeselect({
      value: [],
      options
    })

    treeselect.updateValue(newValues)

    const tags = getTagsElements(treeselect.parentHtmlContainer)

    expect(tags.length).toBe(newValues.length)
    expect(treeselect.value).toEqual(newValues)
  })

  it("shouldn't update invalid value", () => {
    const treeselect = renderTreeselect({
      value: [],
      options
    })

    treeselect.updateValue([values.Option1, 4])

    const tags = getTagsElements(treeselect.parentHtmlContainer)

    expect(tags.length).toBe(1)
    expect(treeselect.value).toEqual([values.Option1])
  })
})
