import { defaultOptions, renderTreeselect, getListSlotElement } from '../../helpers'

describe('listSlotHtmlComponent prop', () => {
  it('should render the dropdown list with custom slot content', () => {
    const slotElement = document.createElement('div')
    slotElement.classList.add('custom-list-slot')
    slotElement.innerHTML = 'Custom List Slot'

    const treeselect = renderTreeselect({
      value: [],
      options: defaultOptions,
      listSlotHtmlComponent: slotElement
    })

    treeselect.toggleOpenClose()

    const listSlotElement = getListSlotElement(treeselect.parentHtmlContainer)

    expect(listSlotElement).toBeTruthy()
    expect(listSlotElement.querySelector('.custom-list-slot')).toBeTruthy()
    expect(treeselect.parentHtmlContainer).toMatchSnapshot()
  })
})
