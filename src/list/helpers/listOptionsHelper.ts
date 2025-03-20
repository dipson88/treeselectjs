import { type OptionType, type ValueOptionType } from '../../treeselectTypes'
import { TreeItem, type OptionsTreeMap } from '../listTypes'
import { updateOptionByCheckState } from './listCheckStateHelper'

export const getOptionsTreeMap = ({
  options,
  openLevel,
  isIndependentNodes
}: {
  options: OptionType[]
  openLevel: number
  isIndependentNodes: boolean
}) => {
  const defaultParams = { level: 0, groupId: '' }
  const optionsTreeMap: OptionsTreeMap = new Map()

  getTreeOptions({
    optionsTreeMap,
    options,
    openLevel,
    groupId: defaultParams.groupId,
    level: defaultParams.level
  })

  adjustTreeItemOptions({ optionsTreeMap, isIndependentNodes })

  return optionsTreeMap
}

const getTreeOptions = ({
  optionsTreeMap,
  options,
  openLevel,
  groupId,
  level
}: {
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
    const optionId = option.value

    if (optionsTreeMap.has(optionId)) {
      console.error(
        `Validation: You have duplicated option value: ${optionId}! You should use unique values. Duplicates will lead to unexpected behavior.`
      )
    }

    optionsTreeMap.set(optionId, {
      id: optionId,
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
      // Html elements will be added during their creation
      checkboxHtmlElement: null,
      itemHtmlElement: null,
      arrowItemHtmlElement: null,
      checkboxIconHtmlElement: null
    })

    if (isGroup) {
      getTreeOptions({
        optionsTreeMap,
        options: option.children,
        openLevel,
        groupId: optionId,
        level: level + 1
      })
    }
  })
}

export const getTreeItemOptionByInputId = (inputId: string | null, optionsTreeMap: OptionsTreeMap) => {
  if (inputId === null) {
    return null
  }

  return optionsTreeMap.get(inputId) ?? optionsTreeMap.get(parseInt(inputId)) ?? null
}

export const getDirectChildrenOptions = ({
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

export const getCheckedOptions = (optionsTreeMap: OptionsTreeMap) => {
  const ungroupedNodes: TreeItem[] = []
  const allGroupedNodes: TreeItem[] = []
  const allNodes: TreeItem[] = []

  optionsTreeMap.forEach((option) => {
    if (!option.checked) {
      return
    }

    allNodes.push(option)

    if (option.isGroup) {
      allGroupedNodes.push(option)
    } else {
      ungroupedNodes.push(option)
    }
  })

  const groupedNodes = allNodes.filter((node) => !allGroupedNodes.some(({ id }) => id === node.childOf))

  return { ungroupedNodes, groupedNodes, allNodes }
}

const adjustTreeItemOptions = ({
  optionsTreeMap,
  isIndependentNodes
}: {
  optionsTreeMap: OptionsTreeMap
  isIndependentNodes: boolean
}) => {
  // Disabled update
  const disabledNodes: TreeItem[] = []

  optionsTreeMap.forEach((option) => {
    if (option.disabled) {
      disabledNodes.push(option)
    }
  })

  disabledNodes.forEach(({ id }) =>
    updateOptionByCheckState({
      option: { id, checked: false },
      optionsTreeMap,
      isIndependentNodes
    })
  )
}
