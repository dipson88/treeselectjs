import svg from './svgIcons.js'

class TreeselectInput {
  constructor ({
    value,
    showTags,
    clearable,
    isAlwaysOpened,
    searchable,
    placeholder
  }) {
    this.value = value

    this.showTags = showTags ?? true
    this.searchable = searchable ?? true
    this.placeholder = placeholder ?? 'Search...'
    this.clearable = clearable ?? true
    this.isAlwaysOpened = isAlwaysOpened ?? false

    this.isOpened = false
    this.searchText = ''
    this.srcElement =  this.#createTreeselectInput()

    this.#updateDOM()
  }

  // Public
  focus () {
    const editControl = this.srcElement.querySelector('.treeselect-input__edit')
    editControl.focus()
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
    const tagsSection = this.srcElement.querySelector('.treeselect-input__tags')
    tagsSection.innerHTML = ''

    if (this.showTags) {
      tagsSection.append(...this.#createTags())
    } else {
      tagsSection.appendChild(this.#createCountElement())
    }
  }

  #updateOperators () {
    const operators = this.srcElement.querySelector('.treeselect-input__operators')
    operators.innerHTML = ''

    if (this.clearable) {
      operators.appendChild(this.#createClearButton()) 
    }

    if (!this.isAlwaysOpened) {
      operators.appendChild(this.#createInputArrow(this.isOpened))
    }
  }

  #updateEditControl () {
    const editControl = this.srcElement.querySelector('.treeselect-input__edit')

    if (this.value?.length) {
      editControl.removeAttribute('placeholder')
    } else {
      editControl.setAttribute('placeholder', this.placeholder)
    }

    if (!this.searchable) {
      this.srcElement.classList.add('treeselect-input--unsearchable')
    } else {
      this.srcElement.classList.remove('treeselect-input--unsearchable')
    }

    editControl.value = this.searchText
  }

  #updateOpenClose () {
    if (this.isOpened) {
      this.#emitClose()
    } else {
      this.#emitOpen()
    }

    this.isOpened = !this.isOpened
    this.#updateOperators()
  }

  #createTreeselectInput () {
    const container = document.createElement('div')
    container.classList.add('treeselect-input')
    container.setAttribute('tabindex', '-1')

    const tagsSection = this.#createTagsSection()
    const editControl = this.#createControl()
    const operators = this.#createOperators()

    container.addEventListener('click', () => {
      this.focus()
      this.#updateOpenClose()
    })

    container.append(tagsSection, editControl, operators)

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

      element.addEventListener('click', (e) => {
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

      if (this.searchable) {
        this.#emitSearch(event.target.value)
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

    clear.addEventListener('click', (e) => {
      e.stopPropagation()
      const editControl = this.srcElement.querySelector('.treeselect-input__edit')
      editControl.focus()
      this.clear()
    })

    return clear
  }

  #createInputArrow (isOpen) {
    const inputArrow = document.createElement('span')
    inputArrow.classList.add('treeselect-input__arrow')
    inputArrow.innerHTML = isOpen ? svg.arrowUp : svg.arrowDown

    inputArrow.addEventListener('click', (e) => {
      e.stopPropagation()
      this.focus()
      this.#updateOpenClose()
    })

    return inputArrow
  }

  // Emits
  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.value }))
  }

  #emitSearch (value) {
    this.srcElement.dispatchEvent(new CustomEvent('search', { detail: value }))
  }

  #emitOpen () {
    this.srcElement.dispatchEvent(new CustomEvent('open'))
  }

  #emitClose () {
    this.srcElement.dispatchEvent(new CustomEvent('close'))
  }
}

export default TreeselectInput
