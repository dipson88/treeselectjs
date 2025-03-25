import {
  type ValueOptionType,
  type OptionType,
  type IconsType,
  type SelectedNodesType,
  type TagsSortFnType
} from '../treeselectTypes'

export interface TreeItem {
  id: string | number
  name: string
  childOf: string | number
  isGroup: boolean
  checked: boolean
  isPartialChecked: boolean
  level: number
  isClosed: boolean
  hidden: boolean
  disabled: boolean
  isGroupSelectable: boolean
  children: ValueOptionType[]
  checkboxHtmlElement: HTMLInputElement | null
  itemHtmlElement: HTMLElement | null
  arrowItemHtmlElement: HTMLElement | null
  checkboxIconHtmlElement: HTMLElement | null
}

export type OptionsTreeMap = Map<string | number, TreeItem>

export type BeforeSearchStateMap = Map<string | number, Pick<TreeItem, 'hidden' | 'isClosed'>>

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
  isBoostedRendering: boolean
  iconElements: IconsType
  inputCallback: (value: SelectedNodesType) => void
  arrowClickCallback: (groupId: ValueOptionType, isClosed: boolean) => void
  mouseupCallback: () => void
}

export interface ITreeselectList extends ITreeselectListParams {
  searchText: string
  selectedNodes: SelectedNodesType
  srcElement: HTMLElement
  emptyListHtmlElement: HTMLElement | null
  optionsTreeMap: OptionsTreeMap
  beforeSearchStateMap: BeforeSearchStateMap
  intersectionItemsObserver: IntersectionObserver | null
  updateValue: (value: ValueOptionType[]) => void
  updateSearchValue: (searchText: string) => void
  callKeyAction: (e: KeyboardEvent) => void
  focusFirstListElement: () => void
  isLastFocusedElementExist: () => boolean
  destroy: () => void
}
