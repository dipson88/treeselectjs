import {
  type ValueOptionType,
  type OptionType,
  type FlattedOptionType,
  type IconsType,
  type SelectedNodesType,
  type TagsSortFnType
} from '../treeselectTypes'

export interface TreeItem extends FlattedOptionType {
  children: (number | string)[]
  checkboxHtmlElement: HTMLInputElement
  itemHtmlElement: HTMLElement
  arrowItemHtmlElement: HTMLElement
}

export type OptionsTreeMap = Map<string | number, TreeItem>

export type CachedOptionsNodesType = { [optionId: string]: HTMLInputElement }

export interface ITreeselectListParams {
  options: OptionType[]
  value: ValueOptionType[]
  openLevel: number
  listSlotHtmlComponent: HTMLElement | null
  tagsSortFn: TagsSortFnType
  emptyText: string
  isSingleSelect: boolean
  showCount: boolean
  disabledBranchNode: boolean
  expandSelected: boolean
  isIndependentNodes: boolean
  rtl: boolean
  listClassName: string
  iconElements: IconsType
  inputCallback: (value: SelectedNodesType) => void
  arrowClickCallback: (groupId: ValueOptionType, isClosed: boolean) => void
  mouseupCallback: () => void
}

export interface ITreeselectList extends ITreeselectListParams {
  searchText: string
  flattedOptions: FlattedOptionType[]
  flattedOptionsBeforeSearch: FlattedOptionType[]
  selectedNodes: SelectedNodesType
  srcElement: HTMLElement
  cachedOptionsNodes: CachedOptionsNodesType
  optionsTreeMap: OptionsTreeMap
  optionsTreeMapBeforeSearch: OptionsTreeMap
  updateValue: (value: ValueOptionType[]) => void
  updateSearchValue: (searchText: string) => void
  callKeyAction: (e: KeyboardEvent) => void
  focusFirstListElement: () => void
  isLastFocusedElementExist: () => boolean
}
