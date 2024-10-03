import { renderTreeselect } from '../../helpers'

describe('focus method', () => {
  it('should focus on the input', async () => {
    const treeselect = renderTreeselect({
      value: [],
      options: []
    })

    treeselect.focus()

    await new Promise((resolve) => setTimeout(resolve, 0))

    console.log(treeselect.parentHtmlContainer.outerHTML)

    const input = treeselect.parentHtmlContainer.querySelector('.treeselect-input__edit') as HTMLElement
    expect(document.activeElement).toBe(input)

    const inputContainer = treeselect.parentHtmlContainer.querySelector('.treeselect-input') as HTMLElement
    expect(inputContainer.classList.contains('treeselect-input--focused')).toBe(true)
  })
})
