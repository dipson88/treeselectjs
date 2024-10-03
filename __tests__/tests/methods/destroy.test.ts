import { renderTreeselect, getTagsElements } from '../../helpers'

describe('destroy method', () => {
  it('should remove treeselect form the DOM', () => {
    const treeselect = renderTreeselect({
      value: [1],
      options: [
        { value: 1, name: 'Option 1', children: [] },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    treeselect.destroy()

    const tags = getTagsElements(treeselect.parentHtmlContainer)
    const domTreeselect = document.querySelector('.treeselect-input') as HTMLElement

    expect(domTreeselect).toBeNull()
    expect(tags.length).toBe(0)
    expect(treeselect.value).toEqual([1])
  })
})
