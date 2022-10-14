import { ITreeselectInput } from './input/inputTypes'
import { ITreeselectList } from './list/listTypes'
import { TreeselectInput } from './input/index'
import { TreeselectList } from './list/index'
import {
  ITreeselect,
  ITreeselectParams,
  OptionType,
  ValueOptionType,
  FlattedOptionType,
  IconsType,
  SelectedNodesType,
  DirectionType
} from './treeselectTypes'
import { getDefaultIcons } from './svgIcons'

const validateProps = ({
  parentHtmlContainer,
  staticList,
  appendToBody,
  isSingleSelect,
  value,
  direction
}: Partial<ITreeselectParams>) => {
  if (!parentHtmlContainer) {
    console.error('Validation: parentHtmlContainer prop is required!')
  }

  if (staticList && appendToBody) {
    console.error('Validation: You should set staticList to false if you use appendToBody!')
  }

  if (isSingleSelect && Array.isArray(value)) {
    console.error('Validation: if you use isSingleSelect prop, you should pass a single value!')
  }

  if (!isSingleSelect && !Array.isArray(value)) {
    console.error('Validation: you should pass an array as a value!')
  }

  if (direction && direction !== 'auto' && direction !== 'bottom' && direction !== 'top') {
    console.error('Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!')
  }
}

const getOnlyIds = (nodes: FlattedOptionType[]) => nodes.map((node) => node.id)

const getDefaultValue = (value: ValueOptionType[] | ValueOptionType | undefined) => {
  if (!value) {
    return []
  }

  return Array.isArray(value) ? value : [value]
}

const getResultValue = (value: ValueOptionType[], isSingleSelect: boolean) => {
  if (isSingleSelect) {
    const [firstItem] = value

    return firstItem
  }

  return value
}

export class Treeselect implements ITreeselect {
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
  isGroupedValue: boolean
  listSlotHtmlComponent: HTMLElement | null
  disabled: boolean
  emptyText: string
  staticList: boolean
  id: string
  isSingleSelect: boolean
  showCount: boolean
  disabledBranchNode: boolean
  direction: DirectionType
  iconElements: IconsType
  inputCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined
  openCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined
  closeCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined

