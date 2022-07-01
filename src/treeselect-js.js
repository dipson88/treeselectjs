import TreeselectInput from "./input.js"
import TreeselectList from "./list.js"


const validateProps = ({ parentHtmlContainer, staticList, appendToBody }) => {
  if (!parentHtmlContainer) {
    console.error('Validation: parentHtmlContainer prop is required!')
  }

  if (staticList && appendToBody) {
    console.error('Validation: You should set staticList to false if you use appendToBody!')
  }
}

class Treeselect {
  // Components
  #htmlContainer = null
  #treeselectList = null
  #treeselectInput = null

  // Resize props
  #containerResizer = null

  // Outside listeners
  #scrollEvent = null
  #resizeEvent = null
  #focusEvent = null
  #blurEvent = null

  // State
  #isListOpened = false

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
    emptyText,
    staticList
  }) {
    validateProps({
      parentHtmlContainer,
      staticList,
      appendToBody
    })

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
    this.emptyText = emptyText ?? 'No results found...'
    this.staticList = staticList && !this.appendToBody

    this.srcElement = null

    this.mount()
  }

  // Public methods
  mount () {
    this.destroy()

    this.srcElement = this.#createTreeselect()

    this.#scrollEvent = this.scrollWindowHandler.bind(this)
    this.#resizeEvent = this.scrollWindowHandler.bind(this)
    this.#focusEvent = this.focusWindowHandler.bind(this)
    this.#blurEvent = this.blurWindowHandler.bind(this)

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

  destroy () {
    if (this.srcElement) {
      this.#closeList()
      this.srcElement.innerHTML = ''
      this.srcElement = null
      this.#removeOutsideListeners(true)
    }
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
        this.updateListPosition()
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
    input.srcElement.addEventListener('keydown', (e) => {
      if (this.#isListOpened) {
        list.callKeyAction(e.key)
      }
    })
    input.srcElement.addEventListener('search', (e) => {
      list.updateSearchValue(e.detail)
      this.updateListPosition()
    })
    input.srcElement.addEventListener('focus', () => {
      this.#updateFocusClasses(true)
      document.addEventListener('mousedown', this.#focusEvent, true)
      document.addEventListener('focus', this.#focusEvent, true)
      window.addEventListener('blur', this.#blurEvent)
    }, true)

    if (!this.alwaysOpen) {
      input.srcElement.addEventListener('close', () => {
        this.#closeList()
      })
    }

    // List events
    list.srcElement.addEventListener('mouseup', () => {
      input.focus()
    }, true)
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
      this.updateListPosition()
    })

    this.#htmlContainer = container
    this.#treeselectList = list
    this.#treeselectInput = input

    container.append(input.srcElement)

    return container
  }

  #openList () {
    this.#isListOpened = true

    window.addEventListener('scroll', this.#scrollEvent, true)
    window.addEventListener('resize', this.#resizeEvent)

    if (this.appendToBody) {
      document.body.appendChild(this.#treeselectList.srcElement)
      this.#containerResizer.observe(this.#htmlContainer)
    } else {
      this.#htmlContainer.appendChild(this.#treeselectList.srcElement)
    }

    this.updateListPosition()
    this.#updateOpenCloseClasses(true)
    this.#treeselectList.focusFirstListElement()
  }

  #closeList () {
    this.#isListOpened = false

    window.removeEventListener('scroll', this.#scrollEvent, true)
    window.removeEventListener('resize', this.#resizeEvent)
    const isElementExist = this.appendToBody
      ? document.body.contains(this.#treeselectList.srcElement)
      : this.#htmlContainer.contains(this.#treeselectList.srcElement)

    if (!isElementExist) {
      return
    }

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

    if (this.staticList) {
      this.#treeselectList.srcElement.classList.add('treeselect-list--static')
    } else {
      this.#treeselectList.srcElement.classList.remove('treeselect-list--static')
    }
  }

  #removeOutsideListeners (isDestroy) {
    if (!this.alwaysOpen || isDestroy) {
      window.removeEventListener('scroll', this.#scrollEvent, true)
      window.removeEventListener('resize', this.#resizeEvent)
    }

    document.removeEventListener('click', this.#focusEvent, true)
    document.removeEventListener('focus', this.#focusEvent, true)
    window.removeEventListener('blur', this.#blurEvent)
  }

  // Outside Listeners
  scrollWindowHandler () {
    this.updateListPosition()
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

  // Update direction of the list. Support appendToBody and standard mode with absolute
  updateListPosition () {
    const list = this.#treeselectList.srcElement
    // We need to reset position
    list.style.transform = null
    const container = this.#htmlContainer

    const { y: listY, height: listHeight } = list.getBoundingClientRect()
    const { x: containerX, y: containerY, height: containerHeight, width: containerWidth } = container.getBoundingClientRect()
    const windowHeight = window.innerHeight

    const spaceTop = containerY
    const spaceBottom = windowHeight - containerY - containerHeight
    const isTopDirection = spaceTop > spaceBottom && spaceTop >= listHeight && spaceBottom < listHeight
    
    if (this.appendToBody) {
      list.style.transform = isTopDirection
        ? `translateY(${containerY - listY - listHeight}px)`
        : `translateY(${containerY + containerHeight - listY}px)`
      list.style.width = `${containerWidth}px`
      list.style.left = `${containerX + window.scrollX}px`
    }

    const attributeToAdd = isTopDirection ? 'top' : 'bottom'
    const currentAttr = list.getAttribute('direction')

    if (currentAttr !== attributeToAdd) {
      list.setAttribute('direction', attributeToAdd)
      this.#updateDirectionClasses(isTopDirection, this.appendToBody)
    }
  }

  // Emits
  #emitInput () {
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.value }))
  }
}

export default Treeselect
