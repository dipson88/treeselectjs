export type InputValueType = { id: string; name: string }[]

export interface ITreeselectInputParams {
  value: InputValueType
  showTags: boolean
  tagsCountText: string
  clearable: boolean
  isAlwaysOpened: boolean
  searchable: boolean
  placeholder: string
  disabled: boolean
}

export interface ITreeselectInput {
  value: InputValueType
  showTags: boolean
  tagsCountText: string
  clearable: boolean
  isAlwaysOpened: boolean
  searchable: boolean
  placeholder: string
  disabled: boolean
  isOpened: boolean
  searchText: string
  srcElement: HTMLElement | Element
  focus: () => void
  blur: () => void
  updateValue: (newValue: InputValueType) => void
  removeItem: (id: string) => void
  clear: () => void
  openClose: () => void
}
