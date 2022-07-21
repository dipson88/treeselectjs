import svg from '../svgIcons'
import { FlattedOptionType, OptionType } from '../treeselectTypes'
import { ITreeslectListParams, ITreeselectList, SelectedNodesType } from './listTypes'
import {
  getFlattedOptions,
  updateCheckStateFlattedOption,
  updateVisibleBySearchFlattedOptions,
  getGroupedCheckedFlattedOptions,
  getUnGroupedCheckedFlattedOptions,
  hideShowChildrenFlattedOptions,
  updateFlattedOptionsByValue
} from './listHelper'

const validateOptions = (flatOptions: FlattedOptionType[]) => {
  const { duplications } = flatOptions.reduce(
    (acc, curr) => {
      if (acc.allItems.some((id) => id === curr.id)) {
        acc.duplications.push(curr.id)
      }

      acc.allItems.push(curr.id)

      return acc
    },
    {
      duplications: [] as string[],
      allItems: [] as string[]
    }
  )

  if (duplications.length) {
    console.error(`Validation: You have duplicated values: ${duplications.join(', ')}! You should use unique values.`)
  }
}

const updateValue = (newValue: string[], flattedOptions: FlattedOptionType[], srcElement: HTMLElement | Element) => {
  updateFlattedOptionsByValue(newValue, flattedOptions)
  updateDOM(flattedOptions, srcElement)
}

const updateDOM = (flattedOptions: FlattedOptionType[], srcElement: HTMLElement | Element) => {
  flattedOptions.forEach((option) => {
    const input = srcElement.querySelector(`[input-id="${option.id}"]`) as HTMLInputElement
    const listItem = getListItemByCheckbox(input)

    input.checked = option.checked

    updateCheckedClass(option, listItem)
    updatePartialCheckedClass(option, listItem)
    updateClosedClass(option, listItem)
    updateHiddenClass(option, listItem)

    updateLeftPaddingItems(option, listItem, flattedOptions)
    updateCheckboxClass(option, input)
  })

  updateEmptyListClass(flattedOptions, srcElement)
}

const updateCheckedClass = (option: FlattedOptionType, listItem: HTMLElement) => {
  if (option.checked) {
    listItem.classList.add('treeselect-list__item--checked')
  } else {
    listItem.classList.remove('treeselect-list__item--checked')
  }
}

const updatePartialCheckedClass = (option: FlattedOptionType, listItem: HTMLElement) => {
  if (option.isPartialChecked) {
    listItem.classList.add('treeselect-list__item--partial-checked')
  } else {
    listItem.classList.remove('treeselect-list__item--partial-checked')
  }
}