  // InnerState
  groupedValue: ValueOptionType[]
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
    isGroupedValue,
    listSlotHtmlComponent,
    disabled,
    emptyText,
    staticList,
    id,
    isSingleSelect,
    showCount,
    disabledBranchNode,
    direction,
    iconElements,
    inputCallback,
    openCallback,
    closeCallback
  }: ITreeselectParams) {
    validateProps({
      parentHtmlContainer,
      value,
      staticList,
      appendToBody,
      isSingleSelect
    })

    this.parentHtmlContainer = parentHtmlContainer
    this.value = getDefaultValue(value)
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
    this.isGroupedValue = isGroupedValue ?? false
    this.listSlotHtmlComponent = listSlotHtmlComponent ?? null
    this.disabled = disabled ?? false
    this.emptyText = emptyText ?? 'No results found...'
    this.staticList = !!(staticList && !this.appendToBody)
    this.id = id ?? ''
    this.isSingleSelect = isSingleSelect ?? false
    this.showCount = showCount ?? false
    this.disabledBranchNode = disabledBranchNode ?? false
    this.direction = direction ?? 'auto'
    this.iconElements = getDefaultIcons(iconElements)
    this.inputCallback = inputCallback
    this.openCallback = openCallback
    this.closeCallback = closeCallback

    this.groupedValue = []
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
    } else {
      this.srcElement.classList.remove('treeselect--disabled')
    }
  }

  updateValue(newValue: ValueOptionType[] | ValueOptionType) {
    const list = this.#treeselectList

    if (list) {
      const value = getDefaultValue(newValue)
      list.updateValue(value)
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
      isSingleSelect: this.isSingleSelect,
      showCount: this.showCount,
      disabledBranchNode: this.disabledBranchNode,
      iconElements: this.iconElements,
      inputCallback: (value) => this.#listInputListener(value),
      arrowClickCallback: () => this.#listArrowClickListener(),
      mouseupCallback: () => this.#treeselectInput?.focus()
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
      isSingleSelect: this.isSingleSelect,
      id: this.id,
      iconElements: this.iconElements,
      inputCallback: (value) => this.#inputInputListener(value),
      searchCallback: (value) => this.#inputSearchListener(value),
      openCallback: () => this.#openList(),
      closeCallback: () => this.#closeList(),
      keydownCallback: (key) => this.#inputKeydownListener(key),
      focusCallback: () => this.#inputFocusListener(),
      blurCallback: () => this.#inputBlurListener()
    })

    if (this.appendToBody) {
      this.#containerResizer = new ResizeObserver(() => this.updateListPosition())
    }

    container.append(input.srcElement)

    return { container, list, input }
  }

  #inputInputListener(value: FlattedOptionType[]) {
    const inputIds = getOnlyIds(value)
    this.#treeselectList?.updateValue(inputIds)
    const nodes = this.#treeselectList?.selectedNodes?.nodes
    const groupedNodes = this.#treeselectList?.selectedNodes?.groupedNodes
    this.value = nodes ? getOnlyIds(nodes) : []
    this.groupedValue = groupedNodes ? getOnlyIds(groupedNodes) : []
    this.#emitInput()
  }

  #inputKeydownListener(key: string) {
    if (this.isListOpened) {
      this.#treeselectList?.callKeyAction(key)
    }
  }

  #inputSearchListener(value: string) {
    this.#treeselectList?.updateSearchValue(value)
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

  #inputBlurListener() {
    // TODO review focus system.
    // On Blur we need to check is element focused again.
    // Because after actions on list we call focus with help of timeout with 0.
    // We call timeout with 1 because it should call after focus timeout.
    setTimeout(() => {
      const isInput = this.#treeselectInput?.srcElement.contains(document.activeElement)
      const isList = this.#treeselectList?.srcElement.contains(document.activeElement)

      if (!isInput && !isList) {
        this.blurWindowHandler()
      }
    }, 1)
  }

  #listInputListener(value: SelectedNodesType) {
    const { groupedNodes, nodes } = value
    const inputIds = this.grouped ? groupedNodes : nodes
    this.#treeselectInput?.updateValue(inputIds)
    this.value = getOnlyIds(nodes)
    this.groupedValue = getOnlyIds(groupedNodes)

    if (this.isSingleSelect && !this.alwaysOpen) {
      this.#treeselectInput?.openClose()
      this.#treeselectInput?.clearSearch()
    }

    this.#treeselectInput?.focus()
    this.#emitInput()
  }

  #listArrowClickListener() {
    this.#treeselectInput?.focus()
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

    this.#emitOpen()
  }

  #closeList() {
    if (this.alwaysOpen) {
      return
    }

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
    this.#emitClose()
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

    document.removeEventListener('mousedown', this.#focusEvent, true)
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
    let isTopDirection = spaceTop > spaceBottom && spaceTop >= listHeight && spaceBottom < listHeight

    if (this.direction !== 'auto') {
      isTopDirection = this.direction === 'top'
    }

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
  #getEmitValue() {
    const typedValue = this.isGroupedValue || this.isSingleSelect ? this.groupedValue : this.value
    const value = getResultValue(typedValue, this.isSingleSelect)

    return value
  }

  #emitInput() {
    const value = this.#getEmitValue()
    this.srcElement?.dispatchEvent(new CustomEvent('input', { detail: value }))

    if (this.inputCallback) {
      this.inputCallback(value)
    }
  }

  #emitOpen() {
    const value = this.#getEmitValue()
    this.srcElement?.dispatchEvent(new CustomEvent('open', { detail: value }))

    if (this.openCallback) {
      this.openCallback(value)
    }
  }

  #emitClose() {
    const value = this.#getEmitValue()
    this.srcElement?.dispatchEvent(new CustomEvent('close', { detail: value }))

    if (this.closeCallback) {
      this.closeCallback(value)
    }
  }
}
