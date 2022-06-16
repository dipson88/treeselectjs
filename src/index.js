import TreeselectInput from "./input.js"
import TreeselectList from "./list.js"

class Treeselect {
  // Components
  #htmlContainer = null
  #treeselectList = null
  #treeselectInput = null

  // Resize props
  #transform = { top: null, bottom: null }
  #treeselectInitPosition = null
  #containerResizer = null

  constructor ({
    value,
    options,
    openLevel,
    appendToBody,
    alwaysOpen,
    showTags,
    clearable,
    searchable,
    placeholder
  }) {
    this.value = value
    this.options = options
    this.openLevel = openLevel ?? 5
    this.appendToBody = appendToBody ?? true
    this.alwaysOpen = alwaysOpen ?? false
    this.showTags = showTags ?? true
    this.clearable = clearable ?? true
    this.searchable = searchable ?? true
    this.placeholder = placeholder ?? 'Search...'

    this.srcElement = this.#createTreeselect()

    // Outside listeners
    this.scrollEvent = this.scrollWindowHandler.bind(this)
    this.focusEvent = this.focusWindowHandler.bind(this)
    this.blurEvent = this.blurWindowHandler.bind(this)

    if (this.alwaysOpen) {
      this.#treeselectInput.openClose()
    }
  }

  #createTreeselect () {
    const container = document.createElement('div')
    container.classList.add('treeselect')

    const list = new TreeselectList({
      options: this.options,
      value: this.value,
      openLevel: this.openLevel
    })

    const input = new TreeselectInput({
      value: [],
      showTags: this.showTags,
      clearable: this.clearable,
      isAlwaysOpened: this.alwaysOpen,
      searchable: this.searchable,
      placeholder: this.placeholder
    })

    if (this.appendToBody) {
      this.#containerResizer = new ResizeObserver(() => this.updateListPosition(container, list.srcElement, true))
    }

    // Input events
    input.srcElement.addEventListener('input', (e) => {
      const ids = e.detail.map(option => option.id)
      this.value = ids
      list.updateValue(ids)
      this.#emitInput()
    })
    input.srcElement.addEventListener('open', () => this.#openList())
    input.srcElement.addEventListener('keydown', (e) => list.callKeyAction(e.key))
    input.srcElement.addEventListener('search', (e) => {
      list.updateSearchValue(e.detail)
      this.updateListPosition(container, list.srcElement, true)
    })
    input.srcElement.addEventListener('focus', () => {
      this.#updateFocusClasses(true)
      document.addEventListener('mousedown', this.focusEvent, true)
      document.addEventListener('focus', this.focusEvent, true)
      window.addEventListener('blur', this.blurEvent)
    }, true)

    if (!this.alwaysOpen) {
      input.srcElement.addEventListener('close', () => {
        this.#closeList()
      })
    }

    // List events
    list.srcElement.addEventListener('input', (e) => {
      input.updateValue(e.detail.groupedIds)
      this.value = e.detail.ids
      input.srcElement.focus()
      this.#emitInput()
    })
    list.srcElement.addEventListener('arrow-click', () => {
      this.updateListPosition(container, list.srcElement, true)
      input.srcElement.focus()
    })

    this.#htmlContainer = container
    this.#treeselectList = list
    this.#treeselectInput = input

    container.append(input.srcElement)

    return container
  }

  #openList () {
    window.addEventListener('scroll', this.scrollEvent, true)

    if (this.appendToBody) {
      document.body.appendChild(this.#treeselectList.srcElement)
      this.#containerResizer.observe(this.#htmlContainer)
    } else {
      this.#htmlContainer.appendChild(this.#treeselectList.srcElement)
    }

    this.updateListPosition(this.#htmlContainer, this.#treeselectList.srcElement, false)
    this.#updateOpenCloseClasses(true)
  }

  #closeList () {
    window.removeEventListener('scroll', this.scrollEvent, true)

    if (this.appendToBody) {
      document.body.removeChild(this.#treeselectList.srcElement)
      this.#containerResizer?.disconnect()
    } else {
      this.#htmlContainer.removeChild(this.#treeselectList.srcElement)
    }

    this.#updateOpenCloseClasses(false)
  }

  #updateDirectionClasses (isTop, appendToBody) {
    const topClass = appendToBody ? 'treeselect-list--top-to-body' : 'treeselect-list--top'
    const bottomClass = appendToBody ? 'treeselect-list--bottom-to-body' : 'treeselect-list--bottom'

    if (isTop) {
      this.#treeselectList.srcElement.classList.add(topClass)
      this.#treeselectList.srcElement.classList.remove(bottomClass)
      this.#treeselectInput.srcElement.classList.add('treeselect-input--top')
      this.#treeselectInput.srcElement.classList.remove('treeselect-input--bottom')
    } else {
      this.#treeselectList.srcElement.classList.remove(topClass)
      this.#treeselectList.srcElement.classList.add(bottomClass)
      this.#treeselectInput.srcElement.classList.remove('treeselect-input--top')
      this.#treeselectInput.srcElement.classList.add('treeselect-input--bottom')
    }
  }

