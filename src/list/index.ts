import { OptionType, ValueOptionType, FlattedOptionType, IconsType, SelectedNodesType } from '../treeselectTypes'
import { ITreeselectListParams, ITreeselectList } from './listTypes'
import {
  getFlattedOptions,
  updateCheckStateFlattedOption,
  updateVisibleBySearchFlattedOptions,
  getGroupedCheckedFlattedOptions,
  getUnGroupedCheckedFlattedOptions,
  hideShowChildrenFlattedOptions,
  updateFlattedOptionsByValue
} from './listHelper'
import { appendIconToElement } from '../svgIcons'

let previousSingleSelectedValue: ValueOptionType[] = []

const validateOptions = (flatOptions: FlattedOptionType[]) => {
  const { duplications } = flatOptions.reduce(
    (acc, curr) => {
      if (acc.allItems.some((id) => id.toString() === curr.id.toString())) {
        acc.duplications.push(curr.id)
      }

      acc.allItems.push(curr.id)

      return acc
    },
    {
      duplications: [] as ValueOptionType[],
      allItems: [] as ValueOptionType[]
    }
  )

  if (duplications.length) {
    console.error(`Validation: You have duplicated values: ${duplications.join(', ')}! You should use unique values.`)
  }
}

const updateValue = (
  newValue: ValueOptionType[],
  flattedOptions: FlattedOptionType[],
  srcElement: HTMLElement | Element,
  iconElements: IconsType
) => {
  updateFlattedOptionsByValue(newValue, flattedOptions)
  updateDOM(flattedOptions, srcElement, iconElements)
}

const updateDOM = (flattedOptions: FlattedOptionType[], srcElement: HTMLElement | Element, iconElements: IconsType) => {
  flattedOptions.forEach((option) => {
    const input = srcElement.querySelector(`[input-id="${option.id}"]`) as HTMLInputElement
    const listItem = getListItemByCheckbox(input)

    input.checked = option.checked

    updateCheckedClass(option, listItem)
    updatePartialCheckedClass(option, listItem)
    updateClosedClass(option, listItem, iconElements)
    updateHiddenClass(option, listItem)

    updateLeftPaddingItems(option, listItem, flattedOptions)
    updateCheckboxClass(option, input, iconElements)
  })

  updateEmptyListClass(flattedOptions, srcElement)
}

const updateCheckedClass = (option: FlattedOptionType, listItem: HTMLElement) => {
  if (option.checked) {
    listItem.classList.add('treeselect-list__item--checked')
  } else {
    listItem.classList.remove('treeselect-list__item--checked')
  }

  if (Array.isArray(previousSingleSelectedValue) && previousSingleSelectedValue[0] === option.id) {
    listItem.classList.add('treeselect-list__item--single-selected')
  } else {
    listItem.classList.remove('treeselect-list__item--single-selected')
  }
}

const updatePartialCheckedClass = (option: FlattedOptionType, listItem: HTMLElement) => {
  if (option.isPartialChecked) {
    listItem.classList.add('treeselect-list__item--partial-checked')
  } else {
    listItem.classList.remove('treeselect-list__item--partial-checked')
  }
}

const updateClosedClass = (option: FlattedOptionType, listItem: HTMLElement, iconElements: IconsType) => {
  if (option.isGroup) {
    const icon = listItem.querySelector('.treeselect-list__item-icon') as HTMLElement
    const iconInnerElement = option.isClosed ? iconElements.arrowRight : iconElements.arrowDown
    appendIconToElement(iconInnerElement, icon)

    if (option.isClosed) {
      listItem.classList.add('treeselect-list__item--closed')
    } else {
      listItem.classList.remove('treeselect-list__item--closed')
    }
  }
}

const updateHiddenClass = (option: FlattedOptionType, listItem: HTMLElement) => {
  if (option.hidden) {
    listItem.classList.add('treeselect-list__item--hidden')
  } else {
    listItem.classList.remove('treeselect-list__item--hidden')
  }
}

