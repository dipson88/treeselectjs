import { type ValueOptionType, type FlattedOptionType, type IconsType } from '../../treeselectTypes'
import { type OptionsTreeMap, type CachedOptionsNodesType, TreeItem } from '../listTypes'
import { appendIconToElement } from '../../svgIcons'

export const getListItemById = (id: string, optionsTreeMap: OptionsTreeMap) => {
  return optionsTreeMap.get(id)?.itemHtmlElement as HTMLElement
}

export const getArrowItemById = (id: string, optionsTreeMap: OptionsTreeMap) => {
  return optionsTreeMap.get(id)?.arrowItemHtmlElement as HTMLElement
}

export const updateDOM2 = ({
  optionsTreeMap,
  srcElement,
  iconElements,
  previousSingleSelectedValue,
  rtl
}: {
  optionsTreeMap: OptionsTreeMap
  srcElement: HTMLElement | Element
  iconElements: IconsType
  previousSingleSelectedValue: ValueOptionType[]
  rtl: boolean
}) => {
  optionsTreeMap.forEach((option) => {
    const input = option.checkboxHtmlElement
    const listItem = option.itemHtmlElement

    input.checked = option.checked

    updateCheckedClass({ option, listItem, previousSingleSelectedValue })
    updatePartialCheckedClass(option, listItem)
    updateDisabledCheckedClass(option, listItem)
    updateClosedClass({ option, listItem, iconElements })
    updateHiddenClass(option, listItem)

    updateLeftPaddingItems2({ option, listItem, optionsTreeMap, rtl })
    updateCheckboxClass({ option, input, iconElements })
  })

  updateEmptyListClass2({ optionsTreeMap, srcElement })
}

const updateLeftPaddingItems2 = ({
  option,
  listItem,
  optionsTreeMap,
  rtl
}: {
  option: TreeItem
  listItem: HTMLElement
  optionsTreeMap: OptionsTreeMap
  rtl: boolean
}) => {
  const isZeroLevel = option.level === 0
  const defaultPadding = 20
  const zeroLevelItemPadding = 5
  let padding = '0'

  if (isZeroLevel) {
    const isGroupsExistOnLevel = Array.from(optionsTreeMap.values()).some(
      (item) => item.isGroup && item.level === option.level
    )
    const itemPadding = !option.isGroup && isGroupsExistOnLevel ? `${defaultPadding}px` : `${zeroLevelItemPadding}px`
    padding = option.isGroup ? '0' : itemPadding
  } else {
    padding = option.isGroup
      ? `${option.level * defaultPadding}px`
      : `${option.level * defaultPadding + defaultPadding}px`
  }

  if (rtl) {
    listItem.style.paddingRight = padding
  } else {
    listItem.style.paddingLeft = padding
  }

  // You can use css selectors to reset params with !important
  listItem.setAttribute('level', option.level.toString())
  listItem.setAttribute('group', option.isGroup.toString())
}

const updateEmptyListClass2 = ({
  optionsTreeMap,
  srcElement
}: {
  optionsTreeMap: OptionsTreeMap
  srcElement: HTMLElement | Element
}) => {
  const isNotEmpty = Array.from(optionsTreeMap.values()).some((option) => !option.hidden)
  const emptyList = srcElement.querySelector('.treeselect-list__empty') as HTMLElement

  if (isNotEmpty) {
    emptyList.classList.add('treeselect-list__empty--hidden')
  } else {
    emptyList.classList.remove('treeselect-list__empty--hidden')
  }
}

export const getListItemByCheckbox = (checkbox: HTMLElement | Element) => {
  const checkboxContainer = checkbox.parentNode as HTMLElement
  const listItem = checkboxContainer.parentNode as HTMLElement

  return listItem
}

export const getArrowOfItemByCheckbox = (checkbox: HTMLElement | Element) => {
  const item = getListItemByCheckbox(checkbox)
  const arrow = item.querySelector('.treeselect-list__item-icon')

  return arrow
}