const updateClosedClass = (option: FlattedOptionType, listItem: HTMLElement) => {
  if (option.isGroup) {
    const icon = listItem.querySelector('.treeselect-list__item-icon') as HTMLElement

    if (option.isClosed) {
      listItem.classList.add('treeselect-list__item--closed')
      icon.innerHTML = svg.arrowRight
    } else {
      listItem.classList.remove('treeselect-list__item--closed')
      icon.innerHTML = svg.arrowDown
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

const updateCheckboxClass = (option: FlattedOptionType, input: HTMLInputElement) => {
  const inputContainer = input.parentNode as HTMLElement
  const icon = inputContainer.querySelector('.treeselect-list__item-checkbox-icon') as HTMLElement

  if (option.checked) {
    icon.innerHTML = svg.check
  } else if (option.isPartialChecked) {
    icon.innerHTML = svg.partialCheck
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

class TreeselectList implements ITreeselectList {
  // Props
  options: OptionType[]
  value: string[]
  openLevel: number
  listSlotHtmlComponent: HTMLElement | null
  emptyText: string

  // InnerState
  searchText: string
  flattedOptions: FlattedOptionType[]
  flattedOptionsBeforeSearch: FlattedOptionType[]
  selectedNodes: SelectedNodesType
  srcElement: HTMLElement

  // PrivateInnerState
  #lastFocusedItem: HTMLElement | null = null
  #isMouseActionsAvailable = true

  constructor({ options, value, openLevel, listSlotHtmlComponent, emptyText }: ITreeslectListParams) {
    this.options = options
    this.value = value
    this.openLevel = openLevel ?? 0
    this.listSlotHtmlComponent = listSlotHtmlComponent ?? null
    this.emptyText = emptyText ?? 'No results found...'

    this.searchText = ''
    this.flattedOptions = getFlattedOptions(this.options, this.openLevel)
    this.flattedOptionsBeforeSearch = this.flattedOptions
    this.selectedNodes = { nodes: [], groupedNodes: [] }
    this.srcElement = this.#createSrcElement()

    this.updateValue(this.value)
    validateOptions(this.flattedOptions)
  }

  // Public methods
  updateValue(value: string[]) {
    updateValue(value, this.flattedOptions, this.srcElement)
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

    updateDOM(this.flattedOptions, this.srcElement)
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
    const option = this.flattedOptions.find((option) => option.id === inputId)!
    const arrow = itemFocused.querySelector('.treeselect-list__item-icon')!

    if (key === 'ArrowLeft' && !option.isClosed) {
      arrow.dispatchEvent(new Event('mousedown'))
    }

    if (key === 'ArrowRight' && option.isClosed) {
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

    list.addEventListener('mouseout', (e) => this.#listMouseout(e))
    list.addEventListener('mousemove', () => this.#listMouseMove())

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
    icon.innerHTML = svg.attention

    const text = document.createElement('span')
    text.classList.add('treeselect-list__empty-text')
    text.innerHTML = this.emptyText

    emptyList.append(icon, text)

    return emptyList
  }

  #createGroupContainer(option: OptionType) {
    const groupContainerElement = document.createElement('div')
    groupContainerElement.setAttribute('group-container-id', option.value)
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
    }

    const checkbox = this.#createCheckbox(option)
    const label = this.#createCheckboxLabel(option)
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
    e.stopPropagation()
    const checkbox = (e.target as HTMLElement).querySelector('.treeselect-list__item-checkbox') as HTMLInputElement
    checkbox.checked = !checkbox.checked
    this.#checkboxClickEvent(checkbox, option)
  }

  #createArrow() {
    const arrow = document.createElement('span')
    arrow.setAttribute('tabindex', '-1')
    arrow.classList.add('treeselect-list__item-icon')
    arrow.innerHTML = svg.arrowDown

    arrow.addEventListener('mousedown', (e) => this.#arrowMousedown(e))

    return arrow
  }

  #arrowMousedown(e: Event) {
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
    checkbox.setAttribute('input-id', option.value)
    checkbox.classList.add('treeselect-list__item-checkbox')

    checkboxContainer.append(ico, checkbox)

    return checkboxContainer
  }

  #createCheckboxLabel(option: OptionType) {
    const label = document.createElement('label')
    label.innerHTML = option.name
    label.classList.add('treeselect-list__item-label')

    return label
  }

  // Actions
  #checkboxClickEvent(target: HTMLInputElement, option: OptionType) {
    const flattedOption = this.flattedOptions.find((fo) => fo.id === option.value)

    if (flattedOption) {
      flattedOption.checked = target.checked
      flattedOption.isPartialChecked = false
      updateCheckStateFlattedOption(flattedOption, this.flattedOptions)
      updateDOM(this.flattedOptions, this.srcElement)
      this.#emitInput()
    }
  }

  #arrowClickEvent(e: Event) {
    const input = (e.target as HTMLElement)?.parentNode?.querySelector('[input-id]')
    const id = input?.getAttribute('input-id')
    const flattedOption = this.flattedOptions.find((fo) => fo.id === id)

    if (flattedOption) {
      flattedOption.isClosed = !flattedOption.isClosed
      hideShowChildrenFlattedOptions(this.flattedOptions, flattedOption)
      updateDOM(this.flattedOptions, this.srcElement)

      this.#emitArrowClick()
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
  #emitArrowClick() {
    this.srcElement.dispatchEvent(new CustomEvent('arrow-click'))
  }

  #emitInput() {
    this.#updateSelectedNodes()
    this.srcElement.dispatchEvent(new CustomEvent('input', { detail: this.selectedNodes }))
  }
}

export default TreeselectList