const updateCheckboxClass = (option: FlattedOptionType, input: HTMLInputElement, iconElements: IconsType) => {
  const inputContainer = input.parentNode as HTMLElement
  const icon = inputContainer.querySelector('.treeselect-list__item-checkbox-icon') as HTMLElement

  if (option.checked) {
    appendIconToElement(iconElements.check, icon)
  } else if (option.isPartialChecked) {
    appendIconToElement(iconElements.partialCheck, icon)
  } else {
    icon.innerHTML = ''
  }
}

const updateLeftPaddingItems = (
  option: FlattedOptionType,
  listItem: HTMLElement,
  flattedOptions: FlattedOptionType[]
) => {
  const isZeroLevel = option.level === 0
  const defaultPadding = 20
  const zeroLevelItemPadding = 5

  if (isZeroLevel) {
    const isGroupsExistOnLevel = flattedOptions.some((item) => item.isGroup && item.level === option.level)
    const itemPadding = !option.isGroup && isGroupsExistOnLevel ? `${defaultPadding}px` : `${zeroLevelItemPadding}px`
    listItem.style.paddingLeft = option.isGroup ? '0' : itemPadding
  } else {
    listItem.style.paddingLeft = option.isGroup
      ? `${option.level * defaultPadding}px`
      : `${option.level * defaultPadding + defaultPadding}px`
  }

  // You can use css selectors to reset params with !important
  listItem.setAttribute('level', option.level.toString())
  listItem.setAttribute('group', option.isGroup.toString())
}

const updateEmptyListClass = (flattedOptions: FlattedOptionType[], srcElement: HTMLElement | Element) => {
  const isNotEmpty = flattedOptions.some((option) => !option.hidden)
  const emptyList = srcElement.querySelector('.treeselect-list__empty') as HTMLElement

  if (isNotEmpty) {
    emptyList.classList.add('treeselect-list__empty--hidden')
  } else {
    emptyList.classList.remove('treeselect-list__empty--hidden')
  }
}

const getListItemByCheckbox = (checkbox: HTMLElement | Element) => {
  const checkboxContainer = checkbox.parentNode as HTMLElement
  const listItem = checkboxContainer.parentNode as HTMLElement

  return listItem
}

const getFlattedOptionByInputId = (inputId: string | null, flattedOptions: FlattedOptionType[]) => {
  return flattedOptions.find((fo) => fo.id.toString() === inputId)
}

const getArrowOfItemByCheckbox = (checkbox: HTMLElement | Element) => {
  const item = getListItemByCheckbox(checkbox)
  const arrow = item.querySelector('.treeselect-list__item-icon')

  return arrow
}

export class TreeselectList implements ITreeselectList {
  // Props
  options: OptionType[]
  value: ValueOptionType[]
  openLevel: number
  listSlotHtmlComponent: HTMLElement | null
  emptyText: string
  isSingleSelect: boolean
  showCount: boolean
  disabledBranchNode: boolean
  iconElements: IconsType

  // InnerState
  searchText: string
  flattedOptions: FlattedOptionType[]
  flattedOptionsBeforeSearch: FlattedOptionType[]
  selectedNodes: SelectedNodesType
  srcElement: HTMLElement

  // Callbacks
  inputCallback: (value: SelectedNodesType) => void
  arrowClickCallback: () => void
  mouseupCallback: () => void

  // PrivateInnerState
  #lastFocusedItem: HTMLElement | null = null
  #isMouseActionsAvailable = true

