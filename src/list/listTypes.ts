import { ValueOptionType, OptionType, FlattedOptionType, IconsType } from '../treeselectTypes'

export type SelectedNodesType = {
  nodes: FlattedOptionType[]
  groupedNodes: FlattedOptionType[]
}

export interface ITreeslectListParams {
  options: OptionType[]
  value: ValueOptionType[]
  openLevel: number
  listSlotHtmlComponent: HTMLElement | null
  emptyText: string
  iconElements: IconsType
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
