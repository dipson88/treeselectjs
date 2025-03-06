import { type OptionType, type ValueOptionType, type FlattedOptionType } from '../../treeselectTypes'
import { updateOptionByCheckState } from './listCheckStateHelper'

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