  constructor({
    options,
    value,
    openLevel,
    listSlotHtmlComponent,
    emptyText,
    isSingleSelect,
    iconElements,
    showCount,
    disabledBranchNode,
    inputCallback,
    arrowClickCallback,
    mouseupCallback
  }: ITreeselectListParams) {
    this.options = options
    this.value = value
    this.openLevel = openLevel ?? 0
    this.listSlotHtmlComponent = listSlotHtmlComponent ?? null
    this.emptyText = emptyText ?? 'No results found...'
    this.isSingleSelect = isSingleSelect ?? false
    this.showCount = showCount ?? false
    this.disabledBranchNode = disabledBranchNode ?? false
    this.iconElements = iconElements

    this.searchText = ''
    this.flattedOptions = getFlattedOptions(this.options, this.openLevel)
    this.flattedOptionsBeforeSearch = this.flattedOptions
    this.selectedNodes = { nodes: [], groupedNodes: [] }
    this.srcElement = this.#createSrcElement()

    this.inputCallback = inputCallback
    this.arrowClickCallback = arrowClickCallback
    this.mouseupCallback = mouseupCallback

    this.updateValue(this.value)
    validateOptions(this.flattedOptions)
  }

  // Public methods
  updateValue(value: ValueOptionType[]) {
    this.value = value
    previousSingleSelectedValue = this.isSingleSelect ? this.value : []
    updateValue(value, this.flattedOptions, this.srcElement, this.iconElements)
    this.#updateSelectedNodes()
  }

