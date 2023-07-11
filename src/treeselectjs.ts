import './treeselectjs.css'
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
  DirectionType,
  ValueType,
  ValueInputType
} from './treeselectTypes'
import { getDefaultIcons } from './svgIcons'

export {
  type ValueType,
  type ValueInputType,
  type OptionType,
  type DirectionType,
  type IconsType,
  type ITreeselectParams
}

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

const getDefaultValue = (value: ValueInputType) => {
  if (!value) {
    return []
  }

  return Array.isArray(value) ? value : [value]
}

const getResultValue = (value: ValueOptionType[], isSingleSelect: boolean): ValueType => {
  if (isSingleSelect) {
    const [firstItem] = value

    return firstItem ?? null
  }

  return value
}

export default class Treeselect implements ITreeselect {
  // Props
  parentHtmlContainer: HTMLElement
  value: ValueType
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
  ariaLabel: string
  isSingleSelect: boolean
  showCount: boolean
  disabledBranchNode: boolean
  direction: DirectionType
  expandSelected: boolean
  saveScrollPosition: boolean
  isIndependentNodes: boolean
  iconElements: IconsType
  inputCallback: ((value: ValueType) => void) | undefined
  openCallback: ((value: ValueType) => void) | undefined
  closeCallback: ((value: ValueType) => void) | undefined
  nameChangeCallback: ((name: string) => void) | undefined
  searchCallback: ((value: string) => void) | undefined

  // InnerState
  ungroupedValue: ValueOptionType[]
  groupedValue: ValueOptionType[]
  allValue: ValueOptionType[]
  isListOpened: boolean
  selectedName: string
  srcElement: HTMLElement | null

  // Components
  #treeselectList: ITreeselectList | null = null
  #treeselectInput: ITreeselectInput | null = null

  // Resize props
  #containerResizer: ResizeObserver | null = null

  // List position scroll
  #scrollPosition: number = 0

