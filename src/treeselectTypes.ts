export type OptionType = {
  value: string
  name: string
  children: OptionType[]
}

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
  listSlotHtmlComponent: HTMLElement | null
  disabled: boolean
  emptyText: string
  staticList: boolean
  id: string
  isListOpened: boolean
  srcElement: HTMLElement | null
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
  listSlotHtmlComponent?: HTMLElement | null
  disabled?: boolean
  emptyText?: string
  staticList?: boolean
  id?: string
}
