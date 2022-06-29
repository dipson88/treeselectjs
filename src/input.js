import svg from './svgIcons.js'

class TreeselectInput {
  #htmlTagsSection = null
  #htmlEditControl = null
  #htmlOperators = null
  #htmlArrow = null
  #openEvent = new CustomEvent('open')
  #closeEvent = new CustomEvent('close')

  constructor ({
    value,
    showTags,
    clearable,
    isAlwaysOpened,
    searchable,
    placeholder,
    disabled
  }) {
    this.value = value

    this.showTags = showTags ?? true
    this.searchable = searchable ?? true
    this.placeholder = placeholder ?? 'Search...'
    this.clearable = clearable ?? true
    this.isAlwaysOpened = isAlwaysOpened ?? false
    this.disabled = disabled ?? false

    this.isOpened = false
    this.searchText = ''
    this.srcElement = this.#createTreeselectInput()

    this.#updateDOM()
  }

  // Public
  focus () {
    this.#htmlEditControl.focus()
  }

  blur () {
    if (this.isOpened) {
      this.#updateOpenClose()
    }
  }

  updateValue (newValue) {
    this.value = newValue
    this.#updateTags()
    this.#updateEditControl()
  }

  removeItem (id) {
    this.value = this.value.filter(v => v.id !== id)
    this.#emitInput()
    this.#updateTags()
    this.#updateEditControl()
  }

  clear () {
    this.value = []
    this.searchText = ''
    this.#emitSearch('')
    this.#emitInput()
    this.#updateTags()
    this.#updateEditControl()
  }

  openClose () {
    this.#updateOpenClose()
  }

  #updateDOM () {
    this.#updateTags()
    this.#updateEditControl()
    this.#updateOperators()
  }

  #updateTags () {
    this.#htmlTagsSection.innerHTML = ''

    if (this.showTags) {
      this.#htmlTagsSection.append(...this.#createTags())
    } else {
      this.#htmlTagsSection.appendChild(this.#createCountElement())
    }
  }

  #updateOperators () {
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

  #updateArrowDirection () {
    if (!this.isAlwaysOpened) {
      const arrowSvg = this.isOpened ? svg.arrowUp : svg.arrowDown
      this.#htmlArrow.innerHTML = arrowSvg
    }
  }

  #updateEditControl () {
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

  #updateOpenClose () {
    this.isOpened = !this.isOpened
    this.#updateArrowDirection()

    if (!this.isOpened) {
      this.#emitClose()
    } else {
      this.#emitOpen()
    }
  }

  #createTreeselectInput () {
    const container = document.createElement('div')
    container.classList.add('treeselect-input')
    container.setAttribute('tabindex', '-1')

    this.#htmlTagsSection = this.#createTagsSection()
    this.#htmlEditControl = this.#createControl()
    this.#htmlOperators = this.#createOperators()

    container.addEventListener('mousedown', (e) => {
      e.preventDefault()

      if (!this.isOpened) {
        this.#updateOpenClose()
      }

      this.focus()
    })

    container.append(this.#htmlTagsSection, this.#htmlEditControl, this.#htmlOperators)

    return container
  }

  #createTagsSection () {
    const tagsSection = document.createElement('div')
    tagsSection.classList.add('treeselect-input__tags')

    return tagsSection
  }

  #createTags () {
    return this.value.map(value => {
      const element = document.createElement('div')
      element.classList.add('treeselect-input__tags-element')
      element.setAttribute('tabindex', '-1')
      element.setAttribute('tag-id', value.id)
      element.setAttribute('title', value.name)

      const name = this.#createTagName(value.name)
      const cross = this.#createTagCross()

      element.addEventListener('mousedown', (e) => {
        // Two methods help to prevent mousedown on main container
        e.preventDefault()
        e.stopPropagation()
        this.focus()
        this.removeItem(value.id)
      })

      element.append(name, cross)

      return element
    })
  }

  #createTagName (name) {
    const elementTag = document.createElement('span')
    elementTag.classList.add('treeselect-input__tags-name')
    elementTag.innerHTML = name

    return elementTag
  }

  #createTagCross () {
    const elementCross = document.createElement('span')
    elementCross.classList.add('treeselect-input__tags-cross')
    elementCross.innerHTML = svg.cross

    return elementCross
  }

  #createCountElement () {
    const countEl = document.createElement('span')
    countEl.classList.add('treeselect-input__tags-count')

    if (!this.value.length) {
      countEl.innerHTML = ''

      return countEl
    }

    countEl.innerHTML = this.value.length === 1
      ? this.value[0].name
      : `${this.value.length} elements selected`

    return countEl
  }

  #createControl () {
    const input = document.createElement('input')
    input.classList.add('treeselect-input__edit')

    if (this.disabled) {
      input.setAttribute('tabindex', '-1')
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !this.searchText.length && this.value.length && !this.showTags) {
        this.clear()
      }

      if (e.key === 'Backspace' && !this.searchText.length && this.value.length) {
        this.removeItem(this.value[this.value.length - 1].id)
      }

      if (e.code === 'Space' && (!this.searchText || !this.searchable)) {
        this.#updateOpenClose()
      }
    })
    input.addEventListener('input', (event) => {
      event.stopPropagation()
      const oldValue = this.searchText
      const newValue = input.value.trim()

      // If try to enter only spaces
      if (oldValue.length === 0 && newValue.length === 0) {
        input.value = ''

        return
      }

      if (this.searchable) {
        this.#emitSearch(event.target.value)

        if (!this.isOpened) {
          this.#updateOpenClose()
        }
      } else {
        input.value = ''
      }

      this.searchText = input.value
    })

    return input
  }

  #createOperators () {
    const operators = document.createElement('div')
    operators.classList.add('treeselect-input__operators')

    return operators
  }

  #createClearButton () {
    const clear = document.createElement('span')
    clear.classList.add('treeselect-input__clear')
    clear.setAttribute('tabindex', '-1')
    clear.innerHTML = svg.clear

    clear.addEventListener('mousedown', (e) => {
      // Two methods help to prevent mousedown on main container
      e.preventDefault()
      e.stopPropagation()
      this.#htmlEditControl.focus()

      if (this.searchText.length || this.value.length) {
        this.clear()
      }
    })

    return clear
  }

  #createInputArrow (isOpen) {
    this.#htmlArrow = document.createElement('span')
    this.#htmlArrow.classList.add('treeselect-input__arrow')
    this.#htmlArrow.innerHTML = isOpen ? svg.arrowUp : svg.arrowDown

    this.#htmlArrow.addEventListener('mousedown', (e) => {
      // Two methods help to prevent mousedown on main container
      e.stopPropagation()
      e.preventDefault()
      this.focus()
      this.#updateOpenClose()
    })

    return this.#htmlArrow
  }

  // Emits
  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.value }))
  }

  #emitSearch (value) {
    this.srcElement.dispatchEvent(new CustomEvent('search', { detail: value }))
  }

  #emitOpen () {
    this.srcElement.dispatchEvent(this.#openEvent)
  }

  #emitClose () {
    this.srcElement.dispatchEvent(this.#closeEvent)
  }
}

export default TreeselectInput