  // Timer for search text
  #searchTimer: number = 0

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
    ariaLabel,
    isSingleSelect,
    showCount,
    disabledBranchNode,
    direction,
    expandSelected,
    saveScrollPosition,
    isIndependentNodes,
    iconElements,
    inputCallback,
    openCallback,
    closeCallback,
    nameChangeCallback,
    searchCallback
  }: ITreeselectParams) {
    validateProps({
      parentHtmlContainer,
      value,
      staticList,
      appendToBody,
      isSingleSelect
    })

    this.parentHtmlContainer = parentHtmlContainer
    this.value = []
    this.options = options ?? []
    this.openLevel = openLevel ?? 0
    this.appendToBody = appendToBody ?? false
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
    this.ariaLabel = ariaLabel ?? ''
    this.isSingleSelect = isSingleSelect ?? false
    this.showCount = showCount ?? false
    this.disabledBranchNode = disabledBranchNode ?? false
    this.direction = direction ?? 'auto'
    this.expandSelected = expandSelected ?? false
    this.saveScrollPosition = saveScrollPosition ?? true
    this.isIndependentNodes = isIndependentNodes ?? false
    this.iconElements = getDefaultIcons(iconElements)
    this.inputCallback = inputCallback
    this.openCallback = openCallback
    this.closeCallback = closeCallback
    this.nameChangeCallback = nameChangeCallback
    this.searchCallback = searchCallback

    this.ungroupedValue = []
    this.groupedValue = []
    this.allValue = []
    this.isListOpened = false
    this.selectedName = ''
    this.srcElement = null

    this.#initMount(value)
  }

  mount() {
    // We need to revalidate props if user call mount method
    // because user can change props after init
    validateProps({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    })
    // We need to re-merge icons if icons were changed
    // And user call mount method
    this.iconElements = getDefaultIcons(this.iconElements)
    this.#initMount(this.value)
  }

  #initMount(initValue?: ValueInputType) {
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

    this.updateValue(initValue ?? this.value)
  }

  updateValue(newValue: ValueInputType) {
    const value = getDefaultValue(newValue)
    const list = this.#treeselectList

    if (list) {
      list.updateValue(value)
      this.#setInputValueByListNodes(list?.selectedNodes)
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

  #updateInnerValues({
    groupedNodes,
    nodes,
    allNodes
  }: {
    groupedNodes?: FlattedOptionType[]
    nodes?: FlattedOptionType[]
    allNodes?: FlattedOptionType[]
  }) {
    this.ungroupedValue = nodes ? getOnlyIds(nodes) : []
    this.groupedValue = groupedNodes ? getOnlyIds(groupedNodes) : []
    this.allValue = allNodes ? getOnlyIds(allNodes) : []
    let typedValue = []

    if (this.isIndependentNodes || this.isSingleSelect) {
      typedValue = this.allValue
    } else if (this.isGroupedValue) {
      typedValue = this.groupedValue
    } else {
      typedValue = this.ungroupedValue
    }

    this.value = getResultValue(typedValue, this.isSingleSelect)
  }

  #createTreeselect() {
    const container = this.parentHtmlContainer
    container.classList.add('treeselect')

    const list = new TreeselectList({
      value: [], // updateValue method calls in initMount method to set actual value
      options: this.options,
      openLevel: this.openLevel,
      listSlotHtmlComponent: this.listSlotHtmlComponent,
      emptyText: this.emptyText,
      isSingleSelect: this.isSingleSelect,
      showCount: this.showCount,
      disabledBranchNode: this.disabledBranchNode,
      expandSelected: this.expandSelected,
      isIndependentNodes: this.isIndependentNodes,
      iconElements: this.iconElements,
      inputCallback: (value) => this.#listInputListener(value),
      arrowClickCallback: () => this.#listArrowClickListener(),
      mouseupCallback: () => this.#treeselectInput?.focus()
    })

    const input = new TreeselectInput({
      value: [], // updateValue method calls in initMount method to set actual value
      showTags: this.showTags,
      tagsCountText: this.tagsCountText,
      clearable: this.clearable,
      isAlwaysOpened: this.alwaysOpen,
      searchable: this.searchable,
      placeholder: this.placeholder,
      disabled: this.disabled,
      isSingleSelect: this.isSingleSelect,
      id: this.id,
      ariaLabel: this.ariaLabel,
      iconElements: this.iconElements,
      inputCallback: (value) => this.#inputInputListener(value),
      searchCallback: (value) => this.#inputSearchListener(value),
      openCallback: () => this.#openList(),
      closeCallback: () => this.#closeList(),
      keydownCallback: (e) => this.#inputKeydownListener(e),
      focusCallback: () => this.#inputFocusListener(),
      blurCallback: () => this.#inputBlurListener(),
      nameChangeCallback: (name) => this.#inputNameChangeListener(name)
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
    const selectedNodes = this.#treeselectList?.selectedNodes ?? {}
    this.#updateInnerValues(selectedNodes)
    this.#emitInput()
  }

  #inputKeydownListener(e: KeyboardEvent) {
    if (this.isListOpened) {
      this.#treeselectList?.callKeyAction(e)
    }
  }

  #inputSearchListener(value: string) {
    // debounce for input 350ms
    if (this.#searchTimer) {
      clearTimeout(this.#searchTimer)
    }

    this.#searchTimer = window.setTimeout(() => {
      this.#treeselectList?.updateSearchValue(value)
      this.updateListPosition()
    }, 350)

    this.#emitSearch(value)
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

  #setInputValueByListNodes(selectedNodes?: SelectedNodesType) {
    if (!selectedNodes) {
      return
    }

    let inputNewValue = []

    if (this.isIndependentNodes || this.isSingleSelect) {
      inputNewValue = selectedNodes.allNodes
    } else if (this.grouped) {
      inputNewValue = selectedNodes.groupedNodes
    } else {
      inputNewValue = selectedNodes.nodes
    }

    this.#treeselectInput?.updateValue(inputNewValue)
    this.#updateInnerValues(selectedNodes)
  }

  #listInputListener(value: SelectedNodesType) {
    this.#setInputValueByListNodes(value)

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

  #inputNameChangeListener(name: string) {
    const isNewName = this.selectedName !== name

    if (isNewName) {
      this.selectedName = name
      this.#emitNameChange()
    }
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
    this.#updateScrollPosition()

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

    this.#scrollPosition = this.#treeselectList.srcElement.scrollTop

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

  #updateScrollPosition() {
    const isLastFocusedElementExist = this.#treeselectList?.isLastFocusedElementExist()

    if (this.saveScrollPosition && isLastFocusedElementExist) {
      this.#treeselectList?.srcElement.scroll(0, this.#scrollPosition)
    } else {
      this.#treeselectList?.focusFirstListElement()
    }
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

    const { height: listHeight } = list.getBoundingClientRect()
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
      // We need to set zero position to the list because it helps calculate transform more easier
      if (list.style.top !== '0px' || list.style.left !== '0px') {
        list.style.top = '0px'
        list.style.left = '0px'
      }

      const translateX = containerX + window.scrollX
      const translateY = isTopDirection
        ? containerY + window.scrollY - listHeight
        : containerY + window.scrollY + containerHeight

      list.style.transform = `translate(${translateX}px,${translateY}px)`
      list.style.width = `${containerWidth}px`
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

  #emitNameChange() {
    this.srcElement?.dispatchEvent(new CustomEvent('name-change', { detail: this.selectedName }))

    if (this.nameChangeCallback) {
      this.nameChangeCallback(this.selectedName)
    }
  }

  #emitOpen() {
    if (this.alwaysOpen) return

    this.srcElement?.dispatchEvent(new CustomEvent('open', { detail: this.value }))

    if (this.openCallback) {
      this.openCallback(this.value)
    }
  }

  #emitClose() {
    if (this.alwaysOpen) return

    this.srcElement?.dispatchEvent(new CustomEvent('close', { detail: this.value }))

    if (this.closeCallback) {
      this.closeCallback(this.value)
    }
  }

  #emitSearch(value: string) {
    const valueToEmit = value?.trim() ?? ''

    this.srcElement?.dispatchEvent(new CustomEvent('search', { detail: valueToEmit }))

    if (this.searchCallback) {
      this.searchCallback(valueToEmit)
    }
  }
}
