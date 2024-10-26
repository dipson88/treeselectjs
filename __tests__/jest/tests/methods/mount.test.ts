import { renderTreeselect, getTagsElements } from '../../helpers'

const values = { Option1: 1, Option2: 2, Option3: 3 }
const options = [
  { value: values.Option1, name: 'Option 1', children: [] },
  { value: values.Option2, name: 'Option 2', children: [] },
  { value: values.Option3, name: 'Option 3', children: [] }
]

describe('mount method', () => {
  it('should update params with mount method', () => {
    const newValue = [values.Option1, values.Option2]
    const ariaLabel = 'test-aria-label'
    const treeselect = renderTreeselect({
      value: [],
      options: options
    })

    treeselect.value = newValue
    treeselect.ariaLabel = ariaLabel
    treeselect.mount()

    const tags = getTagsElements(treeselect.parentHtmlContainer)

    expect(tags.length).toBe(newValue.length)
    expect(treeselect.value).toEqual(newValue)
    expect(treeselect.parentHtmlContainer.innerHTML).toContain(ariaLabel)
    expect(treeselect.ariaLabel).toBe(ariaLabel)
  })
})