  updateSearchValue(searchText: string) {
    if (searchText === this.searchText) {
      return
    }

    const isStartOfSearching = this.searchText === '' && searchText !== ''
    this.searchText = searchText

    if (isStartOfSearching) {
      this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))
    }

    if (this.searchText === '') {
      // This loop need to save a isClose state before searching
      this.flattedOptions = this.flattedOptionsBeforeSearch.map((option) => {
        const newOptionData = this.flattedOptions.find((newOption) => newOption.id === option.id)!
        newOptionData.isClosed = option.isClosed
        newOptionData.hidden = option.hidden

        return newOptionData
      })

      this.flattedOptionsBeforeSearch = []
    }

    if (this.searchText) {
      updateVisibleBySearchFlattedOptions(this.flattedOptions, searchText)
    }

    updateDOM(this.flattedOptions, this.srcElement, this.iconElements)
    this.focusFirstListElement()
  }

  callKeyAction(key: string) {
    this.#isMouseActionsAvailable = false
    const itemFocused = this.srcElement.querySelector('.treeselect-list__item--focused') as HTMLElement | null

    if (key === 'Enter' && itemFocused) {
      itemFocused.dispatchEvent(new Event('mousedown'))
    }

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      this.#keyActionsLeftRight(itemFocused, key)
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

  // Private methods
  #keyActionsLeftRight(itemFocused: HTMLElement | null, key: string) {
    if (!itemFocused) {
      return
    }

    const checkbox = itemFocused.querySelector('.treeselect-list__item-checkbox')!
    const inputId = checkbox.getAttribute('input-id')
    const option = getFlattedOptionByInputId(inputId, this.flattedOptions)!
    const arrow = itemFocused.querySelector('.treeselect-list__item-icon')!

    if (key === 'ArrowLeft' && !option.isClosed && option.isGroup) {
      arrow.dispatchEvent(new Event('mousedown'))
    }

    if (key === 'ArrowRight' && option.isClosed && option.isGroup) {
      arrow.dispatchEvent(new Event('mousedown'))
    }
  }

  #keyActionsDownUp(itemFocused: HTMLElement | null, key: string) {
    const allCheckboxes = Array.from(this.srcElement.querySelectorAll('.treeselect-list__item-checkbox')).filter(
      (checkbox) => window.getComputedStyle(getListItemByCheckbox(checkbox)).display !== 'none'
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

      if (listCoord.y + listCoord.height < nextCoord.y + nextCoord.height) {
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
    const slot = this.#createSlot()

    if (slot) {
      list.append(slot)
    }

    const emptyList = this.#createEmptyList()
    list.append(emptyList)

    return list
  }

  #createList() {
    const list = document.createElement('div')
    list.classList.add('treeselect-list')

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
    text.innerHTML = this.emptyText

    emptyList.append(icon, text)

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
      const arrow = this.#createArrow()
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
    itemElement.classList.add('treeselect-list__item')

    itemElement.addEventListener('mouseover', () => this.#itemElementMouseover(itemElement), true)
    itemElement.addEventListener('mouseout', () => this.#itemElementMouseout(itemElement), true)
    itemElement.addEventListener('mousedown', (e) => this.#itemElementMousedown(e, option))

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
    const checkbox = (e.target as HTMLElement).querySelector('.treeselect-list__item-checkbox') as HTMLInputElement
    checkbox.checked = !checkbox.checked
    this.#checkboxClickEvent(checkbox, option)
  }

  #createArrow() {
    const arrow = document.createElement('span')
    arrow.setAttribute('tabindex', '-1')
    arrow.classList.add('treeselect-list__item-icon')
    appendIconToElement(this.iconElements.arrowDown, arrow)

    arrow.addEventListener('mousedown', (e) => this.#arrowMousedown(e))

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

    return checkboxContainer
  }

  #createCheckboxLabel(option: OptionType, isGroup: boolean) {
    const label = document.createElement('label')
    label.innerHTML = option.name
    label.classList.add('treeselect-list__item-label')

    if (isGroup && this.showCount) {
      const counter = this.#createCounter(option)
      label.appendChild(counter)
    }

    return label
  }

  #createCounter(option: OptionType) {
    const counter = document.createElement('span')
    const children = this.flattedOptions.filter((fo) => fo.childOf === option.value)
    counter.innerHTML = `(${children.length})`
    counter.classList.add('treeselect-list__item-label-counter')

    return counter
  }

  // Actions
  #checkboxClickEvent(target: HTMLInputElement, option: OptionType) {
    const flattedOption = this.flattedOptions.find((fo) => fo.id === option.value)
    if (!flattedOption) {
      return
    }

    if (flattedOption?.isGroup && this.disabledBranchNode) {
      // We need to close/open disabled group on mousedown
      const arrow = getArrowOfItemByCheckbox(target)
      arrow?.dispatchEvent(new Event('mousedown'))

      return
    }

    if (this.isSingleSelect) {
      const [previousValue] = previousSingleSelectedValue

      // Prevent emit the same value.
      if (flattedOption.id === previousValue) {
        return
      }

      previousSingleSelectedValue = [flattedOption.id]
      updateFlattedOptionsByValue([flattedOption.id], this.flattedOptions)
    } else {
      flattedOption.checked = target.checked
      flattedOption.isPartialChecked = false
      updateCheckStateFlattedOption(flattedOption, this.flattedOptions)
    }

    updateDOM(this.flattedOptions, this.srcElement, this.iconElements)
    this.#emitInput()
  }

  #arrowClickEvent(e: Event) {
    const input = (e.target as HTMLElement)?.parentNode?.querySelector('[input-id]')
    const inputId = input?.getAttribute('input-id') ?? null
    const flattedOption = getFlattedOptionByInputId(inputId, this.flattedOptions)

    if (flattedOption) {
      flattedOption.isClosed = !flattedOption.isClosed
      hideShowChildrenFlattedOptions(this.flattedOptions, flattedOption)
      updateDOM(this.flattedOptions, this.srcElement, this.iconElements)

      this.arrowClickCallback()
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

  #updateSelectedNodes() {
    this.selectedNodes = {
      nodes: getUnGroupedCheckedFlattedOptions(this.flattedOptions),
      groupedNodes: getGroupedCheckedFlattedOptions(this.flattedOptions)
    }
  }

  // Emits
  #emitInput() {
    this.#updateSelectedNodes()
    this.inputCallback(this.selectedNodes)
    this.value = this.selectedNodes.nodes.map((node) => node.id)
  }
}
