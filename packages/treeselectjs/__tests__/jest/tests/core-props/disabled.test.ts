import { fireEvent } from '@testing-library/dom'
import { renderTreeselect, getTagsElement, getTagsElements, getArrowElement, classesSelectors } from '../../helpers'

const { list: listSelectors } = classesSelectors

describe('disabled prop', () => {
  it('should render a disabled Treeselect', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
      disabled: true,
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should not open the dropdown when Treeselect is disabled', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
      disabled: true,
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    expect(document.body.innerHTML).not.toContain(listSelectors.base)
  })

  it('should not remove tags when Treeselect is disabled', () => {
    const treeselect = renderTreeselect({
      value: [1],
      options: [{ value: 1, name: 'Option 1', children: [] }],
      disabled: true,
    })

    const tagsElement = getTagsElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(tagsElement)
    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)

    expect(tagsElements.length).toBe(1)
    expect(treeselect.value).toEqual([1])
  })
})