export const setAttributesFromHtmlAttr = (itemElement: HTMLDivElement, htmlAttr?: object) => {
  if (!htmlAttr) {
    return
  }

  Object.keys(htmlAttr).forEach((key) => {
    const value = htmlAttr[key as keyof object]

    if (typeof value === 'string') {
      itemElement.setAttribute(key, value)
    }
  })
}

export const updateDOM = ({
  flattedOptions,
  srcElement,
  iconElements,
  previousSingleSelectedValue,
  rtl,
  cachedOptionsNodes
}: {
  flattedOptions: FlattedOptionType[]
  srcElement: HTMLElement | Element
  iconElements: IconsType
  previousSingleSelectedValue: ValueOptionType[]
  rtl: boolean
  cachedOptionsNodes: CachedOptionsNodesType
}) => {
  flattedOptions.forEach((option) => {
    const input = cachedOptionsNodes[option.id]
    const listItem = getListItemByCheckbox(input)

    input.checked = option.checked

    updateCheckedClass({ option, listItem, previousSingleSelectedValue })
    updatePartialCheckedClass(option, listItem)
    updateDisabledCheckedClass(option, listItem)
    updateClosedClass({ option, listItem, iconElements })
    updateHiddenClass(option, listItem)

    updateLeftPaddingItems({ option, listItem, flattedOptions, rtl })
    updateCheckboxClass({ option, input, iconElements })
  })

  updateEmptyListClass(flattedOptions, srcElement)
}

const updateCheckedClass = ({
  option,
  listItem,
  previousSingleSelectedValue
}: {
  option: FlattedOptionType
  listItem: HTMLElement
  previousSingleSelectedValue: ValueOptionType[]
}) => {
  if (option.checked) {
    listItem.classList.add('treeselect-list__item--checked')
  } else {
    listItem.classList.remove('treeselect-list__item--checked')
  }

  if (Array.isArray(previousSingleSelectedValue) && previousSingleSelectedValue[0] === option.id && !option.disabled) {
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

const updateDisabledCheckedClass = (option: FlattedOptionType, listItem: HTMLElement) => {
  if (option.disabled) {
    listItem.classList.add('treeselect-list__item--disabled')
  } else {
    listItem.classList.remove('treeselect-list__item--disabled')
  }
}

const updateClosedClass = ({
  option,
  listItem,
  iconElements
}: {
  option: FlattedOptionType
  listItem: HTMLElement
  iconElements: IconsType
}) => {
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

const updateCheckboxClass = ({
  option,
  input,
  iconElements
}: {
  option: FlattedOptionType
  input: HTMLInputElement
  iconElements: IconsType
}) => {
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

const updateLeftPaddingItems = ({
  option,
  listItem,
  flattedOptions,
  rtl
}: {
  option: FlattedOptionType
  listItem: HTMLElement
  flattedOptions: FlattedOptionType[]
  rtl: boolean
}) => {
  const isZeroLevel = option.level === 0
  const defaultPadding = 20
  const zeroLevelItemPadding = 5

  if (isZeroLevel) {
    const isGroupsExistOnLevel = flattedOptions.some((item) => item.isGroup && item.level === option.level)
    const itemPadding = !option.isGroup && isGroupsExistOnLevel ? `${defaultPadding}px` : `${zeroLevelItemPadding}px`
    const padding = option.isGroup ? '0' : itemPadding

    if (rtl) {
      listItem.style.paddingRight = padding
    } else {
      listItem.style.paddingLeft = padding
    }
  } else {
    const padding = option.isGroup
      ? `${option.level * defaultPadding}px`
      : `${option.level * defaultPadding + defaultPadding}px`

    if (rtl) {
      listItem.style.paddingRight = padding
    } else {
      listItem.style.paddingLeft = padding
    }
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
