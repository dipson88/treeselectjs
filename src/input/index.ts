import { ValueOptionType, FlattedOptionType, IconsType } from '../treeselectTypes'
import { ITreeselectInputParams, ITreeselectInput } from './inputTypes'
import { appendIconToElement } from '../svgIcons'

const getTagsSelectedName = (value: FlattedOptionType[]) => {
  return value.reduce((acc, { name }, index) => {
    acc += name

    if (index < value.length - 1) {
      acc += ', '
    }

    return acc
  }, '')
}

export class TreeselectInput implements ITreeselectInput {
  // Props
  value: FlattedOptionType[]
  showTags: boolean
  tagsCountText: string
  clearable: boolean
  isAlwaysOpened: boolean
  searchable: boolean
  placeholder: string
  disabled: boolean
  isSingleSelect: boolean
  id: string
  ariaLabel: string
  iconElements: IconsType

  // InnerState
  isOpened: boolean
  searchText: string
  srcElement: HTMLElement | Element

  // PrivateInnerState
  #htmlTagsSection: HTMLDivElement
  #htmlEditControl: HTMLInputElement
  #htmlOperators: HTMLDivElement
  #htmlArrow: HTMLElement | null

  // Callbacks
  inputCallback: (value: FlattedOptionType[]) => void
  searchCallback: (value: string) => void
  openCallback: () => void
  closeCallback: () => void
  keydownCallback: (e: KeyboardEvent) => void
  focusCallback: () => void
  blurCallback: () => void
  nameChangeCallback: (name: string) => void

  constructor({
    value,
    showTags,
    tagsCountText,
    clearable,
    isAlwaysOpened,
    searchable,
    placeholder,
    disabled,
    isSingleSelect,
    id,
    ariaLabel,
    iconElements,
    inputCallback,
    searchCallback,
    openCallback,
    closeCallback,
    keydownCallback,
    focusCallback,
    blurCallback,
    nameChangeCallback
  }: ITreeselectInputParams) {
    this.value = value
    this.showTags = showTags
    this.tagsCountText = tagsCountText
    this.searchable = searchable
    this.placeholder = placeholder
    this.clearable = clearable
    this.isAlwaysOpened = isAlwaysOpened
    this.disabled = disabled
    this.isSingleSelect = isSingleSelect
    this.id = id
    this.ariaLabel = ariaLabel
    this.iconElements = iconElements

    this.isOpened = false
    this.searchText = ''

    this.#htmlTagsSection = this.#createTagsSection()
    this.#htmlEditControl = this.#createControl()
    this.#htmlOperators = this.#createOperators()
    this.#htmlArrow = null

    this.inputCallback = inputCallback
    this.searchCallback = searchCallback
    this.openCallback = openCallback
    this.closeCallback = closeCallback
    this.keydownCallback = keydownCallback
    this.focusCallback = focusCallback
    this.blurCallback = blurCallback
    this.nameChangeCallback = nameChangeCallback

    this.srcElement = this.#createTreeselectInput(this.#htmlTagsSection, this.#htmlEditControl, this.#htmlOperators)

    this.#updateDOM()
  }

  // Public methods
  focus() {
    // We need focus after all updates.
    // We move focus after stack calls.
    setTimeout(() => this.#htmlEditControl.focus(), 0)
  }

  blur() {
    if (this.isOpened) {
      this.#updateOpenClose()
    }

    this.clearSearch()
    this.#htmlEditControl.blur()
  }

  updateValue(newValue: FlattedOptionType[]) {
    this.value = newValue
    this.#updateTags()
    this.#updateEditControl()
  }

  removeItem(id: ValueOptionType) {
    this.value = this.value.filter((v) => v.id !== id)
    this.#emitInput()
    this.#updateTags()
    this.#updateEditControl()
  }

  clear() {
    this.value = []
    this.#emitInput()
    this.#updateTags()
    this.clearSearch()
  }

  openClose() {
    this.#updateOpenClose()
  }

  clearSearch() {
    this.searchText = ''
    this.searchCallback('')
    this.#updateEditControl()
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
      const selectedName = getTagsSelectedName(this.value)
      this.nameChangeCallback(selectedName)
    } else {
      const countElement = this.#createCountElement()
      this.#htmlTagsSection.appendChild(countElement)
      this.nameChangeCallback(countElement.innerText)
    }

    // We need to add htmlEditControl because we clear all data inside the tags list
    this.#htmlTagsSection.appendChild(this.#htmlEditControl)
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
      const icon = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown
      appendIconToElement(icon, this.#htmlArrow)
    }
  }

  #updateEditControl() {
    if (this.value?.length) {
      this.#htmlEditControl.removeAttribute('placeholder')
      this.srcElement.classList.remove('treeselect-input--value-not-selected')
    } else {
      this.#htmlEditControl.setAttribute('placeholder', this.placeholder)
      this.srcElement.classList.add('treeselect-input--value-not-selected')
    }

