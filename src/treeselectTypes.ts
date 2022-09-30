export type ValueOptionType = string | number

export type OptionType = {
  value: ValueOptionType
  name: string
  children: OptionType[]
}

export type DirectionType = 'auto' | 'top' | 'bottom'

export interface ITreeselect {
  parentHtmlContainer: HTMLElement
  value: ValueOptionType[] | ValueOptionType
  options: OptionType[]
  openLevel: number
  appendToBody: boolean
  alwaysOpen: boolean
  showTags: boolean
  tagsCountText: string
  clearable: boolean
  searchable: boolean
  placeholder: string
  grouped: boolean
  isGroupedValue: boolean
  listSlotHtmlComponent: HTMLElement | null
  disabled: boolean
  emptyText: string
  staticList: boolean
  id: string
  isSingleSelect: boolean
  showCount: boolean
  disabledBranchNode: boolean
  direction: DirectionType
  iconElements: IconsType
  groupedValue: ValueOptionType[]
  isListOpened: boolean
  srcElement: HTMLElement | null
  inputCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined
  openCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined
  closeCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined
  mount: () => void
  updateValue: (newValue: ValueOptionType[] | ValueOptionType) => void
  destroy: () => void
  focus: () => void
  toggleOpenClose: () => void
}

export interface ITreeselectParams {
  parentHtmlContainer: HTMLElement
  value?: ValueOptionType[] | ValueOptionType
  options?: OptionType[]
  openLevel?: number
  appendToBody?: boolean
  alwaysOpen?: boolean
  showTags?: boolean
  tagsCountText?: string
  clearable?: boolean
  searchable?: boolean
  placeholder?: string
  grouped?: boolean
  isGroupedValue?: boolean
  listSlotHtmlComponent?: HTMLElement | null
  disabled?: boolean
  emptyText?: string
  staticList?: boolean
  id?: string
  isSingleSelect?: boolean
  showCount?: boolean
  disabledBranchNode?: boolean
  direction?: DirectionType
  iconElements?: Partial<IconsType>
  inputCallback?: (value: ValueOptionType[] | ValueOptionType) => void
  openCallback?: (value: ValueOptionType[] | ValueOptionType) => void
  closeCallback?: (value: ValueOptionType[] | ValueOptionType) => void
}

export type FlattedOptionType = {
  id: string | number
  name: string
  childOf: string | number
  isGroup: boolean
  checked: boolean
  isPartialChecked: boolean
  level: number
  isClosed: boolean
  hidden: boolean
}

export type IconsType = {
  arrowUp: string | HTMLElement
  arrowDown: string | HTMLElement
  arrowRight: string | HTMLElement
  attention: string | HTMLElement
  clear: string | HTMLElement
  cross: string | HTMLElement
  check: string | HTMLElement
  partialCheck: string | HTMLElement
}

export type SelectedNodesType = {
  nodes: FlattedOptionType[]
  groupedNodes: FlattedOptionType[]
}
