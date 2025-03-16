import { type ValueOptionType, type FlattedOptionType } from '../../treeselectTypes'
import { TreeItem, type OptionsTreeMap } from '../listTypes'
import { getChildrenOptions, getChildrenOptions2 } from './listOptionsHelper'

export const hideShowChildrenOptions2 = (
  optionsTreeMap: OptionsTreeMap,
  { id, isClosed }: Pick<FlattedOptionType, 'id' | 'isClosed'>
) => {
  const allChildrenOptions = getChildrenOptions2({ id, optionsTreeMap })

  allChildrenOptions.forEach((option) => {
    option.hidden = isClosed ?? false

    if (option.isGroup && !option.isClosed) {
      hideShowChildrenOptions2(optionsTreeMap, { id: option.id, isClosed })
    }
  })
}

export const expandSelectedItems2 = (optionsTreeMap: OptionsTreeMap) => {
  optionsTreeMap.forEach((option) => {
    if (option.isGroup && !option.disabled && (option.checked || option.isPartialChecked)) {
      option.isClosed = false
      hideShowChildrenOptions2(optionsTreeMap, option)
    }
  })
}

export const updateVisibleBySearchFlattedOptions2 = (optionsTreeMap: OptionsTreeMap, searchText: string) => {
  const optionsWithSearchText = getSearchedFlattedOptions2(optionsTreeMap, searchText)

  optionsTreeMap.forEach((option) => {
    const isVisible = optionsWithSearchText.some(({ id }) => id === option.id)

    if (isVisible) {
      if (option.isGroup) {
        option.isClosed = false
        hideShowChildrenOptions2(optionsTreeMap, option)
      }

      option.hidden = false
    } else {
      option.hidden = true
    }
  })
}

const getSearchedFlattedOptions2 = (optionsTreeMap: OptionsTreeMap, searchText: string) => {
  const searchedItems: TreeItem[] = []

  optionsTreeMap.forEach((option) => {
    const isSearched = option.name.toLowerCase().includes(searchText.toLowerCase())

    if (isSearched) {
      searchedItems.push(option)

      if (option.isGroup) {
        const flattedChildren = getAllNestedChildren2(option.id, optionsTreeMap)
        searchedItems.push(...flattedChildren)
      }

      if (option.childOf) {
        const flattedParents = getAllNestedParents2(option.childOf, optionsTreeMap)
        searchedItems.push(...flattedParents)
      }
    }
  })

  return searchedItems
}

const getAllNestedChildren2 = (id: ValueOptionType, optionsTreeMap: OptionsTreeMap) => {
  const childrenIds = optionsTreeMap.get(id)?.children ?? []

  return childrenIds.reduce<TreeItem[]>((acc, curr) => {
    const child = optionsTreeMap.get(curr) ?? null

    if (child !== null) {
      acc.push(child)
      const subChildren = getAllNestedChildren2(child.id, optionsTreeMap)
      acc.push(...subChildren)
    }

    return acc
  }, [])
}

const getAllNestedParents2 = (childOf: ValueOptionType, optionsTreeMap: OptionsTreeMap): TreeItem[] => {
  const parentNode = optionsTreeMap.get(childOf) ?? null

  if (parentNode === null) {
    return []
  }

  const upperParents = getAllNestedParents2(parentNode.childOf, optionsTreeMap)

  return [parentNode, ...upperParents]
}

export const hideShowChildrenOptions = (
  flattedOptions: FlattedOptionType[],
  { id, isClosed }: Partial<FlattedOptionType>
) => {
  const allChildrenOptions = getChildrenOptions({ id }, flattedOptions)

  allChildrenOptions.forEach((option) => {
    option.hidden = isClosed ?? false

    if (option.isGroup && !option.isClosed) {
      hideShowChildrenOptions(flattedOptions, { id: option.id, isClosed })
    }
  })
}

export const expandSelectedItems = (flattedOptions: FlattedOptionType[]) => {
  flattedOptions
    .filter((option) => option.isGroup && !option.disabled && (option.checked || option.isPartialChecked))
    .forEach((option) => {
      option.isClosed = false
      hideShowChildrenOptions(flattedOptions, option)
    })
}

export const updateVisibleBySearchFlattedOptions = (flattedOptions: FlattedOptionType[], searchText: string) => {
  const optionsWithSearchText = getSearchedFlattedOptions(flattedOptions, searchText)

  flattedOptions.forEach((option) => {
    const isVisible = optionsWithSearchText.some(({ id }) => id === option.id)

    if (isVisible) {
      if (option.isGroup) {
        option.isClosed = false
        hideShowChildrenOptions(flattedOptions, option)
      }

      option.hidden = false
    } else {
      option.hidden = true
    }
  })
}

const getSearchedFlattedOptions = (flattedOptions: FlattedOptionType[], searchText: string) => {
  return flattedOptions.reduce((acc, curr) => {
    const isSearched = curr.name.toLowerCase().includes(searchText.toLowerCase())

    if (isSearched) {
      acc.push(curr)

      if (curr.isGroup) {
        const flattedChildren = getAllNestedChildren(curr.id, flattedOptions)
        acc.push(...flattedChildren)
      }

      if (curr.childOf) {
        const flattedParents = getAllNestedParents(curr.childOf, flattedOptions)
        acc.push(...flattedParents)
      }
    }

    return acc
  }, [] as FlattedOptionType[])
}

const getAllNestedChildren = (childOf: ValueOptionType, flattedOption: FlattedOptionType[]) => {
  return flattedOption.reduce((acc, curr) => {
    if (curr.childOf === childOf) {
      acc.push(curr)

      if (curr.isGroup) {
        acc.push(...getAllNestedChildren(curr.id, flattedOption))
      }
    }

    return acc
  }, [] as FlattedOptionType[])
}

const getAllNestedParents = (childOf: ValueOptionType, flatOptions: FlattedOptionType[]) => {
  return flatOptions.reduce((acc, curr) => {
    if (curr.id === childOf) {
      acc.push(curr)

      if (curr.childOf) {
        acc.push(...getAllNestedParents(curr.childOf, flatOptions))
      }
    }

    return acc
  }, [] as FlattedOptionType[])
}