  #updateFocusClasses (isFocus) {
    if (isFocus) {
      this.#treeselectInput.srcElement.classList.add('treeselect-input--focused')
      this.#treeselectList.srcElement.classList.add('treeselect-list--focused')
    } else {
      this.#treeselectInput.srcElement.classList.remove('treeselect-input--focused')
      this.#treeselectList.srcElement.classList.remove('treeselect-list--focused')
    }
  }

  #updateOpenCloseClasses (isOpen) {
    if (isOpen) {
      this.#treeselectInput.srcElement.classList.add('treeselect-input--opened')
    } else {
      this.#treeselectInput.srcElement.classList.remove('treeselect-input--opened')
    }
  }

  #removeOutsideListeners () {
    window.removeEventListener('scroll', this.scrollEvent, true)

    document.removeEventListener('click', this.focusEvent, true)
    document.removeEventListener('focus', this.focusEvent, true)
    window.removeEventListener('blur', this.blurEvent)
  }

  // Outside Listeners
  scrollWindowHandler () {
    this.updateListPosition(this.#htmlContainer, this.#treeselectList.srcElement, false)
  }

  focusWindowHandler (e) {
    const isInsideClick = this.#htmlContainer.contains(e.target) || this.#treeselectList.srcElement.contains(e.target)

    if (!isInsideClick) {
      this.#treeselectInput.blur()
      this.#removeOutsideListeners()
      this.#updateFocusClasses(false)
    }
  }

  blurWindowHandler () {
    this.#treeselectInput.blur()
    this.#removeOutsideListeners()
    this.#updateFocusClasses(false)
  }

  // Update direction of the list. Support appendToBody and standart mode with absolute
  updateListPosition (container, list, isNeedForceUpdate) {
    const spaceTop = container.getBoundingClientRect().y
    const spaceBottom = window.innerHeight - container.getBoundingClientRect().y
    const listHeight = list.clientHeight
    const isTopDirection = spaceTop > spaceBottom && window.innerHeight - spaceTop < listHeight
    const attributeToAdd = isTopDirection ? 'top' : 'buttom'
    const currentAttr = list.getAttribute('direction')

    this.#htmlContainer.setAttribute('direction', attributeToAdd)

    // Standart class handler handler with absolute position
    if (!this.appendToBody) {
      const isNoNeedToUpdate = currentAttr === attributeToAdd

      if (isNoNeedToUpdate) {
        return
      }

      this.#updateDirectionClasses(isTopDirection, false)

      return
    }

    // Append to body handler
    if (!this.#treeselectInitPosition || isNeedForceUpdate) {
      list.style.transform = null
      // We need to use display none for width because there is a problem with scroll
      list.style.display = 'none'
      list.style.width = `${container.clientWidth}px`
      list.style.display = ''

      const { x: listX, y: listY } = list.getBoundingClientRect()
      const { x: containerX, y: containerY } = container.getBoundingClientRect()

      this.#treeselectInitPosition = { containerX, containerY, listX, listY }
    }

    const { listX, listY, containerX, containerY } = this.#treeselectInitPosition
    const containerHeight = container.clientHeight

    list.style.maxHeight = `${window.innerHeight - containerHeight}px`

    if (!currentAttr || isNeedForceUpdate) {
      this.#transform.top = `translate(${containerX - listX}px, ${containerY - listY - listHeight}px)`
      this.#transform.bottom = `translate(${containerX - listX}px, ${containerY + containerHeight - listY}px)`
    }

    list.style.transform = isTopDirection ? this.#transform.top : this.#transform.bottom
    this.#updateDirectionClasses(isTopDirection, true)
  }

  // Emits
  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.value }))
  }
}

export default Treeselect
