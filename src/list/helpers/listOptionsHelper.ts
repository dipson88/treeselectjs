import { type OptionType, type ValueOptionType, type FlattedOptionType } from '../../treeselectTypes'
import { TreeItem, type OptionsTreeMap } from '../listTypes'
import { updateOptionByCheckState, updateOptionByCheckState2 } from './listCheckStateHelper'

export const getOptionsTreeMap = ({
  srcElement,
  options,
  openLevel,
  isIndependentNodes
}: {
  srcElement: HTMLElement
  options: OptionType[]
  openLevel: number
  isIndependentNodes: boolean
}) => {
  const defaultParams = { level: 0, groupId: '' }
  const optionsTreeMap: OptionsTreeMap = new Map()

  getTreeOptions({
    srcElement,
    optionsTreeMap,
    options,
    openLevel,
    groupId: defaultParams.groupId,
    level: defaultParams.level
  })

  getAdjustedFlattenOptionsUpdate2({ optionsTreeMap, isIndependentNodes })

  return optionsTreeMap
}

const getTreeOptions = ({
  srcElement,
  optionsTreeMap,
  options,
  openLevel,
  groupId,
  level
}: {
  srcElement: HTMLElement
  optionsTreeMap: OptionsTreeMap
  options: OptionType[]
  openLevel: number
  groupId: ValueOptionType
  level: number
}) => {
  options.forEach((option) => {
    const isGroup = (option.children?.length ?? 0) > 0
    const isClosed = level >= openLevel && isGroup
    const hidden = level > openLevel

    const children = option.children?.map((child) => child.value) ?? []
    const checkboxHtmlElement = srcElement.querySelector(`[input-id="${option.value}"]`) as HTMLInputElement
    const itemHtmlElement = checkboxHtmlElement.parentNode?.parentNode as HTMLElement
    const arrowItemHtmlElement = itemHtmlElement.querySelector('.treeselect-list__item-icon') as HTMLElement

    optionsTreeMap.set(option.value, {
      id: option.value,
      name: option.name,
      childOf: groupId,
      isGroup,
      checked: false,
      isPartialChecked: false,
      level,
      isClosed,
      hidden,
      disabled: option.disabled ?? false,
      children,
      checkboxHtmlElement,
      itemHtmlElement,
      arrowItemHtmlElement
    })

    if (isGroup) {
      getTreeOptions({
        srcElement,
        optionsTreeMap,
        options: option.children,
        openLevel,
        groupId: option.value,
        level: level + 1
      })
    }
  })
}

export const getFlattedOptionByInputId2 = (inputId: string | null, optionsTreeMap: OptionsTreeMap) => {
  if (inputId === null) {
    return null
  }

  return optionsTreeMap.get(inputId) ?? optionsTreeMap.get(parseInt(inputId)) ?? null
}

// getDirectChildrenOptions2
export const getChildrenOptions2 = ({
  id,
  optionsTreeMap
}: {
  id: ValueOptionType
  optionsTreeMap: OptionsTreeMap
}) => {
  const option = optionsTreeMap.get(id) ?? null

  if (option === null) {
    return []
  }

  return option.children.reduce<TreeItem[]>((acc, curr) => {
    const child = optionsTreeMap.get(curr) ?? null

    if (child !== null) {
      acc.push(child)
    }

    return acc
  }, [])
}

export const getCheckedOptions2 = (optionsTreeMap: OptionsTreeMap) => {
  const { ungroupedNodes, allGroupedNodes, allNodes } = Array.from(optionsTreeMap.values()).reduce(
    (acc, curr) => {
      if (!curr.checked) {
        return acc
      }

      acc.allNodes.push(curr)

      if (curr.isGroup) {
        acc.allGroupedNodes.push(curr)
      } else {
        acc.ungroupedNodes.push(curr)
      }

      return acc
    },
    {
      ungroupedNodes: [] as TreeItem[],
      allGroupedNodes: [] as TreeItem[],
      allNodes: [] as TreeItem[]
    }
  )

  const groupedNodes = allNodes.filter((node) => !allGroupedNodes.some(({ id }) => id === node.childOf))

  return { ungroupedNodes, groupedNodes, allNodes }
}

const getAdjustedFlattenOptionsUpdate2 = ({
  optionsTreeMap,
  isIndependentNodes
}: {
  optionsTreeMap: OptionsTreeMap
  isIndependentNodes: boolean
}) => {
  // Disabled update
  const disabledNodes = Array.from(optionsTreeMap.values()).filter((option) => !!option.disabled)
  disabledNodes.forEach(({ id }) =>
    updateOptionByCheckState2({
      option: { id, checked: false },
      optionsTreeMap,
      isIndependentNodes
    })
  )
}

export const getFlattedOptions = ({
  options,
  openLevel,
  isIndependentNodes
}: {
  options: OptionType[]
  openLevel: number
  isIndependentNodes: boolean
}) => {
  const defaultParams = { level: 0, groupId: '' }
  const flattedOptions = getInitFlattedOptions({
    options,
    openLevel,
    groupId: defaultParams.groupId,
    level: defaultParams.level
  })

  const adjustedFlattedOptions = getAdjustedFlattenOptionsUpdate(flattedOptions, isIndependentNodes)

  return adjustedFlattedOptions
}

const getInitFlattedOptions = ({
  options,
  openLevel,
  groupId,
  level
}: {
  options: OptionType[]
  openLevel: number
  groupId: ValueOptionType
  level: number
}) => {
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
      hidden,
      disabled: curr.disabled ?? false
    })

    if (isGroup) {
      const children = getInitFlattedOptions({
        options: curr.children,
        openLevel,
        groupId: curr.value,
        level: level + 1
      })
      acc.push(...children)
    }

    return acc
  }, [] as FlattedOptionType[])
}

export const getFlattedOptionByInputId = (inputId: string | null, flattedOptions: FlattedOptionType[]) => {
  return flattedOptions.find((fo) => fo.id.toString() === inputId)
}

export const getChildrenOptions = ({ id }: Partial<FlattedOptionType>, flattedOptions: FlattedOptionType[]) => {
  return flattedOptions.filter((option) => option.childOf === id)
}

export const getCheckedOptions = (flattedOptions: FlattedOptionType[]) => {
  const { ungroupedNodes, allGroupedNodes, allNodes } = flattedOptions.reduce(
    (acc, curr) => {
      if (!curr.checked) {
        return acc
      }

      acc.allNodes.push(curr)

      if (curr.isGroup) {
        acc.allGroupedNodes.push(curr)
      } else {
        acc.ungroupedNodes.push(curr)
      }

      return acc
    },
    {
      ungroupedNodes: [] as FlattedOptionType[],
      allGroupedNodes: [] as FlattedOptionType[],
      allNodes: [] as FlattedOptionType[]
    }
  )

  const groupedNodes = allNodes.filter((node) => !allGroupedNodes.some(({ id }) => id === node.childOf))

  return { ungroupedNodes, groupedNodes, allNodes }
}

const getAdjustedFlattenOptionsUpdate = (flattedOptions: FlattedOptionType[], isIndependentNodes: boolean) => {
  // Disabled update
  const disabledNodes = flattedOptions.filter((option) => !!option.disabled)
  disabledNodes.forEach(({ id }) =>
    updateOptionByCheckState({
      option: { id, checked: false },
      flattedOptions,
      isIndependentNodes
    })
  )
  // TODO etc updates

  return flattedOptions
}
