import svg from '../svgIcons'
import { ITreeselectInputParams, ITreeselectInput, InputValueType } from './inputTypes'

export class TreeselectInput implements ITreeselectInput {
  // Props
  value: InputValueType
  showTags: boolean
  tagsCountText: string
  clearable: boolean
  isAlwaysOpened: boolean
  searchable: boolean
  placeholder: string
  disabled: boolean

  // InnerState
  isOpened: boolean
  searchText: string
  srcElement: HTMLElement | Element

  // PrivateInnerState
  #htmlTagsSection: HTMLDivElement
  #htmlEditControl: HTMLInputElement
  #htmlOperators: HTMLDivElement
  #htmlArrow: HTMLElement | null

  constructor({
    value,
    showTags,
    tagsCountText,
    clearable,
    isAlwaysOpened,
    searchable,
    placeholder,
    disabled
  }: ITreeselectInputParams) {
    this.value = value
    this.showTags = showTags
    this.tagsCountText = tagsCountText
    this.searchable = searchable
    this.placeholder = placeholder
    this.clearable = clearable
    this.isAlwaysOpened = isAlwaysOpened
    this.disabled = disabled

    this.isOpened = false
    this.searchText = ''

    this.#htmlTagsSection = this.#createTagsSection()
    this.#htmlEditControl = this.#createControl()
    this.#htmlOperators = this.#createOperators()
    this.#htmlArrow = null

    this.srcElement = this.#createTreeselectInput(this.#htmlTagsSection, this.#htmlEditControl, this.#htmlOperators)

    this.#updateDOM()
  }

  // Public methods
  focus() {
    this.#htmlEditControl.focus()
  }

  blur() {
    if (this.isOpened) {
      this.#updateOpenClose()
    }
  }

  updateValue(newValue: InputValueType) {
    this.value = newValue
    this.#updateTags()
    this.#updateEditControl()
  }

  removeItem(id: string) {
    this.value = this.value.filter((v) => v.id !== id)
    this.#emitInput()
    this.#updateTags()
    this.#updateEditControl()
  }

  clear() {
    this.value = []
    this.searchText = ''
    this.#emitSearch('')
    this.#emitInput()
    this.#updateTags()
    this.#updateEditControl()
  }

  openClose() {
    this.#updateOpenClose()
  }

