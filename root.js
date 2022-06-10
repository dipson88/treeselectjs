import TreeselectInput from "./input.js";
import TreeselectList from "./list.js";

class RootTreeselect {
  // Resize props
  #transform = { top: null, bottom: null }
  #treeselectInitPosition = null
  #containerResizer = null

  // Components
  #htmlList = null
  #htmlContainer = null
  #treeselectInput = null

  constructor ({
    value,
    options,
    openLevel,
    appendToBody,
    alwaysOpen
  }) {
    this.value = value
    this.options = options
    this.openLevel = openLevel ?? 0
    this.appendToBody = appendToBody ?? true
    this.alwaysOpen = alwaysOpen ?? false

    // Src element
    this.srcElement = this.#createContainer()

    // Outside listeners
    this.scrollEvent = this.scrollWindowHandler.bind(this)
    this.focusEvent = this.focusWindowHandler.bind(this)
    this.blurEvent = this.blurWindowHandler.bind(this)
  }

  #createContainer () {
    const container = document.createElement('div')
    container.classList.add('treeselect')

    const list = new TreeselectList({
      options: this.options,
      value: this.value
    })
    const input = new TreeselectInput({ value: list.selectedNodes })

    if (this.appendToBody) {
      this.#containerResizer = new ResizeObserver(() => this.updateListPosition(container, list.srcElement, true))
    }

    // Input events
    input.srcElement.addEventListener('input', (event) => {
      list.updateValue(event.detail.map(item => item.id))
    })
    input.srcElement.addEventListener('open', (event) => {
      window.addEventListener('scroll', this.scrollEvent, true)

      if (this.appendToBody) {
        document.body.appendChild(list.srcElement)
      } else {
        container.appendChild(list.srcElement)
      }

      this.updateListPosition(container, list.srcElement)

      // We need to check height of the container to update list position
      if (this.appendToBody) {
        this.#containerResizer.observe(container)
      }
    })
    input.srcElement.addEventListener('close', () => {
      this.#closeList()
    })
    input.srcElement.addEventListener('keydown', (event) => {
      // TODO call if input.isOpenMode
      list.callKeyAction(event.key)
    })
    input.srcElement.addEventListener('focus', () => {
      document.addEventListener('click', this.focusEvent, true)
      document.addEventListener('focus', this.focusEvent, true)
      window.addEventListener('blur', this.blurEvent)
    }, true)
    input.srcElement.addEventListener('search', (event) => {
      list.updateSearchValue(event.detail)
      this.updateListPosition(container, list.srcElement, true)
    })

    // List events
    list.srcElement.addEventListener('input', (event) => {
      input.updateValue(event.detail.nodes)
      input.srcElement.focus()
    })
    list.srcElement.addEventListener('arrow-click', () => {
      this.updateListPosition(container, list.srcElement, true)
      input.srcElement.focus()
    })

    container.append(input.srcElement)

    this.#htmlContainer = container
    this.#htmlList = list.srcElement
    this.#treeselectInput = input
    
    return container
  }

  // Update direction of the list. Support appendToBody and standart mode
  updateListPosition (container, list, isNeedForceUpdate) {
    const spaceTop = container.getBoundingClientRect().y
    const spaceBottom = window.innerHeight - container.getBoundingClientRect().y
    const listHeight = list.clientHeight
    const isTopDirection = spaceTop > spaceBottom && window.innerHeight - spaceTop < listHeight
    const attributeToAdd = isTopDirection ? 'top' : 'buttom'
    const currentAttr = list.getAttribute('direction')

    list.setAttribute('direction', attributeToAdd)

    // Standart class handler handler
    if (!this.appendToBody) {
      const isNoNeedToUpdate = currentAttr === attributeToAdd

      if (isNoNeedToUpdate) {
        return
      }

      const topClassName = 'treeselect-list-top'
      const bottomClassName = 'treeselect-list-bottom'
      const classList = [topClassName, bottomClassName]
      const [currentCalss] = classList.filter(className => list.classList.contains(className))
      const classToAdd = isTopDirection ? topClassName : bottomClassName

      list.classList.remove(currentCalss)
      list.classList.add(classToAdd)

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

    list.style.width = `${container.clientWidth}px`
    list.style.maxHeight = `${window.innerHeight - containerHeight}px`

    if (!currentAttr || isNeedForceUpdate) {
      this.#transform.top = `translate(${containerX - listX}px, ${containerY - listY - listHeight}px)`
      this.#transform.bottom = `translate(${containerX - listX}px, ${containerY + containerHeight - listY}px)`
    }

    list.style.transform = isTopDirection ? this.#transform.top : this.#transform.bottom
  }

  // Outside scroll checking
  scrollWindowHandler (event) {
    this.updateListPosition(this.#htmlContainer, this.#htmlList)
  }

  // Focus handler for the document. Check inside treeselect click
  focusWindowHandler (event) {
    const isInsideClick = this.#htmlContainer.contains(event.target) || this.#htmlList.contains(event.target)

    if (!isInsideClick) {
      this.#treeselectInput.blur()
      this.#removeOutsideListeners()
    }
  }

  blurWindowHandler () {
    this.#treeselectInput.blur()
    this.#removeOutsideListeners()
  }

  // Remove listeners form document and window.
  #removeOutsideListeners () {
    window.removeEventListener('scroll', this.scrollEvent, true)

    document.removeEventListener('click', this.focusEvent, true)
    document.removeEventListener('focus', this.focusEvent, true)
    window.removeEventListener('blur', this.blurEvent)
  }

  #closeList () {
    if (this.appendToBody) {
      document.body.removeChild(this.#htmlList)
      this.#containerResizer?.disconnect()
    } else {
      container.removeChild(this.#htmlList)
    }
  }
}

export default RootTreeselect
