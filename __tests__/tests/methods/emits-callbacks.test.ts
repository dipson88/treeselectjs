import { fireEvent } from '@testing-library/dom'
import { renderTreeselect, getTagsElements, getArrowElement, getEditElement } from '../../helpers'

describe('emits-callbacks method', () => {
  it('should call input callback if change value', () => {
    const inputFn = jest.fn()

    const treeselect = renderTreeselect({
      value: [1, 2, 3],
      options: [
        { value: 1, name: '1', children: [] },
        { value: 2, name: '2', children: [] },
        { value: 3, name: '3', children: [] }
      ],
      inputCallback: inputFn
    })

    treeselect.srcElement?.addEventListener('input', (e: any) => {
      inputFn(e.detail)
    })

    const tags = getTagsElements(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(tags[0])

    expect(inputFn).toHaveBeenNthCalledWith(2, [2, 3])
  })

  it('should call open callback if open', () => {
    const openFn = jest.fn()

    const treeselect = renderTreeselect({
      value: [1],
      options: [{ value: 1, name: '1', children: [] }],
      openCallback: openFn
    })

    treeselect.srcElement?.addEventListener('open', (e: any) => {
      openFn(e.detail)
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)

    expect(openFn).toHaveBeenNthCalledWith(2, [1])
  })

  it('should call close callback if close', () => {
    const closeFn = jest.fn()

    const treeselect = renderTreeselect({
      value: [1],
      options: [{ value: 1, name: '1', children: [] }],
      closeCallback: closeFn
    })

    treeselect.srcElement?.addEventListener('close', (e: any) => {
      closeFn(e.detail)
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    fireEvent.mouseDown(arrow)

    expect(closeFn).toHaveBeenNthCalledWith(2, [1])
  })

  it('should call search callback if search', () => {
    const searchFn = jest.fn()

    const treeselect = renderTreeselect({
      value: [1],
      options: [{ value: 1, name: '1', children: [] }],
      searchCallback: searchFn
    })

    treeselect.srcElement?.addEventListener('search', (e: any) => {
      searchFn(e.detail)
    })

    const input = getEditElement(treeselect.parentHtmlContainer)
    fireEvent.input(input, { target: { value: '123' } })

    expect(searchFn).toHaveBeenNthCalledWith(2, '123')
  })

  it('should call name-change callback if change name', () => {
    const nameChangeFn = jest.fn()

    const treeselect = renderTreeselect({
      value: [1, 2, 3],
      options: [
        { value: 1, name: '1', children: [] },
        { value: 2, name: '2', children: [] },
        { value: 3, name: '3', children: [] }
      ],
      nameChangeCallback: nameChangeFn
    })

    treeselect.srcElement?.addEventListener('name-change', (e: any) => {
      nameChangeFn(e.detail)
    })

    const tags = getTagsElements(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(tags[0])

    expect(nameChangeFn).toHaveBeenNthCalledWith(2, '2, 3')
  })

  it('should call open-close-group callback if open-close group', () => {
    const openCloseGroupFn = jest.fn()
    const openCloseGroupListener = jest.fn()

    const treeselect = renderTreeselect({
      value: [1],
      openLevel: 0,
      options: [
        {
          value: 1,
          name: '1',
          children: [
            { value: 2, name: '2', children: [] },
            { value: 3, name: '3', children: [] }
          ]
        }
      ],
      openCloseGroupCallback: openCloseGroupFn
    })

    treeselect.srcElement?.addEventListener('open-close-group', (e: any) => {
      openCloseGroupListener(e.detail)
    })

    const arrow = getArrowElement(treeselect.parentHtmlContainer)
    fireEvent.mouseDown(arrow)
    const groupArrow = treeselect.parentHtmlContainer.querySelector('.treeselect-list__item-icon') as HTMLElement
    fireEvent.mouseDown(groupArrow)

    expect(openCloseGroupListener).toHaveBeenNthCalledWith(1, { groupId: 1, isClosed: false })
    expect(openCloseGroupFn).toHaveBeenNthCalledWith(1, 1, false)
  })
})