  // Private methods
  #updateDOM() {
    this.#updateTags()
    this.#updateEditControl()
    this.#updateOperators()
  }

  #updateTags() {
    this.#htmlTagsSection.innerHTML = ''

    if (this.showTags) {
      this.#htmlTagsSection.append(...this.#createTags())
    } else {
      this.#htmlTagsSection.appendChild(this.#createCountElement())
    }
  }

  #updateOperators() {
    const elements = []
    this.#htmlOperators.innerHTML = ''

    if (this.clearable) {
      elements.push(this.#createClearButton())
    }

    if (!this.isAlwaysOpened) {
      elements.push(this.#createInputArrow(this.isOpened))
    }

    if (elements.length) {
      this.#htmlOperators.append(...elements)
    }
  }

  #updateArrowDirection() {
    if (!this.isAlwaysOpened && this.#htmlArrow) {
      const arrowSvg = this.isOpened ? svg.arrowUp : svg.arrowDown
      this.#htmlArrow.innerHTML = arrowSvg
    }
  }

  #updateEditControl() {
    if (this.value?.length) {
      this.#htmlEditControl.removeAttribute('placeholder')
    } else {
      this.#htmlEditControl.setAttribute('placeholder', this.placeholder)
    }

    if (!this.searchable) {
      this.srcElement.classList.add('treeselect-input--unsearchable')
    } else {
      this.srcElement.classList.remove('treeselect-input--unsearchable')
    }

    this.#htmlEditControl.value = this.searchText
  }

  #updateOpenClose() {
    this.isOpened = !this.isOpened
    this.#updateArrowDirection()

    if (!this.isOpened) {
      this.#emitClose()
    } else {
      this.#emitOpen()
    }
  }

  #createTreeselectInput(htmlTagsSection: HTMLElement, htmlEditControl: HTMLElement, htmlOperators: HTMLElement) {
    const container = document.createElement('div')
    container.classList.add('treeselect-input')
    container.setAttribute('tabindex', '-1')

    container.addEventListener('mousedown', (e) => this.#containerMousedown(e))

    container.append(htmlTagsSection, htmlEditControl, htmlOperators)

    return container
  }

  #containerMousedown(e: Event) {
    e.preventDefault()

    if (!this.isOpened) {
      this.#updateOpenClose()
    }

    this.focus()
  }

  #createTagsSection() {
    const tagsSection = document.createElement('div')
    tagsSection.classList.add('treeselect-input__tags')

    return tagsSection
  }

  #createTags() {
    return this.value.map((value) => {
      const element = document.createElement('div')
      element.classList.add('treeselect-input__tags-element')
      element.setAttribute('tabindex', '-1')
      element.setAttribute('tag-id', value.id)
      element.setAttribute('title', value.name)

      const name = this.#createTagName(value.name)
      const cross = this.#createTagCross()

      element.addEventListener('mousedown', (e) => this.#tagsMousedown(e, value.id))

      element.append(name, cross)

      return element
    })
  }

  #tagsMousedown(e: Event, id: string) {
    // Two methods help to prevent mousedown on main container
    e.preventDefault()
    e.stopPropagation()
    this.focus()
    this.removeItem(id)
  }

  #createTagName(name: string) {
    const elementTag = document.createElement('span')
    elementTag.classList.add('treeselect-input__tags-name')
    elementTag.innerHTML = name

    return elementTag
  }

  #createTagCross() {
    const elementCross = document.createElement('span')
    elementCross.classList.add('treeselect-input__tags-cross')
    elementCross.innerHTML = svg.cross

    return elementCross
  }

  #createCountElement() {
    const countEl = document.createElement('span')
    countEl.classList.add('treeselect-input__tags-count')

    if (!this.value.length) {
      countEl.innerHTML = ''

      return countEl
    }

    countEl.innerHTML = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`

    return countEl
  }

  #createControl() {
    const input = document.createElement('input')
    input.classList.add('treeselect-input__edit')

    if (this.disabled) {
      input.setAttribute('tabindex', '-1')
    }

    input.addEventListener('keydown', (e) => this.#controlKeydown(e))
    input.addEventListener('input', (e) => this.#controlInput(e, input))

    return input
  }

  #controlKeydown(e: KeyboardEvent) {
    if (e.key === 'Backspace' && !this.searchText.length && this.value.length && !this.showTags) {
      this.clear()
    }

    if (e.key === 'Backspace' && !this.searchText.length && this.value.length) {
      this.removeItem(this.value[this.value.length - 1].id)
    }

    if (e.code === 'Space' && (!this.searchText || !this.searchable)) {
      this.#updateOpenClose()
    }
  }

  #controlInput(e: Event, input: HTMLInputElement) {
    e.stopPropagation()
    const oldValue = this.searchText
    const newValue = input.value.trim()

    // If try to enter only spaces
    if (oldValue.length === 0 && newValue.length === 0) {
      input.value = ''

      return
    }

    if (this.searchable) {
      const searchValue = (e.target as HTMLInputElement).value
      this.#emitSearch(searchValue)

      if (!this.isOpened) {
        this.#updateOpenClose()
      }
    } else {
      input.value = ''
    }

    this.searchText = input.value
  }

  #createOperators() {
    const operators = document.createElement('div')
    operators.classList.add('treeselect-input__operators')

    return operators
  }

  #createClearButton() {
    const clear = document.createElement('span')
    clear.classList.add('treeselect-input__clear')
    clear.setAttribute('tabindex', '-1')
    clear.innerHTML = svg.clear

    clear.addEventListener('mousedown', (e) => this.#clearButtonMousedown(e))

    return clear
  }

  #clearButtonMousedown(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    this.#htmlEditControl?.focus()

    if (this.searchText.length || this.value.length) {
      this.clear()
    }
  }

  #createInputArrow(isOpen: boolean) {
    this.#htmlArrow = document.createElement('span')
    this.#htmlArrow.classList.add('treeselect-input__arrow')
    this.#htmlArrow.innerHTML = isOpen ? svg.arrowUp : svg.arrowDown

    this.#htmlArrow.addEventListener('mousedown', (e) => this.#inputArrowMousedown(e))

    return this.#htmlArrow
  }

  #inputArrowMousedown(e: Event) {
    // Two methods help to prevent mousedown on main container
    e.stopPropagation()
    e.preventDefault()
    this.focus()
    this.#updateOpenClose()
  }

  // Emits
  #emitInput() {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.value }))
  }

  #emitSearch(value: string) {
    this.srcElement.dispatchEvent(new CustomEvent('search', { detail: value }))
  }

  #emitOpen() {
    this.srcElement.dispatchEvent(new CustomEvent('open'))
  }

  #emitClose() {
    this.srcElement.dispatchEvent(new CustomEvent('close'))
  }
}

export default TreeselectInput
