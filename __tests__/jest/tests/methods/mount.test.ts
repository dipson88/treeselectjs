import { renderTreeselect, getTagsElements } from '../../helpers'

describe('mount method', () => {
  it('should update params with mount method', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        { value: 1, name: 'Option 1', children: [] },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    treeselect.value = [1, 2]
    treeselect.ariaLabel = 'test-aria-label'
    treeselect.mount()

    const tags = getTagsElements(treeselect.parentHtmlContainer)

    expect(tags.length).toBe(2)
    expect(treeselect.value).toEqual([1, 2])
    expect(treeselect.parentHtmlContainer.innerHTML).toContain('test-aria-label')
    expect(treeselect.ariaLabel).toBe('test-aria-label')
  })
})
