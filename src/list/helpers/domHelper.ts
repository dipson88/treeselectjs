import type { ValueOptionType, IconsType } from '../../treeselectTypes'
import type { OptionsTreeMap, TreeItem } from '../listTypes'
import { DEFAULT_ITEM_PADDING, ZERO_LEVEL_ITEM_PADDING } from '../../helpers/constants'
import { appendIconToElement } from '../../helpers/svgIcons'

export const updateDOM = ({
  optionsTreeMap,
  emptyListHtmlElement,
  iconElements,
  previousSingleSelectedValue,
  rtl,
}: {
  optionsTreeMap: OptionsTreeMap
  emptyListHtmlElement: HTMLElement | null
  iconElements: IconsType
  previousSingleSelectedValue: ValueOptionType[]
  rtl: boolean
}) => {
  optionsTreeMap.forEach((option) => {
    const input = option.checkboxHtmlElement

    if (input) {
      input.checked = option.checked
    }

    updateCheckedClass({ option, previousSingleSelectedValue })
    updatePartialCheckedClass(option)
    updateDisabledCheckedClass(option)
    updateClosedClass({ option, iconElements })
    updateHiddenClass(option)
    updateLeftPaddingItems({ option, optionsTreeMap, rtl })
    updateCheckboxClass({ option, iconElements })
    updateGroupSelectableClass(option)
  })

  updateEmptyListClass({ optionsTreeMap, emptyListHtmlElement })
}

const updateLeftPaddingItems = ({
  option,
  optionsTreeMap,
  rtl,
}: {
  option: TreeItem
  optionsTreeMap: OptionsTreeMap
  rtl: boolean
}) => {
  const isZeroLevel = option.level === 0
  let padding = '0'

  if (isZeroLevel) {
    let isGroupsExistOnLevel = false

    for (const [_, item] of optionsTreeMap) {
      if (item.isGroup && item.level === option.level) {
        isGroupsExistOnLevel = true
        break
      }
    }

    const itemPadding =
      !option.isGroup && isGroupsExistOnLevel ? `${DEFAULT_ITEM_PADDING}px` : `${ZERO_LEVEL_ITEM_PADDING}px`
    padding = option.isGroup ? '0' : itemPadding
  } else {
    padding = option.isGroup
      ? `${option.level * DEFAULT_ITEM_PADDING}px`
      : `${option.level * DEFAULT_ITEM_PADDING + DEFAULT_ITEM_PADDING}px`
  }

  const listItem = option.itemHtmlElement

  if (listItem) {
    if (rtl) {
      listItem.style.paddingRight = padding
    } else {
      listItem.style.paddingLeft = padding
    }

    // We can use css selectors to reset params with !important
    listItem.setAttribute('level', option.level.toString())
    listItem.setAttribute('group', option.isGroup.toString())
  }
}

const updateEmptyListClass = ({
  optionsTreeMap,
  emptyListHtmlElement,
}: {
  optionsTreeMap: OptionsTreeMap
  emptyListHtmlElement: HTMLElement | null
}) => {
  let isNotEmpty = false

  for (const [_, option] of optionsTreeMap) {
    if (!option.hidden) {
      isNotEmpty = true
      break
    }
  }

  emptyListHtmlElement?.classList.toggle('treeselect-list__empty--hidden', isNotEmpty)
}

export const setAttributesFromHtmlAttr = (itemElement: HTMLDivElement, htmlAttr?: Record<string, string>) => {
  if (!htmlAttr) {
    return
  }

  Object.keys(htmlAttr).forEach((key) => {
    const value = htmlAttr[key as keyof Record<string, string>]

    if (typeof value === 'string') {
      itemElement.setAttribute(key, value)
    }
  })
}

const updateCheckedClass = ({
  option,
  previousSingleSelectedValue,
}: {
  option: TreeItem
  previousSingleSelectedValue: ValueOptionType[]
}) => {
  const listItem = option.itemHtmlElement
  listItem?.classList.toggle('treeselect-list__item--checked', option.checked)
  const isCheckSingleSelected =
    Array.isArray(previousSingleSelectedValue) && previousSingleSelectedValue[0] === option.id && !option.disabled
  listItem?.classList.toggle('treeselect-list__item--single-selected', isCheckSingleSelected)
}

const updatePartialCheckedClass = (option: TreeItem) => {
  const listItem = option.itemHtmlElement
  listItem?.classList.toggle('treeselect-list__item--partial-checked', option.isPartialChecked)
}

const updateDisabledCheckedClass = (option: TreeItem) => {
  const listItem = option.itemHtmlElement
  listItem?.classList.toggle('treeselect-list__item--disabled', option.disabled)
}

const updateClosedClass = ({ option, iconElements }: { option: TreeItem; iconElements: IconsType }) => {
  const arrowIcon = option.arrowItemHtmlElement

  if (option.isGroup && arrowIcon) {
    const iconInnerElement = option.isClosed ? iconElements.arrowRight : iconElements.arrowDown
    appendIconToElement(iconInnerElement, arrowIcon)

    const listItem = option.itemHtmlElement
    listItem?.classList.toggle('treeselect-list__item--closed', option.isClosed)
  }
}

const updateHiddenClass = (option: TreeItem) => {
  const listItem = option.itemHtmlElement
  listItem?.classList.toggle('treeselect-list__item--hidden', option.hidden)
}

const updateCheckboxClass = ({ option, iconElements }: { option: TreeItem; iconElements: IconsType }) => {
  const icon = option.checkboxIconHtmlElement

  if (icon) {
    if (option.checked) {
      appendIconToElement(iconElements.check, icon)
    } else if (option.isPartialChecked) {
      appendIconToElement(iconElements.partialCheck, icon)
    } else {
      icon.innerHTML = ''
    }
  }
}

const updateGroupSelectableClass = (option: TreeItem) => {
  const listItem = option.itemHtmlElement
  listItem?.classList.toggle('treeselect-list__item--non-selectable-group', !option.isGroupSelectable)
}
