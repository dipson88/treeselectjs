import {
  type IconsType,
  type OptionType,
  type SelectedNodesType,
  type TagsSortFnType,
  type ValueOptionType
} from '../treeselectTypes'
import {
  type BeforeSearchStateMap,
  type ITreeselectList,
  type ITreeselectListParams,
  type OptionsTreeMap,
  type TreeItem
} from './listTypes'
import { getOptionsTreeMap, getTreeItemOptionByInputId, getCheckedOptions } from './helpers/listOptionsHelper'
import { updateOptionByCheckState, updateOptionsByValue } from './helpers/listCheckStateHelper'
import {
  expandSelectedItems,
  hideShowChildrenOptions,
  updateVisibleBySearchTreeItemOptions
} from './helpers/listVisibilityStateHelper'
import {
  updateDOM,
  getListItemByCheckbox,
  setAttributesFromHtmlAttr,
  getArrowOfItemByCheckbox
  // getArrowItemById,
  // getListItemById
} from './helpers/domHelper'
import { appendIconToElement } from '../svgIcons'

const updateListValue = ({
  newValue,
  optionsTreeMap,
  emptyListHtmlElement,
  iconElements,
  isSingleSelect,
  previousSingleSelectedValue,
  expandSelected,
  isFirstValueUpdate,
  isIndependentNodes,
  rtl
}: {
  newValue: ValueOptionType[]
  optionsTreeMap: OptionsTreeMap
  emptyListHtmlElement: HTMLElement | null
  iconElements: IconsType
  isSingleSelect: boolean
  previousSingleSelectedValue: ValueOptionType[]
  expandSelected: boolean
  isFirstValueUpdate: boolean
  isIndependentNodes: boolean
  rtl: boolean
}) => {
  updateOptionsByValue({
    newValue,
    optionsTreeMap,
    isSingleSelect,
    isIndependentNodes
  })

  if (isFirstValueUpdate && expandSelected) {
    expandSelectedItems(optionsTreeMap)
  }

  updateDOM({
    optionsTreeMap,
    emptyListHtmlElement,
    iconElements,
    previousSingleSelectedValue,
    rtl
  })
}

const updateOptionsMapBySearchState = ({
  optionsTreeMap,
  beforeSearchStateMap
}: {
  optionsTreeMap: OptionsTreeMap
  beforeSearchStateMap: BeforeSearchStateMap
}) => {
  optionsTreeMap.forEach((option) => {
    const beforeSearchState = beforeSearchStateMap.get(option.id)

    if (beforeSearchState) {
      option.hidden = beforeSearchState.hidden
      option.isClosed = beforeSearchState.isClosed
    }
  })

  beforeSearchStateMap.clear()
}

const updateBeforeSearchStateMap = ({
  optionsTreeMap,
  beforeSearchStateMap
}: {
  optionsTreeMap: OptionsTreeMap
  beforeSearchStateMap: BeforeSearchStateMap
}) => {
  beforeSearchStateMap.clear()

  optionsTreeMap.forEach((option) => {
    beforeSearchStateMap.set(option.id, {
      hidden: option.hidden,
      isClosed: option.isClosed
    })
  })
}

export class TreeselectList implements ITreeselectList {
  // Props
  options: OptionType[]
  value: ValueOptionType[]
  openLevel: number
  listSlotHtmlComponent: HTMLElement | null
  tagsSortFn: TagsSortFnType
  emptyText: string
  isSingleSelect: boolean
  showCount: boolean
  disabledBranchNode: boolean
  expandSelected: boolean
  isIndependentNodes: boolean
  rtl: boolean
  listClassName: string
  iconElements: IconsType

  // InnerState
  searchText: string
  selectedNodes: SelectedNodesType
  optionsTreeMap: OptionsTreeMap
  beforeSearchStateMap: BeforeSearchStateMap
  emptyListHtmlElement: HTMLElement | null
  srcElement: HTMLElement

