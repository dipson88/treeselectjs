import { ITreeselectInput } from './input/inputTypes'
import { ITreeselectList } from './list/listTypes'
import { TreeselectInput } from './input/index'
import { TreeselectList } from './list/index'
import {
  ITreeslect,
  ITreeslectParams,
  OptionType,
  ValueOptionType,
  FlattedOptionType,
  IconsType
} from './treeselectTypes'
import { getDefaultIcons } from './svgIcons'

const validateProps = ({ parentHtmlContainer, staticList, appendToBody }: Partial<ITreeslectParams>) => {
  if (!parentHtmlContainer) {
    console.error('Validation: parentHtmlContainer prop is required!')
  }

  if (staticList && appendToBody) {
    console.error('Validation: You should set staticList to false if you use appendToBody!')
  }
}

const getOnlyIds = (nodes: FlattedOptionType[]) => nodes.map((node) => node.id)

export class Treeselect implements ITreeslect {
  // Props
  parentHtmlContainer: HTMLElement
  value: ValueOptionType[]
  options: OptionType[]
  openLevel: number
  appendToBody: boolean
  alwaysOpen: boolean
  showTags: boolean
  tagsCountText: string
  clearable: boolean
  searchable: boolean
  placeholder: string
  grouped: boolean
  listSlotHtmlComponent: HTMLElement | null
  disabled: boolean
  emptyText: string
  staticList: boolean
  id: string
  iconElements: IconsType
  inputCallback: ((value: ValueOptionType[]) => void) | undefined

  // InnerState
  isListOpened: boolean
  srcElement: HTMLElement | null

  // Components
  #treeselectList: ITreeselectList | null = null
  #treeselectInput: ITreeselectInput | null = null

  // Resize props
  #containerResizer: ResizeObserver | null = null

  // Outside listeners
  #scrollEvent: EventListenerOrEventListenerObject | null = null
  #resizeEvent: EventListenerOrEventListenerObject | null = null
  #focusEvent: EventListenerOrEventListenerObject | null = null
  #blurEvent: EventListenerOrEventListenerObject | null = null

  constructor({
    parentHtmlContainer,
    value,
    options,
    openLevel,
    appendToBody,
    alwaysOpen,
    showTags,
    tagsCountText,
    clearable,
    searchable,
    placeholder,
    grouped,
    listSlotHtmlComponent,
    disabled,
    emptyText,
    staticList,
    id,
    iconElements,
    inputCallback
  }: ITreeslectParams) {
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
    this.alwaysOpen = !!(alwaysOpen && !disabled)
    this.showTags = showTags ?? true
    this.tagsCountText = tagsCountText ?? 'elements selected'
    this.clearable = clearable ?? true
    this.searchable = searchable ?? true
    this.placeholder = placeholder ?? 'Search...'
    this.grouped = grouped ?? true
    this.listSlotHtmlComponent = listSlotHtmlComponent ?? null
    this.disabled = disabled ?? false
    this.emptyText = emptyText ?? 'No results found...'
    this.staticList = !!(staticList && !this.appendToBody)
    this.id = id ?? ''
    this.iconElements = getDefaultIcons(iconElements)
    this.inputCallback = inputCallback

    this.isListOpened = false
    this.srcElement = null

    this.mount()
  }

  // Public methods
  mount() {
    this.destroy()

    const { container, list, input } = this.#createTreeselect()

    this.srcElement = container
    this.#treeselectList = list
    this.#treeselectInput = input

    this.#scrollEvent = this.scrollWindowHandler.bind(this)
    this.#resizeEvent = this.scrollWindowHandler.bind(this)
    this.#focusEvent = this.focusWindowHandler.bind(this)
    this.#blurEvent = this.blurWindowHandler.bind(this)

    if (this.alwaysOpen) {
      this.#treeselectInput?.openClose()
    }

    if (this.disabled) {
      this.srcElement.classList.add('treeselect--disabled')
    }
  }

  updateValue(newValue: ValueOptionType[]) {
    const list = this.#treeselectList

    if (list) {
      list.updateValue(newValue)
      const { groupedNodes, nodes } = list.selectedNodes
      const inputNewValue = this.grouped ? groupedNodes : nodes
      this.#treeselectInput?.updateValue(inputNewValue)
    }
  }

