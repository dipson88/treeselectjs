import { fireEvent } from '@testing-library/dom'
import { renderTreeselect, getTagsElements } from '../../helpers'

describe('disabled prop', () => {
  it('should render a disabled Treeselect', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
      disabled: true
    })

    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })

  it('should not open the dropdown when Treeselect is disabled', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
      disabled: true
    })

    const arrow = treeselect.parentHtmlContainer.querySelector('.treeselect-input__arrow') as HTMLElement
    fireEvent.mouseDown(arrow)
    expect(document.body.innerHTML).not.toContain('.treeselect-list')
  })

  it('should not remove tags when Treeselect is disabled', () => {
    const treeselect = renderTreeselect({
      value: [1],
      options: [{ value: 1, name: 'Option 1', children: [] }],
      disabled: true
    })

    const tagsElement = treeselect.parentHtmlContainer.querySelector('.treeselect-input__tags') as HTMLElement
    fireEvent.mouseDown(tagsElement)
    const tagsElements = getTagsElements(treeselect.parentHtmlContainer)

    expect(tagsElements.length).toBe(1)
    expect(treeselect.value).toEqual([1])
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
