/** Id/value of a single option (string or number). */
export type ValueOptionType = string | number

/** Current value: array of ids (multi), single id (single), or null. */
export type ValueType = ValueOptionType[] | ValueOptionType | null

/** Initial value accepted by constructor (can be undefined). */
export type ValueInputType = ValueOptionType[] | ValueOptionType | null | undefined

/**
 * Tree option node. Used in `options` and can be nested via `children`.
 */
export type OptionType = {
  /** Unique option id (string or number). */
  value: ValueOptionType
  /** Display name. */
  name: string
  /** If true, option is disabled and not selectable. */
  disabled?: boolean
  /** If true (group only), the group row can be selected. */
  isGroupSelectable?: boolean
  /** Optional HTML attributes applied to the option row (string values only). */
  htmlAttr?: Record<string, string>
  /** Child options (nested tree). */
  children: OptionType[]
}

/** Position of the dropdown list relative to the input: auto, top, or bottom. */
export type DirectionType = 'auto' | 'top' | 'bottom'

/** Item passed to tags sort function. */
export type TagsSortItem = { value: ValueOptionType; name: string }

/** Custom sort for tags. Return negative/zero/positive like Array.sort. Use null for default order. */
export type TagsSortFnType = ((itemA: TagsSortItem, itemB: TagsSortItem) => number) | null

export interface ITreeselect {
  parentHtmlContainer: HTMLElement
  value: ValueType
  options: OptionType[]
  openLevel: number
  appendToBody: boolean
  alwaysOpen: boolean
  showTags: boolean
  tagsCountText: string
  tagsSortFn: TagsSortFnType
  clearable: boolean
  searchable: boolean
  placeholder: string
  grouped: boolean
  isGroupedValue: boolean
  listSlotHtmlComponent: HTMLElement | null
  disabled: boolean
  emptyText: string
  staticList: boolean
  id: string
  ariaLabel: string
  isSingleSelect: boolean
  showCount: boolean
  disabledBranchNode: boolean
  direction: DirectionType
  expandSelected: boolean
  saveScrollPosition: boolean
  isIndependentNodes: boolean
  rtl: boolean
  iconElements: IconsType
  ungroupedValue: ValueOptionType[]
  groupedValue: ValueOptionType[]
  isListOpened: boolean
  selectedName: string
  srcElement: HTMLElement | null
  inputCallback: ((value: ValueType) => void) | undefined
  openCallback: ((value: ValueType) => void) | undefined
  closeCallback: ((value: ValueType) => void) | undefined
  nameChangeCallback: ((name: string) => void) | undefined
  searchCallback: ((value: string) => void) | undefined
  openCloseGroupCallback: ((groupId: ValueOptionType, isClosed: boolean) => void) | undefined
  mount: () => void
  updateValue: (newValue: ValueInputType) => void
  destroy: () => void
  focus: () => void
  toggleOpenClose: () => void
}

/**
 * Options passed to the Treeselect constructor.
 * All properties except `parentHtmlContainer` are optional.
 */
export interface ITreeselectParams {
  /** Container element where the treeselect will be mounted (required). */
  parentHtmlContainer: HTMLElement
  /** Initial value: single id, array of ids, or null/undefined. */
  value?: ValueInputType
  /** Tree of options (nested via `children`). */
  options?: OptionType[]
  /** Number of group levels open by default (0 = all collapsed). */
  openLevel?: number
  /** If true, list is rendered in document body and positioned dynamically. */
  appendToBody?: boolean
  /** If true, list is always open (no open/close toggle). */
  alwaysOpen?: boolean
  /** If true, selected items are shown as tags. */
  showTags?: boolean
  /** Text for multi-select count (e.g. "5 elements selected"). */
  tagsCountText?: string
  /** Custom sort for tags; null = default order. */
  tagsSortFn?: TagsSortFnType
  /** If true, clear button is shown when value is set. */
  clearable?: boolean
  /** If true, search/filter input is available. */
  searchable?: boolean
  /** Placeholder for the search input. */
  placeholder?: string
  /** If true, value is returned grouped by parent groups. */
  grouped?: boolean
  /** If true, value is in grouped form. */
  isGroupedValue?: boolean
  /** Optional custom slot (e.g. custom header) inside the list. */
  listSlotHtmlComponent?: HTMLElement | null
  /** If true, control is disabled. */
  disabled?: boolean
  /** Text shown when no options match search. */
  emptyText?: string
  /** If true, list is static (not positioned as dropdown). Use with appendToBody: false. */
  staticList?: boolean
  /** Id for the main input (e.g. for labels). */
  id?: string
  /** Aria-label for the search input (accessibility). */
  ariaLabel?: string
  /** If true, only one option can be selected. */
  isSingleSelect?: boolean
  /** If true, group rows show count of selected children. */
  showCount?: boolean
  /** If true, selecting a group does not select its children. */
  disabledBranchNode?: boolean
  /** List position: 'auto' | 'top' | 'bottom'. */
  direction?: DirectionType
  /** If true, groups containing selected items are expanded on open. */
  expandSelected?: boolean
  /** If true, list scroll position is restored when reopened. */
  saveScrollPosition?: boolean
  /** If true, options are treated as flat (no parent-child selection link). */
  isIndependentNodes?: boolean
  /** If true, RTL layout is applied. */
  rtl?: boolean
  /** Extra CSS class(es) for the list container. */
  listClassName?: string
  /** If true, list uses intersection observer for large trees (performance). */
  isBoostedRendering?: boolean
  /** Custom icons (SVG string or HTMLElement) for arrow, check, clear, etc. */
  iconElements?: Partial<IconsType>
  /** Called when selected value changes (value: current value). */
  inputCallback?: (value: ValueType) => void
  /** Called when list opens. */
  openCallback?: (value: ValueType) => void
  /** Called when list closes. */
  closeCallback?: (value: ValueType) => void
  /** Called when selected label text changes (e.g. single select). */
  nameChangeCallback?: (name: string) => void
  /** Called when user types in search (search string). */
  searchCallback?: (value: string) => void
  /** Called when a group is expanded/collapsed (groupId, isClosed). */
  openCloseGroupCallback?: (groupId: ValueOptionType, isClosed: boolean) => void
}

export type InnerOptionType = {
  id: ValueOptionType
  name: string
}

/**
 * Icon set for arrows, checkboxes, clear, etc.
 * Each value is an SVG string or an HTMLElement.
 */
export type IconsType = {
  arrowUp: string | HTMLElement
  arrowDown: string | HTMLElement
  arrowRight: string | HTMLElement
  attention: string | HTMLElement
  clear: string | HTMLElement
  cross: string | HTMLElement
  check: string | HTMLElement
  partialCheck: string | HTMLElement
}

export type SelectedNodesType = {
  nodes: InnerOptionType[]
  groupedNodes: InnerOptionType[]
  allNodes: InnerOptionType[]
}
