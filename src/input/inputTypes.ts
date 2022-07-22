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
  id: string
}

export interface ITreeselectInput extends ITreeselectInputParams {
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
