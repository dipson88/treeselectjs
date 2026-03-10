import type { ValueOptionType } from '../../treeselectTypes'
import type { TreeItem, OptionsTreeMap, BeforeSearchStateMap } from '../listTypes'
import { getDirectChildrenOptions } from './listOptionsHelper'

export const hideShowChildrenOptions = (
  optionsTreeMap: OptionsTreeMap,
  { id, isClosed }: Pick<TreeItem, 'id' | 'isClosed'>,
) => {
  const allChildrenOptions = getDirectChildrenOptions({ id, optionsTreeMap })

  allChildrenOptions.forEach((option) => {
    option.hidden = isClosed ?? false

    if (option.isGroup && !option.isClosed) {
      hideShowChildrenOptions(optionsTreeMap, { id: option.id, isClosed })
    }
  })
}

export const expandSelectedItems = (optionsTreeMap: OptionsTreeMap, isSingleSelect: boolean) => {
  if (isSingleSelect) {
    expandSingleSelect(optionsTreeMap)
    return
  }

  optionsTreeMap.forEach((option) => {
    if (option.checked) {
      expandAllParents(option.childOf, optionsTreeMap)
    }

    if (option.isGroup && !option.disabled && (option.checked || option.isPartialChecked)) {
      option.isClosed = false
      hideShowChildrenOptions(optionsTreeMap, option)
    }
  })
}

const expandSingleSelect = (optionsTreeMap: OptionsTreeMap) => {
  let checkedOption: TreeItem | null = null
  for (const [_, option] of optionsTreeMap) {
    if (option.checked && !option.disabled) {
      checkedOption = option
      break
    }
  }

  if (!checkedOption) {
    return
  }

  if (checkedOption.isGroup) {
    checkedOption.isClosed = false
    hideShowChildrenOptions(optionsTreeMap, checkedOption)
  }

  expandAllParents(checkedOption.childOf, optionsTreeMap)
}

const expandAllParents = (childOf: ValueOptionType, optionsTreeMap: OptionsTreeMap) => {
  const parentNode = optionsTreeMap.get(childOf) ?? null

  if (parentNode) {
    parentNode.isClosed = false
    hideShowChildrenOptions(optionsTreeMap, parentNode)
    expandAllParents(parentNode.childOf, optionsTreeMap)
  }
}

export const updateVisibleBySearchTreeItemOptions = (optionsTreeMap: OptionsTreeMap, searchText: string) => {
  optionsTreeMap.forEach((option) => {
    const isSearched = option.name.toLowerCase().includes(searchText.toLowerCase())

    if (isSearched) {
      if (option.isGroup) {
        option.isClosed = true
      }

      if (option.childOf) {
        openShowAllParents(option.childOf, optionsTreeMap)
      }
    }

    option.hidden = !isSearched
  })
}

const openShowAllParents = (childOf: ValueOptionType, optionsTreeMap: OptionsTreeMap) => {
  const parentNode = optionsTreeMap.get(childOf) ?? null

  if (parentNode) {
    parentNode.hidden = false
    parentNode.isClosed = false
    openShowAllParents(parentNode.childOf, optionsTreeMap)
  }
}

export const updateOptionsMapBySearchState = ({
  optionsTreeMap,
  beforeSearchStateMap,
}: {
  optionsTreeMap: OptionsTreeMap
  beforeSearchStateMap: BeforeSearchStateMap
}) => {
  optionsTreeMap.forEach((option) => {
    const beforeSearchState = beforeSearchStateMap.get(option.id)

    if (beforeSearchState) {
      option.hidden = beforeSearchState.hidden
      option.isClosed = beforeSearchState.isClosed
    }
  })

  beforeSearchStateMap.clear()
}

export const updateBeforeSearchStateMap = ({
  optionsTreeMap,
  beforeSearchStateMap,
}: {
  optionsTreeMap: OptionsTreeMap
  beforeSearchStateMap: BeforeSearchStateMap
}) => {
  beforeSearchStateMap.clear()

  optionsTreeMap.forEach((option) => {
    beforeSearchStateMap.set(option.id, {
      hidden: option.hidden,
      isClosed: option.isClosed,
    })
  })
}

export const createIntersectionScrollObserver = (srcElementList: HTMLElement) =>
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('treeselect-list__item--scroll-not-visible', !entry.isIntersecting)
      })
    },
    { root: srcElementList, threshold: 0.5 },
  )