  // Callbacks
  inputCallback: (value: SelectedNodesType) => void
  arrowClickCallback: (groupId: ValueOptionType, isClosed: boolean) => void
  mouseupCallback: () => void

  // PrivateInnerState
  #lastFocusedItem: HTMLElement | null = null
  #isMouseActionsAvailable = true
  #previousSingleSelectedValue: ValueOptionType[] = []
  #isFirstValueUpdate: boolean = true

  constructor({
    options,
    value,
    openLevel,
    listSlotHtmlComponent,
    tagsSortFn,
    emptyText,
    isSingleSelect,
    iconElements,
    showCount,
    disabledBranchNode,
    expandSelected,
    isIndependentNodes,
    rtl,
    listClassName,
    inputCallback,
    arrowClickCallback,
    mouseupCallback
  }: ITreeselectListParams) {
    this.options = options
    this.value = value
    this.openLevel = openLevel ?? 0
    this.listSlotHtmlComponent = listSlotHtmlComponent ?? null
    this.tagsSortFn = tagsSortFn ?? null
    this.emptyText = emptyText ?? 'No results found...'
    this.isSingleSelect = isSingleSelect ?? false
    this.showCount = showCount ?? false
    this.disabledBranchNode = disabledBranchNode ?? false
    this.expandSelected = expandSelected ?? false
    this.isIndependentNodes = isIndependentNodes ?? false
    this.rtl = rtl ?? false
    this.listClassName = listClassName ?? ''
    this.iconElements = iconElements

    this.searchText = ''
    this.selectedNodes = { nodes: [], groupedNodes: [], allNodes: [] }
    this.optionsTreeMap = getOptionsTreeMap({
      options: this.options,
      openLevel: this.openLevel,
      isIndependentNodes: this.isIndependentNodes
    })
    this.beforeSearchStateMap = new Map()
    this.emptyListHtmlElement = null
    this.srcElement = this.#createSrcElement()

    this.inputCallback = inputCallback
    this.arrowClickCallback = arrowClickCallback
    this.mouseupCallback = mouseupCallback
  }

  // Public methods
  updateValue(value: ValueOptionType[]) {
    this.value = value
    this.#previousSingleSelectedValue = this.isSingleSelect ? this.value : []
    updateListValue({
      newValue: value,
      optionsTreeMap: this.optionsTreeMap,
      emptyListHtmlElement: this.emptyListHtmlElement,
      iconElements: this.iconElements,
      isSingleSelect: this.isSingleSelect,
      previousSingleSelectedValue: this.#previousSingleSelectedValue,
      expandSelected: this.expandSelected,
      isFirstValueUpdate: this.#isFirstValueUpdate,
      isIndependentNodes: this.isIndependentNodes,
      rtl: this.rtl
    })
    this.#isFirstValueUpdate = false
    this.#updateSelectedNodes()
  }

  updateSearchValue(searchText: string) {
    if (searchText === this.searchText) {
      return
    }

    const isStartOfSearching = this.searchText === '' && searchText !== ''
    this.searchText = searchText

    if (isStartOfSearching) {
      // This loop need to save a isClose state before searching
      updateBeforeSearchStateMap({
        beforeSearchStateMap: this.beforeSearchStateMap,
        optionsTreeMap: this.optionsTreeMap
      })
    }

    if (this.searchText === '') {
      // This loop need to restore a isClose state after searching
      updateOptionsMapBySearchState({
        beforeSearchStateMap: this.beforeSearchStateMap,
        optionsTreeMap: this.optionsTreeMap
      })
    }

    if (this.searchText) {
      updateVisibleBySearchTreeItemOptions(this.optionsTreeMap, searchText)
    }

    updateDOM({
      optionsTreeMap: this.optionsTreeMap,
      emptyListHtmlElement: this.emptyListHtmlElement,
      iconElements: this.iconElements,
      previousSingleSelectedValue: this.#previousSingleSelectedValue,
      rtl: this.rtl
    })
    this.focusFirstListElement()
  }

