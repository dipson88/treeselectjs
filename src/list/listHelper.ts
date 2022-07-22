import { OptionType, ValueOptionType, FlattedOptionType } from '../treeselectTypes'

const getFlattedOptions = (
  options: OptionType[],
  openLevel: number,
  groupId: ValueOptionType = '',
  level: number = 0
) => {
  return options.reduce((acc, curr) => {
    const isGroup = !!curr.children?.length
    const isClosed = level >= openLevel && isGroup
    const hidden = level > openLevel
    acc.push({
      id: curr.value,
      name: curr.name,
      childOf: groupId,
      isGroup,
      checked: false,
      isPartialChecked: false,
      level,
      isClosed,
      hidden
    })

    if (isGroup) {
      const children = getFlattedOptions(curr.children, openLevel, curr.value, level + 1)
      acc.push(...children)
    }

    return acc
  }, [] as FlattedOptionType[])
}

const checkAllChildrenOptions = ({ id, checked }: Partial<FlattedOptionType>, flattedOptions: FlattedOptionType[]) => {
  flattedOptions.forEach((option) => {
    if (option.childOf === id) {
      option.checked = checked ?? true
      option.isPartialChecked = false

      if (option.isGroup) {
        checkAllChildrenOptions(option, flattedOptions)
      }
    }
  })
}

const checkAllParentOptions = (childOf: ValueOptionType, flattedOptions: FlattedOptionType[]) => {
  const parent = flattedOptions.find((option) => option.id === childOf)
  const allParentChildren = flattedOptions.filter((option) => option.childOf === parent?.id)

  if (!parent) {
    return
  }

  const isAllChecked = allParentChildren.every((option) => option.checked)
  const isPartialChecked =
    allParentChildren.some((option) => option.isPartialChecked || option.checked) && !isAllChecked
  const isUnchecked = !isAllChecked && !isPartialChecked

  if (isAllChecked) {
    parent.checked = true
    parent.isPartialChecked = false
  }

  if (isPartialChecked) {
    parent.checked = false
    parent.isPartialChecked = true
  }

  if (isUnchecked) {
    parent.checked = false
    parent.isPartialChecked = false
  }

  if (parent.childOf) {
    checkAllParentOptions(parent.childOf, flattedOptions)
  }
}

const updateCheckStateFlattedOption = (
  { id, isGroup, childOf, checked }: Partial<FlattedOptionType>,
  flattedOptions: FlattedOptionType[]
) => {
  if (isGroup) {
    checkAllChildrenOptions({ id, checked }, flattedOptions)
  }

  if (childOf) {
    checkAllParentOptions(childOf, flattedOptions)
  }
}

const getAllFlattedChildren = (childOf: ValueOptionType, flattedOption: FlattedOptionType[]) => {
  return flattedOption.reduce((acc, curr) => {
    if (curr.childOf === childOf) {
      acc.push(curr)

      if (curr.isGroup) {
        acc.push(...getAllFlattedChildren(curr.id, flattedOption))
      }
    }

    return acc
  }, [] as FlattedOptionType[])
}

const getAllFlattenParents = (childOf: ValueOptionType, flatOptions: FlattedOptionType[]) => {
  return flatOptions.reduce((acc, curr) => {
    if (curr.id === childOf) {
      acc.push(curr)

      if (curr.childOf) {
        acc.push(...getAllFlattenParents(curr.childOf, flatOptions))
      }
    }

    return acc
  }, [] as FlattedOptionType[])
}

const getGroupedCheckedFlattedOptions = (flattedOptions: FlattedOptionType[]) => {
  const { onlyGroupsIds, allItems } = flattedOptions.reduce(
    (acc, curr) => {
      if (!curr.checked) {
        return acc
      }

      if (curr.isGroup) {
        acc.onlyGroupsIds.push(curr.id)
      }

      acc.allItems.push(curr)

      return acc
    },
    {
      onlyGroupsIds: [] as ValueOptionType[],
      allItems: [] as FlattedOptionType[]
    }
  )

  return allItems.filter((item) => !onlyGroupsIds.some((id) => id === item.childOf))
}

const getUnGroupedCheckedFlattedOptions = (flattedOptions: FlattedOptionType[]) => {
  return flattedOptions.filter((option) => option.checked && !option.isGroup)
}

const getSearchedFlattedOptions = (flattedOptions: FlattedOptionType[], searchText: string) => {
  return flattedOptions.reduce((acc, curr) => {
    const isSearched = curr.name.toLowerCase().includes(searchText.toLowerCase())

    if (isSearched) {
      acc.push(curr)

      if (curr.isGroup) {
        const flattedChildren = getAllFlattedChildren(curr.id, flattedOptions)
        acc.push(...flattedChildren)
      }

      if (curr.childOf) {
        const flattedParents = getAllFlattenParents(curr.childOf, flattedOptions)
        acc.push(...flattedParents)
      }
    }

    return acc
  }, [] as FlattedOptionType[])
}

const hideShowChildrenFlattedOptions = (
  flattedOptions: FlattedOptionType[],
  { id, isClosed }: Partial<FlattedOptionType>
) => {
  const allChildrenOptions = flattedOptions.filter((fo) => fo.childOf === id)

  allChildrenOptions.forEach((option) => {
    option.hidden = isClosed ?? false

    if (option.isGroup && !option.isClosed) {
      hideShowChildrenFlattedOptions(flattedOptions, { id: option.id, isClosed })
    }
  })
}

const updateVisibleBySearchFlattedOptions = (flattedOptions: FlattedOptionType[], searchText: string) => {
  const allOptions = getSearchedFlattedOptions(flattedOptions, searchText)

  flattedOptions.forEach((option) => {
    const isVisible = allOptions.some((ao) => ao.id === option.id)

    if (isVisible) {
      if (option.isGroup) {
        option.isClosed = false
        hideShowChildrenFlattedOptions(flattedOptions, option)
      }

      option.hidden = false
    } else {
      option.hidden = true
    }
  })
}

const resetCheckedState = (flattedOptions: FlattedOptionType[]) => {
  flattedOptions.forEach((option) => {
    option.checked = false
    option.isPartialChecked = false
  })
}

const updateFlattedOptionsByValue = (newValue: ValueOptionType[], flattedOptions: FlattedOptionType[]) => {
  resetCheckedState(flattedOptions)

  const toCheck = flattedOptions.filter((option) => newValue.some((id) => id === option.id))
  toCheck.forEach((option) => {
    option.checked = true
    option.isPartialChecked = false
    updateCheckStateFlattedOption(option, flattedOptions)
  })
}

export {
  getFlattedOptions,
  updateCheckStateFlattedOption,
  getGroupedCheckedFlattedOptions,
  getUnGroupedCheckedFlattedOptions,
  hideShowChildrenFlattedOptions,
  updateVisibleBySearchFlattedOptions,
  updateFlattedOptionsByValue
}
