import { type ValueOptionType, type FlattedOptionType } from '../../treeselectTypes'
import { getChildrenOptions, getChildrenOptions2 } from './listOptionsHelper'
import { type TreeItem, type OptionsTreeMap } from '../listTypes'

export const updateOptionsByValue2 = ({
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
  uncheckedAllFlattedOptions2(optionsTreeMap)
  const optionsToCheck = newValue
    .map((id) => optionsTreeMap.get(id) ?? null)
    .filter((option) => option !== null && !option.disabled) as TreeItem[]

  if (isSingleSelect && optionsToCheck.length) {
    optionsToCheck[0].checked = true
    return
  }

  optionsToCheck.forEach((option) => {
    option.checked = true
    const resultChecked = updateOptionByCheckState2({
      option,
      optionsTreeMap,
      isIndependentNodes
    })
    option.checked = resultChecked
  })
}

export const updateOptionByCheckState2 = ({
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

  const resultCheckedState = updateFlattedOptionStateWithChildren2({
    checked,
    currentOption,
    optionsTreeMap
  })
  updateParentFlattedOptions2({
    childOption: currentOption,
    optionsTreeMap
  })

  return resultCheckedState
}

const updateFlattedOptionStateWithChildren2 = ({
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

  const childrenOptions = getChildrenOptions2({ id: currentOption.id, optionsTreeMap })

  const falseOrDisabledOrPartial = !checked || currentOption.disabled || currentOption.isPartialChecked

  if (falseOrDisabledOrPartial) {
    currentOption.checked = false
    currentOption.isPartialChecked = false
    checkUncheckAllChildren2({
      option: currentOption,
      children: childrenOptions,
      optionsTreeMap
    })

    return currentOption.checked
  }

  const canWeCheckAllChildren = !isSomeChildrenDisabled2({
    children: childrenOptions,
    optionsTreeMap
  })

  if (canWeCheckAllChildren) {
    currentOption.checked = true
    currentOption.isPartialChecked = false
    checkUncheckAllChildren2({
      option: currentOption,
      children: childrenOptions,
      optionsTreeMap
    })

    return currentOption.checked
  }

  const isAllDisabled = isAllChildrenDisabled2(childrenOptions)

  if (isAllDisabled) {
    currentOption.checked = false
    currentOption.isPartialChecked = false
    currentOption.disabled = true

    return currentOption.checked
  }

  currentOption.checked = false
  currentOption.isPartialChecked = true

  childrenOptions.forEach((options) => {
    updateFlattedOptionStateWithChildren2({
      checked,
      currentOption: options,
      optionsTreeMap
    })
  })

  return currentOption.checked
}

const updateParentFlattedOptions2 = ({
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

  updateParentOption2({ parentOption, optionsTreeMap })
  updateParentFlattedOptions2({
    childOption: parentOption,
    optionsTreeMap
  })
}

const updateParentOption2 = ({
  parentOption,
  optionsTreeMap
}: {
  parentOption: TreeItem
  optionsTreeMap: OptionsTreeMap
}) => {
  const children = getChildrenOptions2({ id: parentOption.id, optionsTreeMap })
  const isAllDisabled = isAllChildrenDisabled2(children)

  if (isAllDisabled) {
    parentOption.checked = false
    parentOption.isPartialChecked = false
    parentOption.disabled = true

    return
  }

  const isAllChecked = isAllChildrenChecked2(children)

  if (isAllChecked) {
    parentOption.checked = true
    parentOption.isPartialChecked = false

    return
  }

  const isSomeCheckedOrPartial = isSomeChildrenCheckedOrPartial2(children)

  if (isSomeCheckedOrPartial) {
    parentOption.checked = false
    parentOption.isPartialChecked = true

    return
  }

  parentOption.checked = false
  parentOption.isPartialChecked = false
}

const checkUncheckAllChildren2 = ({
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

    const subChildren = getChildrenOptions2({ id: option.id, optionsTreeMap })
    checkUncheckAllChildren2({
      option: { checked, disabled },
      children: subChildren,
      optionsTreeMap
    })
  })
}

const isSomeChildrenDisabled2 = ({
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

    const subChildren = getChildrenOptions2({ id: option.id, optionsTreeMap })

    return isSomeChildrenDisabled2({ children: subChildren, optionsTreeMap })
  })
}

// isAllDirectChildrenDisabled2
const isAllChildrenDisabled2 = (children: TreeItem[]) => {
  return children.every((option) => !!option.disabled)
}

// isAllDirectChildrenChecked2
const isAllChildrenChecked2 = (children: TreeItem[]) => {
  return children.every((option) => option.checked)
}

// isSomeDirectChildrenCheckedOrPartial2
const isSomeChildrenCheckedOrPartial2 = (children: TreeItem[]) => {
  return children.some((option) => option.checked || option.isPartialChecked)
}

const uncheckedAllFlattedOptions2 = (optionsTreeMap: OptionsTreeMap) => {
  optionsTreeMap.forEach((option) => {
    option.checked = false
    option.isPartialChecked = false
  })
}

export const updateOptionsByValue = ({
  newValue,
  flattedOptions,
  isSingleSelect,
  isIndependentNodes
}: {
  newValue: ValueOptionType[]
  flattedOptions: FlattedOptionType[]
  isSingleSelect: boolean
  isIndependentNodes: boolean
}) => {
  uncheckedAllFlattedOptions(flattedOptions)
  const optionsToCheck = flattedOptions.filter((option) => !option.disabled && newValue.some((id) => id === option.id))

  if (isSingleSelect && !!optionsToCheck.length) {
    optionsToCheck[0].checked = true

    return
  }

  optionsToCheck.forEach((option) => {
    option.checked = true
    // option.isPartialChecked = false
    const resultChecked = updateOptionByCheckState({
      option,
      flattedOptions,
      isIndependentNodes
    })
    option.checked = resultChecked
  })
}

export const updateOptionByCheckState = ({
  option: { id, checked },
  flattedOptions,
  isIndependentNodes
}: {
  option: Partial<FlattedOptionType>
  flattedOptions: FlattedOptionType[]
  isIndependentNodes: boolean
}) => {
  const currentOption = flattedOptions.find((option) => option.id === id)

  if (!currentOption) {
    return false
  }

  if (isIndependentNodes) {
    currentOption.checked = currentOption.disabled ? false : !!checked

    return currentOption.checked
  }

  const resultCheckedState = updateFlattedOptionStateWithChildren({
    checked: !!checked,
    currentOption,
    flattedOptions
  })
  updateParentFlattedOptions(currentOption, flattedOptions)

  return resultCheckedState
}

const updateFlattedOptionStateWithChildren = ({
  checked,
  currentOption,
  flattedOptions
}: {
  checked: boolean
  currentOption: FlattedOptionType
  flattedOptions: FlattedOptionType[]
}) => {
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
    checkUncheckAllChildren({
      option: currentOption,
      children: childrenOptions,
      flattedOptions
    })

    return currentOption.checked
  }

  const canWeCheckAllChildren = !isSomeChildrenDisabled(childrenOptions, flattedOptions)

  if (canWeCheckAllChildren) {
    currentOption.checked = true
    currentOption.isPartialChecked = false
    checkUncheckAllChildren({
      option: currentOption,
      children: childrenOptions,
      flattedOptions
    })

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
    updateFlattedOptionStateWithChildren({
      checked,
      currentOption: option,
      flattedOptions
    })
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

const checkUncheckAllChildren = ({
  option: { checked, disabled },
  children,
  flattedOptions
}: {
  option: Partial<FlattedOptionType>
  children: FlattedOptionType[]
  flattedOptions: FlattedOptionType[]
}) => {
  children.forEach((option) => {
    option.disabled = !!disabled || !!option.disabled
    option.checked = !!checked && !option.disabled
    option.isPartialChecked = false
    const subChildren = getChildrenOptions(option, flattedOptions)
    checkUncheckAllChildren({
      option: { checked, disabled },
      children: subChildren,
      flattedOptions
    })
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
