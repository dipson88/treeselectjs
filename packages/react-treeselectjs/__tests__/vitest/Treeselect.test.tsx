// biome-ignore lint/correctness/noUnusedImports: React is required by the classic JSX transform
import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Treeselect from '../../src/Treeselect'
import { classesSelectors, defaultOptions, optionNames, optionsValues } from 'treeselectjs-test-helpers'

const { input: inputSelectors, list: listSelectors } = classesSelectors

const awaitSearchDebounce = () => new Promise((resolve) => setTimeout(resolve, 400))

const findItemByTitle = (container: HTMLElement, title: string) =>
  Array.from(container.querySelectorAll<HTMLElement>(listSelectors.item)).find(
    (item) => item.getAttribute('title') === title,
  ) as HTMLElement

afterEach(() => {
  cleanup()
})

describe('React Treeselect wrapper', () => {
  it('renders and opens the list on arrow interaction', () => {
    const { container } = render(<Treeselect options={defaultOptions} value={[]} />)

    const arrow = container.querySelector(inputSelectors.arrow) as HTMLElement
    fireEvent.mouseDown(arrow)

    expect(container.querySelector(listSelectors.base)).toBeInTheDocument()
    expect(container.querySelectorAll(listSelectors.item).length).toBeGreaterThan(0)
  })

  it('fires onInput and renders a tag when a leaf node is selected', () => {
    const onInput = vi.fn()
    const { container } = render(<Treeselect options={defaultOptions} value={[]} onInput={onInput} />)

    const arrow = container.querySelector(inputSelectors.arrow) as HTMLElement
    fireEvent.mouseDown(arrow)

    const chelseaItem = findItemByTitle(container, optionNames.ChelseaItem)
    fireEvent.mouseDown(chelseaItem)

    expect(onInput).toHaveBeenCalledWith([optionsValues.ChelseaItem])
    expect(container.querySelectorAll(inputSelectors.tagsElement).length).toBe(1)
  })

  it('pre-selects the node passed via the value prop', () => {
    const { container } = render(<Treeselect options={defaultOptions} value={[optionsValues.ChelseaItem]} />)

    const tags = container.querySelectorAll(inputSelectors.tagsElement)
    expect(tags).toHaveLength(1)
    expect(tags[0].textContent).toContain(optionNames.ChelseaItem)
  })

  it('filters the list when searching', async () => {
    const { container } = render(<Treeselect options={defaultOptions} value={[]} />)

    const arrow = container.querySelector(inputSelectors.arrow) as HTMLElement
    fireEvent.mouseDown(arrow)

    const editInput = container.querySelector(inputSelectors.edit) as HTMLInputElement
    fireEvent.input(editInput, { target: { value: optionNames.ParisItem } })
    await awaitSearchDebounce()

    const visibleItems = Array.from(container.querySelectorAll<HTMLElement>(listSelectors.item)).filter(
      (item) => !item.classList.contains(listSelectors.itemHidden.slice(1)),
    )

    expect(visibleItems.map((item) => item.getAttribute('title'))).toEqual([
      optionNames.FranceGroup,
      optionNames.ParisItem,
    ])
  })

  it('applies the disabled class (which blocks interaction via pointer-events in a real browser)', () => {
    const { container } = render(<Treeselect options={defaultOptions} value={[]} disabled />)

    expect(container.querySelector(classesSelectors.parent)).toHaveClass('treeselect--disabled')
  })

  it('re-syncs the rendered tree when options/value change after mount', () => {
    const { container, rerender } = render(<Treeselect options={defaultOptions} value={[]} />)

    const newOptions = [{ value: 100, name: 'New option', children: [] }]
    rerender(<Treeselect options={newOptions} value={[100]} />)

    const arrow = container.querySelector(inputSelectors.arrow) as HTMLElement
    fireEvent.mouseDown(arrow)

    expect(container.querySelectorAll(listSelectors.item)).toHaveLength(1)
    expect(container.querySelector(listSelectors.item)?.getAttribute('title')).toBe('New option')

    const tags = container.querySelectorAll(inputSelectors.tagsElement)
    expect(tags).toHaveLength(1)
    expect(tags[0].textContent).toContain('New option')
  })

  it('cleans up without throwing on unmount', () => {
    const { container, unmount } = render(<Treeselect options={defaultOptions} value={[]} />)

    const arrow = container.querySelector(inputSelectors.arrow) as HTMLElement
    fireEvent.mouseDown(arrow)

    expect(() => unmount()).not.toThrow()
    expect(container.querySelector(listSelectors.base)).not.toBeInTheDocument()
  })

  it('supports typing a search term via user-event', async () => {
    const { container } = render(<Treeselect options={defaultOptions} value={[]} />)

    const arrow = container.querySelector(inputSelectors.arrow) as HTMLElement
    fireEvent.mouseDown(arrow)

    const editInput = container.querySelector(inputSelectors.edit) as HTMLInputElement
    await userEvent.type(editInput, optionNames.LyonItem)
    await awaitSearchDebounce()

    const visibleItems = Array.from(container.querySelectorAll<HTMLElement>(listSelectors.item)).filter(
      (item) => !item.classList.contains(listSelectors.itemHidden.slice(1)),
    )

    expect(visibleItems.map((item) => item.getAttribute('title'))).toEqual([
      optionNames.FranceGroup,
      optionNames.LyonItem,
    ])
  })
})
