class TreeselectInput {
  #isOpenMode = false
  #inputElement = null
  #inputElementArrow = null
  #tagsSection = null

  constructor ({
    value,
    showOnlyNumberMode,
    clearable,
    opened,
    searchable,
    placeholder
  }) {
    // Main params
    this.value = value ?? []
    this.searchText = ''

    // Settings params
    this.showOnlyNumberMode = showOnlyNumberMode ?? false
    this.clearable = clearable ?? true
    this.opened = opened ?? false
    this.searchable = searchable ?? true
    this.placeholder = placeholder ?? 'Search...'

    // SubElements
    this.#inputElement = this.#createInput()
    this.#inputElementArrow = this.#createInputArrow()
    this.#tagsSection = this.#createTagsSection()

    // Main Element
    this.srcElement = this.#createContainer()

    // Init calls
    this.#showHideOnlyNuberModeUpdate()
    this.#showHidePlaceholderUpdate()
  }

  #createContainer () {
    const container = document.createElement('div')
    container.classList.add('input-container')
    container.setAttribute('tabindex', '-1')
    this.#setContainerClasses(container)

    container.addEventListener('focus', () => {
      this.#inputElement.focus()
    })

    container.addEventListener('click', () => {
      this.#inputElement.focus()
      this.#openCloseUpdate()
    })

    const operators = this.#createOperators()

    container.append(this.#tagsSection, this.#inputElement, operators)

    return container
  }

  #setContainerClasses (container) {
    if (!this.searchable) {
      container.classList.add('input-container--unsearchable')
    }

    if (this.opened) {
      container.classList.add('input-container--opened')
    }

    if (!this.clearable) {
      container.classList.add('input-container--without-clear')
    }

    if (this.opened && !this.clearable) {
      container.classList.add('input-container--without-operators')
    }

    if ((this.opened && this.clearable) || (!this.opened && !this.clearable)) {
      container.classList.add('input-container--with-one-operators')
    }
  }

  #createTagsSection () {
    const tags = document.createElement('div')
    tags.classList.add('input-container-tags')
    this.#addTagsByValue(tags)

    return tags
  }

  #addTagsByValue (tagsSection) {
    if (this.showOnlyNumberMode) {
      tagsSection.appendChild(this.#createOnlyNumberElement(this.value))
    } else {
      this.value.forEach(value =>  {
        tagsSection.appendChild(this.#createElement(value))
      })
    }
  }

  #createElement ({ id, name }) {
    const element = document.createElement('div')
    element.setAttribute('element-id', id)
    element.setAttribute('title', name)
    element.setAttribute('tabindex', '-1')
    element.classList.add('input-container-element')
    const crossElement = this.#createElementCross()
    const tagElement = this.#createElementTag(name)

    element.addEventListener('click', (event) => {
      event.stopPropagation()
      this.#inputElement.focus()
      this.removeElement(id)
    })

    element.append(tagElement, crossElement)

    return element
  }

  #createElementTag (name) {
    const elementTag = document.createElement('span')
    elementTag.classList.add('input-container-element-name')
    elementTag.innerHTML = name

    return elementTag
  }

  #createElementCross () {
    const elementCross = document.createElement('span')
    elementCross.classList.add('input-container-element-cross')

    return elementCross
  }

  #createOnlyNumberElement (values) {
    const el = document.createElement('span')

    if (values.length === 1) {
      const [value] = values
      el.innerHTML = value.name

      return el
    }

    el.innerHTML = `${values.length} elements selected`

    return el
  }

  #createInput () {
    const input = document.createElement('input')
    input.classList.add('input-container-edit')

    input.addEventListener('focus', () => {
      this.srcElement.classList.add('input-container--focused')
    })

    input.addEventListener('keydown', (event) => {
      if (event.code === 'Backspace' && !this.searchText.length && this.value.length && this.showOnlyNumberMode) {
        this.clear()
      }

      if (event.code === 'Backspace' && !this.searchText.length && this.value.length) {
        this.removeElement(this.value[this.value.length - 1].id)
      }

      if (event.code === 'Space' && (!this.searchText || !this.searchable)) {
        this.#openCloseUpdate()
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
    operators.classList.add('input-container-operators')
    const clearBtn = this.#createClearButton()
    operators.append(clearBtn, this.#inputElementArrow)

    return operators
  }

  #createClearButton () {
    const clear = document.createElement('span')
    clear.classList.add('input-container-clear')
    clear.setAttribute('tabindex', "-1")

    clear.addEventListener('click', (event) => {
      event.stopPropagation()
      this.#inputElement.focus()
      this.clear()
    })

    return clear
  }

  #createInputArrow () {
    const inputArrow = document.createElement('span')
    inputArrow.classList.add('input-container-arrow')

    inputArrow.addEventListener('click', (event) => {
      event.stopPropagation()
      this.#inputElement.focus()
      this.#openCloseUpdate()
    })

    return inputArrow
  }

  #openCloseUpdate () {
    if (this.#isOpenMode) {
      this.#emitClose()
    } else {
      this.#emitOpen()
    }
  }

  #showHideOnlyNuberModeUpdate () {
    if (this.showOnlyNumberMode) {
      const dispalyValue = this.value?.length ? '' : 'none'
      this.#tagsSection.style.display = dispalyValue
    }
  }

  #showHidePlaceholderUpdate () {
    if (!this.placeholder) {
      return
    }

    if (this.value?.length) {
      this.#inputElement.removeAttribute('placeholder')
    } else {
      this.#inputElement.setAttribute('placeholder', this.placeholder)
    }
  }

  // Emits
  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.value }))
  }

  #emitSearch (value) {
    this.srcElement.dispatchEvent(new CustomEvent('search', { detail: value }))
  }

  #emitOpen () {
    if (!this.#isOpenMode) {
      this.srcElement.dispatchEvent(new CustomEvent('open'))
      this.#isOpenMode = true

      if (!this.opened) {
        this.#inputElementArrow.classList.add('input-container-arrow--opened')
      }
    }
  }

  #emitClose () {
    if (this.#isOpenMode) {
      this.srcElement.dispatchEvent(new CustomEvent('close'))
      this.#isOpenMode = false

      if (!this.opened) {
        this.#inputElementArrow.classList.remove('input-container-arrow--opened')
      }
    }
  }

  // Public methods
  focus () {
    this.#inputElement.focus()
  }

  blur () {
    this.srcElement.classList.remove('input-container--focused')
    this.#emitClose()
  }

  updateValue (value, isTriggeredInput) {
    this.value = value
    this.#tagsSection.innerHTML = ''
    this.#addTagsByValue(this.#tagsSection)
    this.#showHideOnlyNuberModeUpdate()
    this.#showHidePlaceholderUpdate()

    if (isTriggeredInput) {
      this.#emitInput()
    }
  }

  clear () {
    this.value = []
    this.#inputElement.value = ''
    this.#tagsSection.innerHTML = ''
    this.searchText = ''
    this.updateValue([], true)
    this.#emitSearch('')
  }

  removeElement (id) {
    this.value = this.value.filter(v => v.id !== id)
    const el = this.#tagsSection.querySelector(`[element-id="${id}"]`)

    if (el) {
      this.#tagsSection.removeChild(el)
      this.#showHidePlaceholderUpdate()
      this.#emitInput()
    }
  }

  updateOpenCloseStatus () {
    this.#openCloseUpdate()
  }
}

export default TreeselectInput
