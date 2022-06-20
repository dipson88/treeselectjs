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
  #containerWidth = 0

  constructor ({
    parentHtmlContainer,
    value,
    options,
    openLevel,
    appendToBody,
    alwaysOpen,
    showTags,
    clearable,
    searchable,
    placeholder,
    grouped,
    listSlotHtmlComponent,
    disabled,
    emptyText
  }) {
    this.parentHtmlContainer = parentHtmlContainer
    this.value = value ?? []
    this.options = options ?? []
    this.openLevel = openLevel ?? 0
    this.appendToBody = appendToBody ?? true
    this.alwaysOpen = alwaysOpen && !disabled
    this.showTags = showTags ?? true
    this.clearable = clearable ?? true
    this.searchable = searchable ?? true
    this.placeholder = placeholder ?? 'Search...'
    this.grouped = grouped ?? true
    this.listSlotHtmlComponent = listSlotHtmlComponent ?? null
    this.disabled = disabled ?? false
    this.emptyText = emptyText

    this.srcElement = null

    // Outside listeners
    this.scrollEvent = null
    this.focusEvent = null
    this.blurEvent = null

    this.mount()
  }

  // Public methods
  mount () {
    if (this.srcElement) {
      this.#closeList()
      this.srcElement.innerHTML = ''
      this.srcElement = null
      this.#removeOutsideListeners()
    }

    this.srcElement = this.#createTreeselect()

    this.scrollEvent = this.scrollWindowHandler.bind(this)
    this.focusEvent = this.focusWindowHandler.bind(this)
    this.blurEvent = this.blurWindowHandler.bind(this)

    if (this.alwaysOpen) {
      this.#treeselectInput.openClose()
    }

    if (this.disabled) {
      this.srcElement.classList.add('treeselect--disabled')
    }
  }

  updateValue (newValue) {
    const list = this.#treeselectList
    list.updateValue(newValue)
    const {groupedIds, ids } = list.selectedNodes
    const inputNewValue = this.grouped ? groupedIds : ids
    this.#treeselectInput.updateValue(inputNewValue)
  }

  #createTreeselect () {
    const container = this.parentHtmlContainer
    container.classList.add('treeselect')

    const list = new TreeselectList({
      options: this.options,
      value: this.value,
      openLevel: this.openLevel,
      listSlotHtmlComponent: this.listSlotHtmlComponent,
      emptyText: this.emptyText
    })

    const {groupedIds, ids } = list.selectedNodes
    const input = new TreeselectInput({
      value: this.grouped ? groupedIds : ids,
      showTags: this.showTags,
      clearable: this.clearable,
      isAlwaysOpened: this.alwaysOpen,
      searchable: this.searchable,
      placeholder: this.placeholder,
      disabled: this.disabled
    })

    if (this.appendToBody) {
      this.#containerResizer = new ResizeObserver(() => {
        const { width } = this.srcElement.getBoundingClientRect()
        this.#containerWidth = width
        this.updateListPosition(container, list.srcElement, true)
      })
    }

    // Input events
    input.srcElement.addEventListener('input', (e) => {
      const ids = e.detail.map(({ id }) => id)
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
      const {groupedIds, ids } = e.detail
      const inputIds = this.grouped ? groupedIds : ids
      input.updateValue(inputIds)
      this.value = ids.map(({ id }) => id)
      input.focus()
      this.#emitInput()
    })
    list.srcElement.addEventListener('arrow-click', () => {
      input.focus()
      this.updateListPosition(container, list.srcElement, true)
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
    this.#treeselectList.focusFirstListElement()
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
    const spaceDelta = 45
    const isTopDirection = spaceTop > spaceBottom && window.innerHeight - spaceTop < listHeight + spaceDelta
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

      const { x: listX, y: listY } = list.getBoundingClientRect()
      const { x: containerX, y: containerY } = container.getBoundingClientRect()

      this.#treeselectInitPosition = { containerX, containerY, listX, listY }
    }

    const { listX, listY, containerX, containerY } = this.#treeselectInitPosition
    const containerHeight = container.clientHeight
    
    // TODO you should use css max-height
    // list.style.maxHeight = `${window.innerHeight - containerHeight}px`

    if (!currentAttr || isNeedForceUpdate) {
      this.#transform.top = `translate(${containerX - listX}px, ${containerY - listY - listHeight}px)`
      this.#transform.bottom = `translate(${containerX - listX}px, ${containerY + containerHeight - listY}px)`
    }

    list.style.transform = isTopDirection ? this.#transform.top : this.#transform.bottom
    this.#updateDirectionClasses(isTopDirection, true)
    list.style.width = `${this.#containerWidth}px`
  }

  // Emits
  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.value }))
  }
}

export default Treeselect
