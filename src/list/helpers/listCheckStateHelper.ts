import { ValueOptionType, FlattedOptionType } from '../../treeselectTypes'
import { getChildrenOptions } from './listOptionsHelper'

export const updateOptionsByValue = (
  newValue: ValueOptionType[],
  flattedOptions: FlattedOptionType[],
  isSingleSelect: boolean,
  isIndependentNodes: boolean
) => {
  uncheckedAllFlattedOptions(flattedOptions)
  const optionsToCheck = flattedOptions.filter((option) => !option.disabled && newValue.some((id) => id === option.id))

  if (isSingleSelect && !!optionsToCheck.length) {
    optionsToCheck[0].checked = true

    return
  }

  optionsToCheck.forEach((option) => {
    option.checked = true
    // option.isPartialChecked = false
    const resultChecked = updateOptionByCheckState(option, flattedOptions, isIndependentNodes)
    option.checked = resultChecked
  })
}

export const updateOptionByCheckState = (
  { id, checked }: Partial<FlattedOptionType>,
  flattedOptions: FlattedOptionType[],
  isIndependentNodes: boolean
) => {
  const currentOption = flattedOptions.find((option) => option.id === id)

  if (!currentOption) {
    return false
  }

  if (isIndependentNodes) {
    currentOption.checked = currentOption.disabled ? false : !!checked

    return currentOption.checked
  }

  const resultCheckedState = updateFlattedOptionStateWithChildren(!!checked, currentOption, flattedOptions)
  updateParentFlattedOptions(currentOption, flattedOptions)

  return resultCheckedState
}

const updateFlattedOptionStateWithChildren = (
  checked: boolean,
  currentOption: FlattedOptionType,
  flattedOptions: FlattedOptionType[]
) => {
  if (!currentOption.isGroup) {
    currentOption.checked = currentOption.disabled ? false : !!checked
    currentOption.isPartialChecked = false

    return currentOption.checked
  }

  const childrenOptions = flattedOptions.filter((option) => option.childOf === currentOption.id)
  const falseOrDisabledOrPartial = !checked || currentOption.disabled || currentOption.isPartialChecked

  if (falseOrDisabledOrPartial) {
    currentOption.checked = false
    currentOption.isPartialChecked = false
    checkUncheckAllChildren(currentOption, childrenOptions, flattedOptions)

    return currentOption.checked
  }

  const canWeCheckAllChildren = !isSomeChildrenDisabled(childrenOptions, flattedOptions)

  if (canWeCheckAllChildren) {
    currentOption.checked = true
    currentOption.isPartialChecked = false
    checkUncheckAllChildren(currentOption, childrenOptions, flattedOptions)

    return currentOption.checked
  }

  const isAllDisabled = isAllChildrenDisabled(childrenOptions)

  if (isAllDisabled) {
    currentOption.checked = false
    currentOption.isPartialChecked = false
    currentOption.disabled = true

    return currentOption.checked
  }

  currentOption.checked = false
  currentOption.isPartialChecked = true

  childrenOptions.forEach((option) => {
    updateFlattedOptionStateWithChildren(checked, option, flattedOptions)
  })

  return currentOption.checked
}

const updateParentFlattedOptions = (childNode: FlattedOptionType, flattedOptions: FlattedOptionType[]) => {
  const parentOption = flattedOptions.find((option) => option.id === childNode.childOf)

  if (!parentOption) {
    return
  }

  updateParentOption(parentOption, flattedOptions)
  updateParentFlattedOptions(parentOption, flattedOptions)
}

const updateParentOption = (parentOption: FlattedOptionType, flattedOptions: FlattedOptionType[]) => {
  const children = getChildrenOptions(parentOption, flattedOptions)
  const isAllDisabled = isAllChildrenDisabled(children)

  if (isAllDisabled) {
    parentOption.checked = false
    parentOption.isPartialChecked = false
    parentOption.disabled = true

    return
  }

  const isAllChecked = isAllChildrenChecked(children)

  if (isAllChecked) {
    parentOption.checked = true
    parentOption.isPartialChecked = false

    return
  }

  const isSomeCheckedOrPartial = isSomeChildrenCheckedOrPartial(children)

  if (isSomeCheckedOrPartial) {
    parentOption.checked = false
    parentOption.isPartialChecked = true

    return
  }

  parentOption.checked = false
  parentOption.isPartialChecked = false
}

const checkUncheckAllChildren = (
  { checked, disabled }: Partial<FlattedOptionType>,
  children: FlattedOptionType[],
  flattedOptions: FlattedOptionType[]
) => {
  children.forEach((option) => {
    option.disabled = !!disabled || !!option.disabled
    option.checked = !!checked && !option.disabled
    option.isPartialChecked = false
    const subChildren = getChildrenOptions(option, flattedOptions)
    checkUncheckAllChildren({ checked, disabled }, subChildren, flattedOptions)
  })
}

const isSomeChildrenDisabled = (children: FlattedOptionType[], flattedOptions: FlattedOptionType[]) => {
  const isSomeDisabled = children.some((option) => option.disabled)

  if (isSomeDisabled) {
    return true
  }

  const isSomeSubChildrenDisabled = children.some((option) => {
    if (option.isGroup) {
      const subChildren = getChildrenOptions(option, flattedOptions)

      return isSomeChildrenDisabled(subChildren, flattedOptions)
    }

    return false
  })

  return isSomeSubChildrenDisabled
}

const isAllChildrenDisabled = (children: FlattedOptionType[]) => {
  return children.every((option) => !!option.disabled)
}

const isAllChildrenChecked = (children: FlattedOptionType[]) => {
  return children.every((option) => !!option.checked)
}

const isSomeChildrenCheckedOrPartial = (children: FlattedOptionType[]) => {
  return children.some((option) => !!option.checked || !!option.isPartialChecked)
}

const uncheckedAllFlattedOptions = (flattedOptions: FlattedOptionType[]) => {
  flattedOptions.forEach((option) => {
    option.checked = false
    option.isPartialChecked = false
  })
}