  callKeyAction(e: KeyboardEvent) {
    this.#isMouseActionsAvailable = false
    const itemFocused = this.srcElement.querySelector('.treeselect-list__item--focused') as HTMLElement | null
    const isHidden = itemFocused?.classList.contains('treeselect-list__item--hidden')

    if (isHidden) {
      return
    }

    const key = e.key

    if (key === 'Enter' && itemFocused) {
      itemFocused.dispatchEvent(new Event('mousedown'))
    }

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      this.#keyActionsLeftRight(itemFocused, e)
    }

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      this.#keyActionsDownUp(itemFocused, key)
    }
  }

  focusFirstListElement() {
    const focusedClass = 'treeselect-list__item--focused'
    const itemFocused = this.srcElement.querySelector(`.${focusedClass}`)
    const allCheckboxes = Array.from(this.srcElement.querySelectorAll('.treeselect-list__item-checkbox')).filter(
      (checkbox) => window.getComputedStyle(getListItemByCheckbox(checkbox)).display !== 'none'
    )

    if (!allCheckboxes.length) {
      return
    }

    if (itemFocused) {
      itemFocused.classList.remove(focusedClass)
    }

    const firstItem = getListItemByCheckbox(allCheckboxes[0] as HTMLElement)
    firstItem.classList.add(focusedClass)
  }

  isLastFocusedElementExist() {
    return !!this.#lastFocusedItem
  }

  // Private methods
  #keyActionsLeftRight(itemFocused: HTMLElement | null, e: KeyboardEvent) {
    if (!itemFocused) {
      return
    }

    const key = e.key
    const checkbox = itemFocused.querySelector('.treeselect-list__item-checkbox')!
    const inputId = checkbox.getAttribute('input-id')
    const option = getTreeItemOptionByInputId(inputId, this.optionsTreeMap)!
    const arrow = itemFocused.querySelector('.treeselect-list__item-icon')!

    if (key === 'ArrowLeft' && !option.isClosed && option.isGroup) {
      arrow.dispatchEvent(new Event('mousedown'))
      // We use preventDefault to avoid cursor jumping during opening/closing group
      e.preventDefault()
    }

    if (key === 'ArrowRight' && option.isClosed && option.isGroup) {
      arrow.dispatchEvent(new Event('mousedown'))
      // We use preventDefault to avoid cursor jumping during opening/closing group
      e.preventDefault()
    }
  }

  #keyActionsDownUp(itemFocused: HTMLElement | null, key: string) {
    // TODO: change too many queries
    const allCheckboxes = Array.from(this.srcElement.querySelectorAll('.treeselect-list__item-checkbox')).filter(
      (checkbox) => {
        const typedParent = checkbox?.parentNode?.parentNode as HTMLElement | undefined
        return typedParent?.classList.contains('treeselect-list__item--hidden') === false
      }
    )

    if (!allCheckboxes.length) {
      return
    }

    if (!itemFocused) {
      const firstNode = getListItemByCheckbox(allCheckboxes[0])
      firstNode.classList.add('treeselect-list__item--focused')
    } else {
      const focusedCheckboxIndex = allCheckboxes.findIndex((el) =>
        getListItemByCheckbox(el).classList.contains('treeselect-list__item--focused')
      )
      const focusedNode = getListItemByCheckbox(allCheckboxes[focusedCheckboxIndex])
      focusedNode.classList.remove('treeselect-list__item--focused')

      const nextNodeIndex = key === 'ArrowDown' ? focusedCheckboxIndex + 1 : focusedCheckboxIndex - 1
      const defaultNodeIndex = key === 'ArrowDown' ? 0 : allCheckboxes.length - 1
      const nextCheckbox = allCheckboxes[nextNodeIndex] ?? allCheckboxes[defaultNodeIndex]
      const isDefaultIndex = !allCheckboxes[nextNodeIndex]
      const nextNodeToFocus = getListItemByCheckbox(nextCheckbox)
      nextNodeToFocus.classList.add('treeselect-list__item--focused')

      const listCoord = this.srcElement.getBoundingClientRect()
      const nextCoord = nextNodeToFocus.getBoundingClientRect()

      if (isDefaultIndex && key === 'ArrowDown') {
        this.srcElement.scroll(0, 0)

        return
      }

      if (isDefaultIndex && key === 'ArrowUp') {
        this.srcElement.scroll(0, this.srcElement.scrollHeight)

        return
      }

      const slotHeight = this.listSlotHtmlComponent?.clientHeight ?? 0

      if (listCoord.y + listCoord.height < nextCoord.y + nextCoord.height + slotHeight) {
        this.srcElement.scroll(0, this.srcElement.scrollTop + nextCoord.height)

        return
      }

      if (listCoord.y > nextCoord.y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop - nextCoord.height)

        return
      }
    }
  }

  #createSrcElement() {
    const list = this.#createList()
    const listTreeItems = this.#getListHTML(this.options)
    list.append(...listTreeItems)

    const emptyList = this.#createEmptyList()
    list.append(emptyList)

    const slot = this.#createSlot()

    if (slot) {
      list.append(slot)
    }

    return list
  }

  #createList() {
    const list = document.createElement('div')
    list.classList.add('treeselect-list')

    if (this.listClassName.length > 0) {
      list.classList.add(this.listClassName)
    }

    if (this.isSingleSelect) {
      list.classList.add('treeselect-list--single-select')
    }

    if (this.disabledBranchNode) {
      list.classList.add('treeselect-list--disabled-branch-node')
    }

    list.addEventListener('mouseout', (e) => this.#listMouseout(e))
    list.addEventListener('mousemove', () => this.#listMouseMove())
    list.addEventListener('mouseup', () => this.mouseupCallback(), true)

    return list
  }

  #listMouseout(e: Event) {
    e.stopPropagation()

    if (this.#lastFocusedItem && this.#isMouseActionsAvailable) {
      this.#lastFocusedItem.classList.add('treeselect-list__item--focused')
    }
  }

  #listMouseMove() {
    this.#isMouseActionsAvailable = true
  }

  #getListHTML(options: OptionType[]) {
    return options.reduce((acc, option) => {
      if (option.children?.length) {
        const groupContainer = this.#createGroupContainer(option)
        const innerGroupsAndElements = this.#getListHTML(option.children)

        groupContainer.append(...innerGroupsAndElements)
        acc.push(groupContainer)

        return acc
      }

      const itemGroupElement = this.#createGroupItem(option, false)
      acc.push(itemGroupElement)

      return acc
    }, [] as HTMLElement[])
  }

  #createSlot() {
    if (!this.listSlotHtmlComponent) {
      return null
    }

    const slot = document.createElement('div')
    slot.classList.add('treeselect-list__slot')
    slot.appendChild(this.listSlotHtmlComponent)

    return slot
  }

  #createEmptyList() {
    const emptyList = document.createElement('div')
    emptyList.classList.add('treeselect-list__empty')
    emptyList.setAttribute('title', this.emptyText)

    const icon = document.createElement('span')
    icon.classList.add('treeselect-list__empty-icon')
    appendIconToElement(this.iconElements.attention, icon)

    const text = document.createElement('span')
    text.classList.add('treeselect-list__empty-text')
    text.textContent = this.emptyText

    emptyList.append(icon, text)

    // Add emptyList to cache
    this.emptyListHtmlElement = emptyList

    return emptyList
  }

  #createGroupContainer(option: OptionType) {
    const groupContainerElement = document.createElement('div')
    groupContainerElement.setAttribute('group-container-id', option.value.toString())
    groupContainerElement.classList.add('treeselect-list__group-container')

    const groupItemElement = this.#createGroupItem(option, true)
    groupContainerElement.appendChild(groupItemElement)

    return groupContainerElement
  }

  #createGroupItem(option: OptionType, isGroup: boolean) {
    const itemElement = this.#createItemElement(option)

    if (isGroup) {
      const arrow = this.#createArrow(option)
      itemElement.appendChild(arrow)
      itemElement.classList.add('treeselect-list__item--group')
    }

    const checkbox = this.#createCheckbox(option)
    const label = this.#createCheckboxLabel(option, isGroup)
    itemElement.append(checkbox, label)

    return itemElement
  }

  #createItemElement(option: OptionType) {
    const itemElement = document.createElement('div')
    itemElement.setAttribute('tabindex', '-1')
    itemElement.setAttribute('title', option.name)
    setAttributesFromHtmlAttr(itemElement, option.htmlAttr)
    itemElement.classList.add('treeselect-list__item')

    itemElement.addEventListener('mouseover', () => this.#itemElementMouseover(itemElement), true)
    itemElement.addEventListener('mouseout', () => this.#itemElementMouseout(itemElement), true)
    itemElement.addEventListener('mousedown', (e) => this.#itemElementMousedown(e, option))

    // Add htmlItem to the optionsTreeMap
    const treeOption = this.optionsTreeMap.get(option.value)
    if (treeOption) {
      treeOption.itemHtmlElement = itemElement
    }

    return itemElement
  }

  #itemElementMouseover(itemElement: HTMLDivElement) {
    if (this.#isMouseActionsAvailable) {
      this.#groupMouseAction(true, itemElement)
    }
  }

  #itemElementMouseout(itemElement: HTMLDivElement) {
    if (this.#isMouseActionsAvailable) {
      this.#groupMouseAction(false, itemElement)
      this.#lastFocusedItem = itemElement
    }
  }

  #itemElementMousedown(e: Event, option: OptionType) {
    e.preventDefault()
    e.stopPropagation()
    const isDisabled = this.optionsTreeMap.get(option.value)?.disabled ?? false

    if (isDisabled) {
      return
    }

    const checkbox = (e.target as HTMLElement).querySelector('.treeselect-list__item-checkbox') as HTMLInputElement
    checkbox.checked = !checkbox.checked
    this.#checkboxClickEvent(checkbox, option)
  }

  #createArrow(option: OptionType) {
    const arrow = document.createElement('span')
    arrow.setAttribute('tabindex', '-1')
    arrow.classList.add('treeselect-list__item-icon')
    appendIconToElement(this.iconElements.arrowDown, arrow)

    arrow.addEventListener('mousedown', (e) => this.#arrowMousedown(e))

    // Add arrow to the optionsTreeMap
    const treeOption = this.optionsTreeMap.get(option.value)
    if (treeOption) {
      treeOption.arrowItemHtmlElement = arrow
    }

    return arrow
  }

  #arrowMousedown(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    this.#arrowClickEvent(e)
  }

  #createCheckbox(option: OptionType) {
    const checkboxContainer = document.createElement('div')
    checkboxContainer.classList.add('treeselect-list__item-checkbox-container')
    const ico = document.createElement('span')
    ico.classList.add('treeselect-list__item-checkbox-icon')
    ico.innerHTML = ''

    const checkbox = document.createElement('input')
    checkbox.setAttribute('tabindex', '-1')
    checkbox.setAttribute('type', `checkbox`)
    checkbox.setAttribute('input-id', option.value.toString())
    checkbox.classList.add('treeselect-list__item-checkbox')

    checkboxContainer.append(ico, checkbox)

    // Add checkbox to the optionsTreeMap
    const treeOption = this.optionsTreeMap.get(option.value)
    if (treeOption) {
      treeOption.checkboxHtmlElement = checkbox
      treeOption.checkboxIconHtmlElement = ico
    }

    return checkboxContainer
  }

  #createCheckboxLabel(option: OptionType, isGroup: boolean) {
    const label = document.createElement('label')
    label.textContent = option.name
    label.classList.add('treeselect-list__item-label')

    if (isGroup && this.showCount) {
      const counter = this.#createCounter(option)
      label.appendChild(counter)
    }

    return label
  }

  #createCounter(option: OptionType) {
    const counter = document.createElement('span')
    const children = this.optionsTreeMap.get(option.value)?.children ?? []
    counter.textContent = `(${children.length})`
    counter.classList.add('treeselect-list__item-label-counter')

    return counter
  }

  // Actions
  #checkboxClickEvent(target: HTMLInputElement, option: OptionType) {
    const treeOption = this.optionsTreeMap.get(option.value) ?? null

    if (treeOption === null) {
      return
    }

    if (treeOption.isGroup && this.disabledBranchNode) {
      // We need to close/open disabled group on mousedown
      const arrow = getArrowOfItemByCheckbox(target)
      arrow?.dispatchEvent(new Event('mousedown'))

      return
    }

    if (this.isSingleSelect) {
      const [previousValue] = this.#previousSingleSelectedValue

      // Prevent emit the same value.
      if (treeOption.id === previousValue) {
        return
      }

      this.#previousSingleSelectedValue = [treeOption.id]
      updateOptionsByValue({
        newValue: [treeOption.id],
        optionsTreeMap: this.optionsTreeMap,
        isSingleSelect: this.isSingleSelect,
        isIndependentNodes: this.isIndependentNodes
      })
    } else {
      treeOption.checked = target.checked
      const resultChecked = updateOptionByCheckState({
        option: treeOption,
        optionsTreeMap: this.optionsTreeMap,
        isIndependentNodes: this.isIndependentNodes
      })
      target.checked = resultChecked
    }

    updateDOM({
      optionsTreeMap: this.optionsTreeMap,
      emptyListHtmlElement: this.emptyListHtmlElement,
      iconElements: this.iconElements,
      previousSingleSelectedValue: this.#previousSingleSelectedValue,
      rtl: this.rtl
    })
    this.#emitInput()
  }

  #arrowClickEvent(e: Event) {
    const input = (e.target as HTMLElement)?.parentNode?.querySelector('[input-id]')
    const inputId = input?.getAttribute('input-id') ?? null
    const treeOption = getTreeItemOptionByInputId(inputId, this.optionsTreeMap)

    if (treeOption !== null) {
      treeOption.isClosed = !treeOption.isClosed
      hideShowChildrenOptions(this.optionsTreeMap, treeOption)
      updateDOM({
        optionsTreeMap: this.optionsTreeMap,
        emptyListHtmlElement: this.emptyListHtmlElement,
        iconElements: this.iconElements,
        previousSingleSelectedValue: this.#previousSingleSelectedValue,
        rtl: this.rtl
      })
      this.arrowClickCallback(treeOption.id, treeOption.isClosed)
    }
  }

  #groupMouseAction(isMouseOver: boolean, itemElement: HTMLElement) {
    const focusedClassName = 'treeselect-list__item--focused'

    if (isMouseOver) {
      const itemsFocused = Array.from(this.srcElement.querySelectorAll(`.${focusedClassName}`))

      if (itemsFocused.length) {
        itemsFocused.forEach((el) => el.classList.remove(focusedClassName))
      }

      itemElement.classList.add(focusedClassName)
    } else {
      itemElement.classList.remove(focusedClassName)
    }
  }

  #sortNodes(nodes: TreeItem[]) {
    return this.tagsSortFn === null
      ? nodes
      : [...nodes].sort((a, b) => this.tagsSortFn!({ value: a.id, name: a.name }, { value: b.id, name: b.name }))
  }

  #updateSelectedNodes() {
    const { ungroupedNodes, groupedNodes, allNodes } = getCheckedOptions(this.optionsTreeMap)

    this.selectedNodes = {
      nodes: this.#sortNodes(ungroupedNodes),
      groupedNodes: this.#sortNodes(groupedNodes),
      allNodes: this.#sortNodes(allNodes)
    }
  }

  // Emits
  #emitInput() {
    this.#updateSelectedNodes()
    this.inputCallback(this.selectedNodes)
    this.value = this.selectedNodes.nodes.map((node) => node.id)
  }
}
