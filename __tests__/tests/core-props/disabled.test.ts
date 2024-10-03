import { fireEvent } from '@testing-library/dom'
import { renderTreeselect } from '../../helpers'

describe('disabled prop', () => {
  it('should render a disabled Treeselect', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
      disabled: true
    })

    expect(treeselect.parentHtmlContainer.classList.contains('treeselect--disabled')).toBe(true)
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
    const name = 'Option 1'

    const treeselect = renderTreeselect({
      value: [1],
      options: [{ value: 1, name, children: [] }],
      disabled: true
    })

    const tagsElement = treeselect.parentHtmlContainer.querySelector('.treeselect-input__tags') as HTMLElement
    fireEvent.mouseDown(tagsElement)
    expect(tagsElement.innerHTML).toContain(name)
  })

  it('should not be focused when Treeselect is disabled', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: [],
      disabled: true
    })

    const input = treeselect.parentHtmlContainer.querySelector('.treeselect-input__edit') as HTMLElement
    expect(input.getAttribute('tabindex')).toBe('-1')
  })

  it('should be focused when Treeselect is enabled', () => {
    const treeselect = renderTreeselect({
      value: [],
      options: []
    })

    const input = treeselect.parentHtmlContainer.querySelector('.treeselect-input__edit') as HTMLElement
    expect(input.getAttribute('tabindex')).not.toBe('-1')
  })
})
