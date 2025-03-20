import { type ValueOptionType } from '../../treeselectTypes'
import { type TreeItem, type OptionsTreeMap } from '../listTypes'
import { getDirectChildrenOptions } from './listOptionsHelper'

export const hideShowChildrenOptions = (
  optionsTreeMap: OptionsTreeMap,
  { id, isClosed }: Pick<TreeItem, 'id' | 'isClosed'>
) => {
  const allChildrenOptions = getDirectChildrenOptions({ id, optionsTreeMap })

  allChildrenOptions.forEach((option) => {
    option.hidden = isClosed ?? false

    if (option.isGroup && !option.isClosed) {
      hideShowChildrenOptions(optionsTreeMap, { id: option.id, isClosed })
    }
  })
}

export const expandSelectedItems = (optionsTreeMap: OptionsTreeMap) => {
  optionsTreeMap.forEach((option) => {
    if (option.isGroup && !option.disabled && (option.checked || option.isPartialChecked)) {
      option.isClosed = false
      hideShowChildrenOptions(optionsTreeMap, option)
    }
  })
}

export const updateVisibleBySearchTreeItemOptions = (optionsTreeMap: OptionsTreeMap, searchText: string) => {
  // TODO: Change
  const optionsWithSearchText = getSearchedTreeItemOptions(optionsTreeMap, searchText)

  optionsTreeMap.forEach((option) => {
    const isVisible = optionsWithSearchText.some(({ id }) => id === option.id)

    if (isVisible) {
      if (option.isGroup) {
        option.isClosed = false
        hideShowChildrenOptions(optionsTreeMap, option)
      }

      option.hidden = false
    } else {
      option.hidden = true
    }
  })
}

const getSearchedTreeItemOptions = (optionsTreeMap: OptionsTreeMap, searchText: string) => {
  const searchedItems: TreeItem[] = []

  optionsTreeMap.forEach((option) => {
    const isSearched = option.name.toLowerCase().includes(searchText.toLowerCase())

    if (isSearched) {
      searchedItems.push(option)

      if (option.isGroup) {
        const treeItemChildren = getAllNestedChildren(option.id, optionsTreeMap)
        searchedItems.push(...treeItemChildren)
      }

      if (option.childOf) {
        const treeItemParents = getAllNestedParents(option.childOf, optionsTreeMap)
        searchedItems.push(...treeItemParents)
      }
    }
  })

  return searchedItems
}

const getAllNestedChildren = (id: ValueOptionType, optionsTreeMap: OptionsTreeMap) => {
  const childrenIds = optionsTreeMap.get(id)?.children ?? []

  return childrenIds.reduce<TreeItem[]>((acc, curr) => {
    const child = optionsTreeMap.get(curr) ?? null

    if (child !== null) {
      acc.push(child)
      const subChildren = getAllNestedChildren(child.id, optionsTreeMap)
      acc.push(...subChildren)
    }

    return acc
  }, [])
}

const getAllNestedParents = (childOf: ValueOptionType, optionsTreeMap: OptionsTreeMap): TreeItem[] => {
  const parentNode = optionsTreeMap.get(childOf) ?? null

  if (parentNode === null) {
    return []
  }

  const upperParents = getAllNestedParents(parentNode.childOf, optionsTreeMap)

  return [parentNode, ...upperParents]
}