  destroy() {
    if (this.srcElement) {
      this.#closeList()
      this.srcElement.innerHTML = ''
      this.srcElement = null
      this.#removeOutsideListeners(true)
    }
  }

  focus() {
    if (this.#treeselectInput) {
      this.#treeselectInput.focus()
    }
  }

  toggleOpenClose() {
    if (this.#treeselectInput) {
      this.#treeselectInput.openClose()
      this.#treeselectInput.focus()
    }
  }

  #createTreeselect() {
    const container = this.parentHtmlContainer
    container.classList.add('treeselect')

    const list = new TreeselectList({
      options: this.options,
      value: this.value,
      openLevel: this.openLevel,
      listSlotHtmlComponent: this.listSlotHtmlComponent,
      emptyText: this.emptyText,
      iconElements: this.iconElements
    })

    const { groupedNodes, nodes } = list.selectedNodes
    const input = new TreeselectInput({
      value: this.grouped ? groupedNodes : nodes,
      showTags: this.showTags,
      tagsCountText: this.tagsCountText,
      clearable: this.clearable,
      isAlwaysOpened: this.alwaysOpen,
      searchable: this.searchable,
      placeholder: this.placeholder,
      disabled: this.disabled,
      id: this.id,
      iconElements: this.iconElements
    })

    if (this.appendToBody) {
      this.#containerResizer = new ResizeObserver(() => this.updateListPosition())
    }

