import { fireEvent } from '@testing-library/dom'
import { renderTreeselect, getArrowElement, getListItems, getTagsElement, classes } from '../../helpers'

const { list: listClasses } = classes

describe('options prop', () => {
  it('should render a Treeselect with empty options', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: []
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)

    expect(document.body.innerHTML).toContain('No results found...')
    expect(treeselect.options).toEqual([])
  })

  it('should render a Treeselect with options', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        { value: 1, name: 'Option 1', children: [] },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const options = getListItems(treeselect.parentHtmlContainer)

    expect(options.length).toBe(3)
    expect(treeselect.options.length).toEqual(3)
  })

  it('should contain attributes in options', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        { value: 1, name: 'Option 1', children: [], htmlAttr: { test: 'test-data-1' } },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const firstOption = getListItems(treeselect.parentHtmlContainer)[0]

    expect(firstOption.getAttribute('test')).toBe('test-data-1')
    expect(firstOption.innerHTML).toContain('Option 1')
  })

  it('should contain attributes in children options', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        {
          value: 1,
          name: 'Option 1',
          children: [
            { value: 2, name: 'Option 2', children: [], htmlAttr: { test: 'test-data-2' } },
            { value: 3, name: 'Option 3', children: [] }
          ]
        }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const options = getListItems(treeselect.parentHtmlContainer)
    const secondOption = options[1]

    expect(secondOption.getAttribute('test')).toBe('test-data-2')
    expect(secondOption.innerHTML).toContain('Option 2')
  })

  it('should contain disabled class in options', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        { value: 1, name: 'Option 1', children: [], disabled: true },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const firstOption = getListItems(treeselect.parentHtmlContainer)[0]

    expect(firstOption.classList.contains(listClasses.itemDisabled)).toBe(true)
  })

  it('should not select disabled option', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        { value: 1, name: 'Option 1', children: [], disabled: true },
        { value: 2, name: 'Option 2', children: [] },
        { value: 3, name: 'Option 3', children: [] }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const firstOption = getListItems(treeselect.parentHtmlContainer)[0]
    fireEvent.mouseDown(firstOption)
    const tagsElement = getTagsElement(treeselect.parentHtmlContainer)

    expect(treeselect.value).toEqual([])
    expect(tagsElement.innerHTML).not.toContain('Option 1')
  })

  it('should render a Treeselect with children options', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        {
          value: 1,
          name: 'Option 1',
          children: [
            { value: 2, name: 'Option 2', children: [] },
            { value: 3, name: 'Option 3', children: [] }
          ]
        }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const options = getListItems(treeselect.parentHtmlContainer)

    expect(options.length).toBe(3)
    expect(treeselect.options.length).toEqual(1)
    expect(treeselect.options[0].children.length).toEqual(2)
  })

  it('should not select disabled children option', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        {
          value: 1,
          name: 'Option 1',
          children: [
            { value: 2, name: 'Option 2', children: [], disabled: true },
            { value: 3, name: 'Option 3', children: [] }
          ]
        }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const options = getListItems(treeselect.parentHtmlContainer)
    const secondOption = options[1]
    fireEvent.mouseDown(secondOption)
    const tagsElement = getTagsElement(treeselect.parentHtmlContainer)

    expect(treeselect.value).toEqual([])
    expect(tagsElement.innerHTML).not.toContain('Option 2')
  })

  it('should select children if all children are selected', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        {
          value: 1,
          name: 'Option 1',
          children: [
            { value: 2, name: 'Option 2', children: [] },
            { value: 3, name: 'Option 3', children: [] }
          ]
        }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const options = getListItems(treeselect.parentHtmlContainer)
    const secondOption = options[1]
    const thirdOption = options[2]
    fireEvent.mouseDown(secondOption)
    fireEvent.mouseDown(thirdOption)
    const tagsElement = getTagsElement(treeselect.parentHtmlContainer)

    expect(treeselect.value).toEqual([2, 3])
    expect(tagsElement.innerHTML).toContain('Option 1')
  })

  it('should select non disabled children if all children are selected and one is disabled', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [
        {
          value: 1,
          name: 'Option 1',
          children: [
            { value: 2, name: 'Option 2', children: [], disabled: true },
            { value: 3, name: 'Option 3', children: [] }
          ]
        }
      ]
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const options = getListItems(treeselect.parentHtmlContainer)
    const thirdOption = options[2]
    fireEvent.mouseDown(thirdOption)
    const tagsElement = getTagsElement(treeselect.parentHtmlContainer)

    expect(treeselect.value).toEqual([3])
    expect(tagsElement.innerHTML).toContain('Option 3')
  })
})
