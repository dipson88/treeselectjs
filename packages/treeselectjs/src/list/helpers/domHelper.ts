import type { ValueOptionType, IconsType } from '../../treeselectTypes'
import type { OptionsTreeMap, TreeItem } from '../listTypes'
import { DEFAULT_ITEM_PADDING, ZERO_LEVEL_ITEM_PADDING } from '../../helpers/constants'
import { updateIconIfChanged } from '../../helpers/svgIcons'

export const updateDOM = ({
  optionsTreeMap,
  emptyListHtmlElement,
  iconElements,
  previousSingleSelectedValue,
}: {
  optionsTreeMap: OptionsTreeMap
  emptyListHtmlElement: HTMLElement | null
  iconElements: IconsType
  previousSingleSelectedValue: ValueOptionType[]
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
    updateCheckboxClass({ option, iconElements })
    updateGroupSelectableClass(option)
  })

  updateEmptyListClass({ optionsTreeMap, emptyListHtmlElement })
}

// level and isGroup never change, so this runs once after the items are built instead of in updateDOM
export const updateLeftPaddingItems = ({ optionsTreeMap, rtl }: { optionsTreeMap: OptionsTreeMap; rtl: boolean }) => {
  let isGroupsExistOnZeroLevel = false

  for (const [_, item] of optionsTreeMap) {
    if (item.isGroup && item.level === 0) {
      isGroupsExistOnZeroLevel = true
      break
    }
  }

  optionsTreeMap.forEach((option) => {
    let padding = '0'

    if (option.level === 0) {
      const itemPadding =
        !option.isGroup && isGroupsExistOnZeroLevel ? `${DEFAULT_ITEM_PADDING}px` : `${ZERO_LEVEL_ITEM_PADDING}px`
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
  })
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
    updateIconIfChanged(iconInnerElement, arrowIcon)

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
      updateIconIfChanged(iconElements.check, icon)
    } else if (option.isPartialChecked) {
      updateIconIfChanged(iconElements.partialCheck, icon)
    } else {
      updateIconIfChanged('', icon)
    }
  }
}

const updateGroupSelectableClass = (option: TreeItem) => {
  const listItem = option.itemHtmlElement
  listItem?.classList.toggle('treeselect-list__item--non-selectable-group', !option.isGroupSelectable)
}
