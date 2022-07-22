import { FlattedOptionType } from "../treeselectTypes";

export interface ITreeselectInputParams {
  value: FlattedOptionType[]
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
  updateValue: (newValue: FlattedOptionType[]) => void
  removeItem: (id: string) => void
  clear: () => void
  openClose: () => void
}
