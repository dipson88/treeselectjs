import { ValueOptionType, OptionType, FlattedOptionType, IconsType, SelectedNodesType } from '../treeselectTypes'

export interface ITreeselectListParams {
  options: OptionType[]
  value: ValueOptionType[]
  openLevel: number
  listSlotHtmlComponent: HTMLElement | null
  emptyText: string
  isSingleSelect: boolean
  showCount: boolean
  disabledBranchNode: boolean
  expandSelected: boolean
  isIndependentNodes: boolean
  iconElements: IconsType
  inputCallback: (value: SelectedNodesType) => void
  arrowClickCallback: () => void
  mouseupCallback: () => void
}

export interface ITreeselectList extends ITreeselectListParams {
  searchText: string
  flattedOptions: FlattedOptionType[]
  flattedOptionsBeforeSearch: FlattedOptionType[]
  selectedNodes: SelectedNodesType
  srcElement: HTMLElement
  updateValue: (value: ValueOptionType[]) => void
  updateSearchValue: (searchText: string) => void
  callKeyAction: (e: KeyboardEvent) => void
  focusFirstListElement: () => void
  isLastFocusedElementExist: () => boolean
}
