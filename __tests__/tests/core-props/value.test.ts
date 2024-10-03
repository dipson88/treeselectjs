import { fireEvent } from '@testing-library/dom'
import { renderTreeselect, getTagsElements } from '../../helpers'

describe('value prop', () => {
  it('should render a Treeselect with empty tags', () => {
    const name = 'Option 1'

    const treeselect = renderTreeselect({
      value: [],
      options: [{ value: 1, name, children: [] }]
    })

    const tagsElement = treeselect.parentHtmlContainer.querySelector('.treeselect-input__tags') as HTMLElement

    expect(tagsElement.innerHTML).not.toContain(name)
  })

  it('should render a Treeselect with tags', () => {
    const name1 = 'Option 1'
    const name2 = 'Option 2'

    const treeselect = renderTreeselect({
      value: [1],
      options: [
        { value: 1, name: name1, children: [] },
        { value: 2, name: name2, children: [] }
      ]
    })

    const tagsElement = treeselect.parentHtmlContainer.querySelector('.treeselect-input__tags') as HTMLElement

    expect(treeselect.value).toEqual([1])
    expect(tagsElement.innerHTML).toContain(name1)
    expect(tagsElement.innerHTML).not.toContain(name2)
  })

  it('should render a Treeselect with multiple tags', () => {
    const name1 = 'Option 1'
    const name2 = 'Option 2'

    const treeselect = renderTreeselect({
      value: [1, 2],
      options: [
        { value: 1, name: name1, children: [] },
        { value: 2, name: name2, children: [] }
      ]
    })

    const tagsElement = treeselect.parentHtmlContainer.querySelector('.treeselect-input__tags') as HTMLElement
    const tags = getTagsElements(treeselect.parentHtmlContainer)

    expect(tags.length).toBe(2)
    expect(treeselect.value).toEqual([1, 2])
    expect(tagsElement.innerHTML).toContain(name1)
    expect(tagsElement.innerHTML).toContain(name2)
  })

  it('should remove all tags', () => {
    const name1 = 'Option 1'
    const name2 = 'Option 2'

    const treeselect = renderTreeselect({
      value: [1, 2],
      options: [
        { value: 1, name: name1, children: [] },
        { value: 2, name: name2, children: [] }
      ]
    })

    const removeButton = treeselect.parentHtmlContainer.querySelector('.treeselect-input__clear') as HTMLElement
    fireEvent.mouseDown(removeButton)

    const tagsElement = treeselect.parentHtmlContainer.querySelector('.treeselect-input__tags') as HTMLElement

    expect(treeselect.value).toEqual([])
    expect(tagsElement.innerHTML).not.toContain(name1)
    expect(tagsElement.innerHTML).not.toContain(name2)
  })

  it('should remove one tag', () => {
    const name1 = 'Option 1'
    const name2 = 'Option 2'

    const treeselect = renderTreeselect({
      value: [1, 2],
      options: [
        { value: 1, name: name1, children: [] },
        { value: 2, name: name2, children: [] }
      ]
    })

    const tags = getTagsElements(treeselect.parentHtmlContainer)
    const firstTag = tags[0]
    fireEvent.mouseDown(firstTag)

    const newTags = getTagsElements(treeselect.parentHtmlContainer)

    expect(treeselect.value).toEqual([2])
    expect(newTags.length).toBe(1)
    expect(newTags[0].innerHTML).toContain(name2)
  })

  it('should update value with updateValue method', () => {
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

  it('should update value with mount method', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        { value: 1, name: 'Option 1', children: [] },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    treeselect.value = [1, 2]
    treeselect.mount()

    const tags = getTagsElements(treeselect.parentHtmlContainer)

    expect(tags.length).toBe(2)
    expect(treeselect.value).toEqual([1, 2])
  })

  it('should remove tag with backspace key', () => {
    const name1 = 'Option 1'
    const name2 = 'Option 2'

    const treeselect = renderTreeselect({
      value: [1, 2],
      options: [
        { value: 1, name: name1, children: [] },
        { value: 2, name: name2, children: [] }
      ]
    })

    fireEvent.mouseDown(treeselect.parentHtmlContainer)
    const input = treeselect.parentHtmlContainer.querySelector('.treeselect-input__edit') as HTMLElement
    fireEvent.keyDown(input, { key: 'Backspace' })
    const newTags = getTagsElements(treeselect.parentHtmlContainer)

    expect(treeselect.value).toEqual([1])
    expect(newTags.length).toBe(1)
    expect(newTags[0].innerHTML).toContain(name1)
  })

  // TODO: Add test with wrong value and parent value.
})
