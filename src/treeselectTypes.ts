export type ValueOptionType = string | number

export type OptionType = {
  value: ValueOptionType
  name: string
  children: OptionType[]
}

export interface ITreeslect {
  parentHtmlContainer: HTMLElement
  value: ValueOptionType[]
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
  listSlotHtmlComponent: HTMLElement | null
  disabled: boolean
  emptyText: string
  staticList: boolean
  id: string
  isListOpened: boolean
  srcElement: HTMLElement | null
  mount: () => void
  updateValue: (newValue: ValueOptionType[]) => void
  destroy: () => void
  focus: () => void
  toggleOpenClose: () => void
}

export interface ITreeslectParams {
  parentHtmlContainer: HTMLElement
  value?: ValueOptionType[]
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
  listSlotHtmlComponent?: HTMLElement | null
  disabled?: boolean
  emptyText?: string
  staticList?: boolean
  id?: string
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
