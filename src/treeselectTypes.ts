export type OptionType = {
  value: string
  name: string
  children: OptionType[]
}

export type FlattedOptionType = {
  id: string
  name: string
  childOf: string
  isGroup: boolean
  checked: boolean
  isPartialChecked: boolean
  level: number
  isClosed: boolean
  hidden: boolean
}

export type HTMLElementOrNA = HTMLElement | Element | null

export interface ITreeslect {
  parentHtmlContainer: HTMLElement
  value: string[]
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
  listSlotHtmlComponent: HTMLElementOrNA
  disabled: boolean
  emptyText: string
  staticList: boolean
  isListOpened: boolean
  srcElement: HTMLElementOrNA
  mount: () => void
  updateValue: (newValue: string[]) => void
  destroy: () => void
  focus: () => void
  toggleOpenClose: () => void
}

export interface ITreeslectParams {
  parentHtmlContainer: HTMLElement
  value?: string[]
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
  listSlotHtmlComponent?: HTMLElementOrNA
  disabled?: boolean
  emptyText?: string
  staticList?: boolean
}
