class TreeselectInput {
  constructor ({ value, showOnlyNumberMode, clearable, opened, searchable }) {
    // Main params
    this.value = value ?? []

    // Settings params
    this.showOnlyNumberMode = showOnlyNumberMode ?? false
    this.clearable = clearable ?? true
    this.opened = opened ?? false
    this.searchable = searchable ?? true

    // Elements
    this.srcElement = null

    // Create
    this.#init()
  }

  #init () {
    const container = this.#createContainer()
    this.srcElement = container
  }

  #createContainer () {
    const container = document.createElement('div')
    container.classList.add('input-container')
    const tags = this.#createTagsSection()
    const input = this.#createInput()
    const operators = this.#createOperators()

    container.addEventListener('focus', () => {
      container.classList.add('input-container-focused')

      if (!this.opened) {
        inputArrow.classList.add('input-container-arrow-opened')
        inputArrow.classList.remove('input-container-arrow-closed')
      }
    }, true)
    container.addEventListener('blur', () => {
      container.classList.remove('input-container-focused')

      if (!this.opened) {
        inputArrow.classList.remove('input-container-arrow-opened')
        inputArrow.classList.add('input-container-arrow-closed')
      }
    }, true)
    container.addEventListener('click', () => {
      const input = this.srcElement.querySelector('.input-container-edit')
      input.focus()
    })

    container.append(tags, input, operators)

    return container
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

    element.addEventListener('click', () => {
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

    if (!this.searchable) {
      input.classList.add('input-container-edit-unsearchable')
    }

    input.addEventListener('keydown', (event) => {
      if (event.code === 'Backspace' && input.value === '' && this.value.length) {
        this.removeElement(this.value[this.value.length - 1].id)
      }
    })

    input.addEventListener('input', (event) => {
      event.stopPropagation()

      if (this.searchable) {
        this.#emitSearch(event.target.value)
      } else {
        input.value = ''
      }
    })

    return input
  }

  #createOperators () {
    const operators = document.createElement('div')
    operators.classList.add('input-container-operators')
    const clearBtn = this.#createClearButton()
    const inputArrow = this.#createInputArrow()

    operators.append(clearBtn, inputArrow)

    return operators
  }

  #createClearButton () {
    const clear = document.createElement('span')
    clear.classList.add('input-container-clear')

    if (!this.clearable) {
      clear.classList.add('input-container-clear-hidden')
    }

    clear.addEventListener('click', () => {
      this.clear()
    })

    return clear
  }

  #createInputArrow () {
    const inputArrow = document.createElement('span')
    inputArrow.classList.add('input-container-arrow')

    const initClass = this.opened ? 'input-container-arrow-opened' : 'input-container-arrow-closed'
    inputArrow.classList.add(initClass)

    return inputArrow
  }

  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.value }))
  }

  #emitSearch (value) {
    this.srcElement.dispatchEvent(new CustomEvent('search', { detail: value }))
  }

  // Public methods
  updateValue (value, isTriggeredInput) {
    this.value = value
    const tags = this.srcElement.querySelector('.input-container-tags')
    tags.innerHTML = ''
    this.#addTagsByValue(tags)

    if (isTriggeredInput) {
      this.#emitInput()
    }
  }

  clear () {
    this.value = []
    const input = this.srcElement.querySelector('.input-container-edit')
    input.value = ''
    const tags = this.srcElement.querySelector('.input-container-tags')
    tags.innerHTML = ''
    this.updateValue([])
    this.#emitInput()
  }

  clearSearchValue () {
    const input = this.srcElement.querySelector('.input-container-edit')
    input.value = ''
  }

  removeElement (id) {
    this.value = this.value.filter(v => v.id !== id)
    const tags = this.srcElement.querySelector('.input-container-tags')
    const el = tags.querySelector(`[element-id="${id}"]`)

    if (el) {
      tags.removeChild(el)
      this.#emitInput()
    }
  }
}

export default TreeselectInput
