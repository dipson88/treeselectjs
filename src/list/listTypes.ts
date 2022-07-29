import { ValueOptionType, OptionType, FlattedOptionType, IconsType, SelectedNodesType } from '../treeselectTypes'

export interface ITreeslectListParams {
  options: OptionType[]
  value: ValueOptionType[]
  openLevel: number
  listSlotHtmlComponent: HTMLElement | null
  emptyText: string
  iconElements: IconsType
  inputCallback: (value: SelectedNodesType) => void
  arrowClickCallback: () => void
  mouseupCallback: () => void
}

export interface ITreeselectList extends ITreeslectListParams {
  searchText: string
  flattedOptions: FlattedOptionType[]
  flattedOptionsBeforeSearch: FlattedOptionType[]
  selectedNodes: SelectedNodesType
  srcElement: HTMLElement
  updateValue: (value: ValueOptionType[]) => void
  updateSearchValue: (searchText: string) => void
  callKeyAction: (key: string) => void
  focusFirstListElement: () => void
}
