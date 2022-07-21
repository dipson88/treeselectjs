import { FlattedOptionType, OptionType } from '../treeselectTypes'

export type SelectedNodesType = {
  nodes: FlattedOptionType[]
  groupedNodes: FlattedOptionType[]
}

export interface ITreeslectListParams {
  options: OptionType[]
  value: string[]
  openLevel: number
  listSlotHtmlComponent: HTMLElement | null
  emptyText: string
}

export interface ITreeselectList extends ITreeslectListParams {
  searchText: string
  flattedOptions: FlattedOptionType[]
  flattedOptionsBeforeSearch: FlattedOptionType[]
  selectedNodes: SelectedNodesType
  srcElement: HTMLElement
  updateValue: (value: string[]) => void
  updateSearchValue: (searchText: string) => void
  callKeyAction: (key: string) => void
  focusFirstListElement: () => void
}
