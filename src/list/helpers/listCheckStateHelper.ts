import { type ValueOptionType } from '../../treeselectTypes'
import { type TreeItem, type OptionsTreeMap } from '../listTypes'
import { getDirectChildrenOptions } from './listOptionsHelper'

export const updateOptionsByValue = ({
  newValue,
  optionsTreeMap,
  isSingleSelect,
  isIndependentNodes
}: {
  newValue: ValueOptionType[]
  optionsTreeMap: OptionsTreeMap
  isSingleSelect: boolean
  isIndependentNodes: boolean
}) => {
  uncheckedAllTreeItemOptions(optionsTreeMap)
  const optionsToCheck = newValue
    .map((id) => optionsTreeMap.get(id) ?? null)
    .filter((option) => option !== null && !option.disabled) as TreeItem[]
  const [firstItem] = optionsToCheck

  if (isSingleSelect && optionsToCheck.length && firstItem) {
    firstItem.checked = true
    return
  }

  optionsToCheck.forEach((option) => {
    option.checked = true
    const resultChecked = updateOptionByCheckState({
      option,
      optionsTreeMap,
      isIndependentNodes
    })
    option.checked = resultChecked
  })
}

export const updateOptionByCheckState = ({
  option: { id, checked },
  optionsTreeMap,
  isIndependentNodes
}: {
  option: Pick<TreeItem, 'id' | 'checked'>
  optionsTreeMap: OptionsTreeMap
  isIndependentNodes: boolean
}) => {
  const currentOption = optionsTreeMap.get(id) ?? null

  if (currentOption === null) {
    return false
  }

  if (isIndependentNodes) {
    currentOption.checked = !currentOption.disabled && checked

    return currentOption.checked
  }

  const resultCheckedState = updateTreeItemOptionStateWithChildren({
    checked,
    currentOption,
    optionsTreeMap
  })
  updateParentTreeItemOptions({
    childOption: currentOption,
    optionsTreeMap
  })

  return resultCheckedState
}

const updateTreeItemOptionStateWithChildren = ({
  checked,
  currentOption,
  optionsTreeMap
}: {
  checked: boolean
  currentOption: TreeItem
  optionsTreeMap: OptionsTreeMap
}) => {
  if (!currentOption.isGroup) {
    currentOption.checked = !currentOption.disabled && checked
    currentOption.isPartialChecked = false

    return currentOption.checked
  }

  const childrenOptions = getDirectChildrenOptions({ id: currentOption.id, optionsTreeMap })
  const falseOrDisabledOrPartial = !checked || currentOption.disabled || currentOption.isPartialChecked

  if (falseOrDisabledOrPartial) {
    currentOption.checked = false
    currentOption.isPartialChecked = false
    checkUncheckAllChildren({
      option: currentOption,
      children: childrenOptions,
      optionsTreeMap
    })

    return currentOption.checked
  }

  const canWeCheckAllChildren = !isSomeChildrenDisabled({
    children: childrenOptions,
    optionsTreeMap
  })

  if (canWeCheckAllChildren) {
    currentOption.checked = true
    currentOption.isPartialChecked = false
    checkUncheckAllChildren({
      option: currentOption,
      children: childrenOptions,
      optionsTreeMap
    })

    return currentOption.checked
  }

  const isAllDisabled = isAllDirectChildrenDisabled(childrenOptions)

  if (isAllDisabled) {
    currentOption.checked = false
    currentOption.isPartialChecked = false
    currentOption.disabled = true

    return currentOption.checked
  }

  currentOption.checked = false
  currentOption.isPartialChecked = true

  childrenOptions.forEach((options) => {
    updateTreeItemOptionStateWithChildren({
      checked,
      currentOption: options,
      optionsTreeMap
    })
  })

  return currentOption.checked
}

const updateParentTreeItemOptions = ({
  childOption,
  optionsTreeMap
}: {
  childOption: TreeItem
  optionsTreeMap: OptionsTreeMap
}) => {
  const parentOption = optionsTreeMap.get(childOption.childOf) ?? null

  if (parentOption === null) {
    return
  }

  updateParentOption({ parentOption, optionsTreeMap })
  updateParentTreeItemOptions({
    childOption: parentOption,
    optionsTreeMap
  })
}

const updateParentOption = ({
  parentOption,
  optionsTreeMap
}: {
  parentOption: TreeItem
  optionsTreeMap: OptionsTreeMap
}) => {
  const children = getDirectChildrenOptions({ id: parentOption.id, optionsTreeMap })
  const isAllDisabled = isAllDirectChildrenDisabled(children)

  if (isAllDisabled) {
    parentOption.checked = false
    parentOption.isPartialChecked = false
    parentOption.disabled = true

    return
  }

  const isAllChecked = isAllDirectChildrenChecked(children)

  if (isAllChecked) {
    parentOption.checked = true
    parentOption.isPartialChecked = false

    return
  }

  const isSomeCheckedOrPartial = isSomeDirectChildrenCheckedOrPartial(children)

  if (isSomeCheckedOrPartial) {
    parentOption.checked = false
    parentOption.isPartialChecked = true

    return
  }

  parentOption.checked = false
  parentOption.isPartialChecked = false
}

const checkUncheckAllChildren = ({
  option: { checked, disabled },
  children,
  optionsTreeMap
}: {
  option: Pick<TreeItem, 'checked' | 'disabled'>
  children: TreeItem[]
  optionsTreeMap: OptionsTreeMap
}) => {
  children.forEach((option) => {
    option.disabled = disabled || option.disabled
    option.checked = checked && !option.disabled
    option.isPartialChecked = false

    const subChildren = getDirectChildrenOptions({ id: option.id, optionsTreeMap })
    checkUncheckAllChildren({
      option: { checked, disabled },
      children: subChildren,
      optionsTreeMap
    })
  })
}

const isSomeChildrenDisabled = ({
  children,
  optionsTreeMap
}: {
  children: TreeItem[]
  optionsTreeMap: OptionsTreeMap
}): boolean => {
  const isSomeDisabled = children.some((option) => option.disabled)

  if (isSomeDisabled) {
    return true
  }

  return children.some((option) => {
    if (!option.isGroup) {
      return false
    }

    const subChildren = getDirectChildrenOptions({ id: option.id, optionsTreeMap })

    return isSomeChildrenDisabled({ children: subChildren, optionsTreeMap })
  })
}

const isAllDirectChildrenDisabled = (children: TreeItem[]) => {
  return children.every((option) => !!option.disabled)
}

const isAllDirectChildrenChecked = (children: TreeItem[]) => {
  return children.every((option) => option.checked)
}

const isSomeDirectChildrenCheckedOrPartial = (children: TreeItem[]) => {
  return children.some((option) => option.checked || option.isPartialChecked)
}

const uncheckedAllTreeItemOptions = (optionsTreeMap: OptionsTreeMap) => {
  optionsTreeMap.forEach((option) => {
    option.checked = false
    option.isPartialChecked = false
  })
}
