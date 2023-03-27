import { ValueOptionType, FlattedOptionType } from '../../treeselectTypes'
import { getChildrenOptions } from './listOptionsHelper'

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