    if (!this.searchable) {
      this.srcElement.classList.add('treeselect-input--unsearchable')
    } else {
      this.srcElement.classList.remove('treeselect-input--unsearchable')
    }

    if (this.isSingleSelect) {
      this.srcElement.classList.add('treeselect-input--is-single-select')
    } else {
      this.srcElement.classList.remove('treeselect-input--is-single-select')
    }

    this.#htmlEditControl.value = this.searchText
  }

  #updateOpenClose() {
    this.isOpened = !this.isOpened
    this.#updateArrowDirection()

    if (!this.isOpened) {
      this.closeCallback()
    } else {
      this.openCallback()
    }
  }

  #createTreeselectInput(htmlTagsSection: HTMLElement, htmlEditControl: HTMLElement, htmlOperators: HTMLElement) {
    const container = document.createElement('div')
    container.classList.add('treeselect-input')
    container.setAttribute('tabindex', '-1')

    container.addEventListener('mousedown', (e) => this.#containerMousedown(e))
    container.addEventListener('focus', () => this.focusCallback(), true)
    container.addEventListener('blur', () => this.blurCallback(), true)

    // We added htmlEditControl at the end of tags list
    htmlTagsSection.appendChild(htmlEditControl)
    container.append(htmlTagsSection, htmlOperators)

    return container
  }

  #containerMousedown(e: Event) {
    // TODO experimental for text selection
    // e.preventDefault()
    e.stopPropagation()

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
      element.setAttribute('tag-id', value.id.toString())
      element.setAttribute('title', value.name)

      const name = this.#createTagName(value.name)
      const cross = this.#createTagCross()

      element.addEventListener('mousedown', (e) => this.#tagsMousedown(e, value.id))

      element.append(name, cross)

      return element
    })
  }

  #tagsMousedown(e: Event, id: ValueOptionType) {
    // Two methods help to prevent mousedown on main container
    e.preventDefault()
    e.stopPropagation()
    this.removeItem(id)
    this.focus()
  }

  #createTagName(name: string) {
    const elementTag = document.createElement('span')
    elementTag.classList.add('treeselect-input__tags-name')
    elementTag.textContent = name

    return elementTag
  }

  #createTagCross() {
    const elementCross = document.createElement('span')
    elementCross.classList.add('treeselect-input__tags-cross')
    appendIconToElement(this.iconElements.cross, elementCross)

    return elementCross
  }

  #createCountElement() {
    const countEl = document.createElement('span')
    countEl.classList.add('treeselect-input__tags-count')

    if (!this.value.length) {
      countEl.textContent = ''
      countEl.setAttribute('title', '')

      return countEl
    }

    const count = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`
    countEl.textContent = count
    countEl.setAttribute('title', count)

    return countEl
  }

  #createControl() {
    const input = document.createElement('input')
    input.classList.add('treeselect-input__edit')

    if (this.id) {
      input.setAttribute('id', this.id)
    }

    if (!this.searchable || this.disabled) {
      input.setAttribute('readonly', 'readonly')
    }

    if (this.disabled) {
      input.setAttribute('tabindex', '-1')
    }

    if (this.ariaLabel.length) {
      input.setAttribute('aria-label', this.ariaLabel)
    }

    input.addEventListener('keydown', (e) => this.#controlKeydown(e))
    input.addEventListener('input', (e) => this.#controlInput(e, input))

    return input
  }

  #controlKeydown(e: KeyboardEvent) {
    e.stopPropagation()
    const key = e.key

    if (key === 'Backspace' && !this.searchText.length && this.value.length && !this.showTags) {
      this.clear()
    }

    if (key === 'Backspace' && !this.searchText.length && this.value.length) {
      this.removeItem(this.value[this.value.length - 1].id)
    }

    if (e.code === 'Space' && (!this.searchText || !this.searchable)) {
      this.#updateOpenClose()
    }

    // We need to prevent enter to avoid unexpected behavior inside forms.
    // Enter action is handled inside the keydownCallback method.
    // ArrowDown and ArrowUp were prevented to avoid cursor jumping during list navigation.
    if (key === 'Enter' || key === 'ArrowDown' || key === 'ArrowUp') {
      e.preventDefault()
    }

    this.keydownCallback(e)

    // We don't need focus during the page navigation.
    if (key !== 'Tab') {
      this.focus()
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
      this.searchCallback(searchValue)

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
    appendIconToElement(this.iconElements.clear, clear)

    clear.addEventListener('mousedown', (e) => this.#clearButtonMousedown(e))

    return clear
  }

  #clearButtonMousedown(e: Event) {
    e.preventDefault()
    e.stopPropagation()

    if (this.searchText.length || this.value.length) {
      this.clear()
    }

    this.focus()
  }

  #createInputArrow(isOpen: boolean) {
    this.#htmlArrow = document.createElement('span')
    this.#htmlArrow.classList.add('treeselect-input__arrow')
    const icon = isOpen ? this.iconElements.arrowUp : this.iconElements.arrowDown
    appendIconToElement(icon, this.#htmlArrow)

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
    this.inputCallback(this.value)
  }
}
