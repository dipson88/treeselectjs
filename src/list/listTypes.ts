import { FlattedOptionType, OptionType, HTMLElementOrNA } from '../treeselectTypes.js'

export type SelectedNodesType = {
  nodes: FlattedOptionType[]
  groupedNodes: FlattedOptionType[]
}

export interface ITreeslectListParams {
  options: OptionType[]
  value: string[]
  openLevel: number
  listSlotHtmlComponent: HTMLElementOrNA
  emptyText: string
}

export interface ITreeselectList extends ITreeslectListParams {
  searchText: string
  flattedOptions: FlattedOptionType[]
  flattedOptionsBeforeSearch: FlattedOptionType[]
  selectedNodes: SelectedNodesType
  srcElement: HTMLElement | Element
  updateValue: (value: string[]) => void
  updateSearchValue: (searchText: string) => void
  callKeyAction: (key: string) => void
  focusFirstListElement: () => void
}