    // Input events
    input.srcElement.addEventListener('input', (e) => this.#inputInputListener(e, list))
    input.srcElement.addEventListener('open', () => this.#openList())
    input.srcElement.addEventListener('keydown', (e) => this.#inputKeydownListener(e, list))
    input.srcElement.addEventListener('search', (e) => this.#inputSearchListener(e, list))
    input.srcElement.addEventListener('focus', () => this.#inputFocusListener(), true)

    if (!this.alwaysOpen) {
      input.srcElement.addEventListener('close', () => this.#closeList())
    }

    // List events
    list.srcElement.addEventListener('mouseup', () => input.focus(), true)
    list.srcElement.addEventListener('input', (e) => this.#listInputListener(e, input))
    list.srcElement.addEventListener('arrow-click', () => this.#listArrowClickListener(input))

    container.append(input.srcElement)

    return { container, list, input }
  }

  #inputInputListener(e: Event, list: ITreeselectList) {
    const inputIds = getOnlyIds((e as CustomEvent).detail)
    list.updateValue(inputIds)
    const { nodes } = list.selectedNodes
    this.value = getOnlyIds(nodes)
    this.#emitInput()
  }

  #inputKeydownListener(e: Event, list: ITreeselectList) {
    if (this.isListOpened) {
      list.callKeyAction((e as KeyboardEvent).key)
    }
  }

  #inputSearchListener(e: Event, list: ITreeselectList) {
    list.updateSearchValue((e as CustomEvent).detail)
    this.updateListPosition()
  }

  #inputFocusListener() {
    this.#updateFocusClasses(true)

    if (this.#focusEvent && this.#focusEvent && this.#blurEvent) {
      document.addEventListener('mousedown', this.#focusEvent, true)
      document.addEventListener('focus', this.#focusEvent, true)
      window.addEventListener('blur', this.#blurEvent)
    }
  }

  #listInputListener(e: Event, input: TreeselectInput) {
    const { groupedNodes, nodes } = (e as CustomEvent).detail
    const inputIds = this.grouped ? groupedNodes : nodes
    input.updateValue(inputIds)
    this.value = getOnlyIds(nodes)
    input.focus()
    this.#emitInput()
  }

  #listArrowClickListener(input: TreeselectInput) {
    input.focus()
    this.updateListPosition()
  }

  #openList() {
    this.isListOpened = true

    if (this.#scrollEvent && this.#resizeEvent) {
      window.addEventListener('scroll', this.#scrollEvent, true)
      window.addEventListener('resize', this.#resizeEvent)
    }

    if (!this.#treeselectList || !this.srcElement) {
      return
    }

    if (this.appendToBody) {
      document.body.appendChild(this.#treeselectList.srcElement)
      this.#containerResizer?.observe(this.srcElement)
    } else {
      this.srcElement.appendChild(this.#treeselectList.srcElement)
    }

    this.updateListPosition()
    this.#updateOpenCloseClasses(true)
    this.#treeselectList.focusFirstListElement()
  }

  #closeList() {
    this.isListOpened = false

    if (this.#scrollEvent && this.#resizeEvent) {
      window.removeEventListener('scroll', this.#scrollEvent, true)
      window.removeEventListener('resize', this.#resizeEvent)
    }

    if (!this.#treeselectList || !this.srcElement) {
      return
    }

    const isElementExist = this.appendToBody
      ? document.body.contains(this.#treeselectList.srcElement)
      : this.srcElement.contains(this.#treeselectList.srcElement)

    if (!isElementExist) {
      return
    }

    if (this.appendToBody) {
      document.body.removeChild(this.#treeselectList.srcElement)
      this.#containerResizer?.disconnect()
    } else {
      this.srcElement.removeChild(this.#treeselectList.srcElement)
    }

    this.#updateOpenCloseClasses(false)
  }

  #updateDirectionClasses(isTop: boolean, appendToBody: boolean) {
    if (!this.#treeselectList || !this.#treeselectInput) {
      return
    }

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

  #updateFocusClasses(isFocus: boolean) {
    if (!this.#treeselectInput || !this.#treeselectList) {
      return
    }

    if (isFocus) {
      this.#treeselectInput.srcElement.classList.add('treeselect-input--focused')
      this.#treeselectList.srcElement.classList.add('treeselect-list--focused')
    } else {
      this.#treeselectInput.srcElement.classList.remove('treeselect-input--focused')
      this.#treeselectList.srcElement.classList.remove('treeselect-list--focused')
    }
  }

  #updateOpenCloseClasses(isOpen: boolean) {
    if (isOpen) {
      this.#treeselectInput?.srcElement.classList.add('treeselect-input--opened')
    } else {
      this.#treeselectInput?.srcElement.classList.remove('treeselect-input--opened')
    }

    if (this.staticList) {
      this.#treeselectList?.srcElement.classList.add('treeselect-list--static')
    } else {
      this.#treeselectList?.srcElement.classList.remove('treeselect-list--static')
    }
  }

  #removeOutsideListeners(isDestroy: boolean) {
    if (!this.#scrollEvent || !this.#resizeEvent || !this.#focusEvent || !this.#blurEvent) {
      return
    }

    if (!this.alwaysOpen || isDestroy) {
      window.removeEventListener('scroll', this.#scrollEvent, true)
      window.removeEventListener('resize', this.#resizeEvent)
    }

    document.removeEventListener('click', this.#focusEvent, true)
    document.removeEventListener('focus', this.#focusEvent, true)
    window.removeEventListener('blur', this.#blurEvent)
  }

  // Outside Listeners
  scrollWindowHandler() {
    this.updateListPosition()
  }

  focusWindowHandler(e: Event) {
    const isInsideClick =
      this.srcElement?.contains(e.target as HTMLElement) ||
      this.#treeselectList?.srcElement.contains(e.target as HTMLElement)

    if (!isInsideClick) {
      this.#treeselectInput?.blur()
      this.#removeOutsideListeners(false)
      this.#updateFocusClasses(false)
    }
  }

  blurWindowHandler() {
    this.#treeselectInput?.blur()
    this.#removeOutsideListeners(false)
    this.#updateFocusClasses(false)
  }

  // Update direction of the list. Support appendToBody and standard mode with absolute
  updateListPosition() {
    const container = this.srcElement
    const list = this.#treeselectList?.srcElement as HTMLElement

    if (!container || !list) {
      return
    }

    // We need to reset position
    list.style.transform = ''

    const { y: listY, height: listHeight } = list.getBoundingClientRect()
    const {
      x: containerX,
      y: containerY,
      height: containerHeight,
      width: containerWidth
    } = container.getBoundingClientRect()
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
  #emitInput() {
    this.srcElement?.dispatchEvent(new CustomEvent('input', { detail: this.value }))

    if (this.inputCallback) {
      this.inputCallback(this.value)
    }
  }
}
