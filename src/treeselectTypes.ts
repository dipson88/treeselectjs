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
  /** HTML element (e.g. div) that will be replaced by the treeselect container (required). */
  parentHtmlContainer: HTMLElement
  /** Array of `value` from options to select on load. Use updateValue or set treeselect.value and call mount to update. Changes when checkboxes/tags change. */
  value?: ValueInputType
  /** Array of option objects { name, value, disabled?, htmlAttr?, isGroupSelectable?, children }. No duplicated values; names may duplicate. See Option description. */
  options?: OptionType[]
  /** All groups will be opened to this level (0 = all collapsed). */
  openLevel?: number
  /** List will be appended to the body instead of the input container. */
  appendToBody?: boolean
  /** List is always opened. Use for styling; for a fixed open list set staticList to true. */
  alwaysOpen?: boolean
  /** Selected values appear as tags. If false, shows '{count} elements selected' (use tagsCountText). Single selection shows the element name. */
  showTags?: boolean
  /** Text shown after count when showTags is false: '{count} {tagsCountText}'. */
  tagsCountText?: string
  /** Defines sort order for tags in the input. TagsSortItem: { value, name }. Use null for default order. */
  tagsSortFn?: TagsSortFnType
  /** Clear icon is available when value is set. */
  clearable?: boolean
  /** Search/filter input is available. */
  searchable?: boolean
  /** Placeholder text for the search input. */
  placeholder?: string
  /** Show groups in the input and group leaves when the whole group is selected. */
  grouped?: boolean
  /** Return selected groups instead of leaf ids only. By default only leaf ids are returned. */
  isGroupedValue?: boolean
  /** HTML element appended to the end of the list (e.g. custom footer/slot). */
  listSlotHtmlComponent?: HTMLElement | null
  /** List/control is disabled. */
  disabled?: boolean
  /** Text shown when the list is empty (e.g. no results). */
  emptyText?: string
  /** List is a static DOM element (no overlay). Ignored if appendToBody is true. */
  staticList?: boolean
  /** id attribute for the main input (accessibility). */
  id?: string
  /** aria-label attribute for the search input (accessibility). */
  ariaLabel?: string
  /** Single-value select: one option only, no checkboxes. Pass one id; showTags: false shows treeselect as dropdown. */
  isSingleSelect?: boolean
  /** Show count of children next to the group name. */
  showCount?: boolean
  /** Groups cannot be selected; only leaves can be selected. */
  disabledBranchNode?: boolean
  /** Force list direction. Supported: 'auto', 'top', 'bottom'. */
  direction?: DirectionType
  /** Groups that contain checked values are expanded on init/open. */
  expandSelected?: boolean
  /** Restore list scroll position when reopened. If false, scroll resets to 0 and first item is focused. */
  saveScrollPosition?: boolean
  /** Nodes are independent: check/uncheck does not update children/parent. Disabled nodes also ignore parent/child workflow. */
  isIndependentNodes?: boolean
  /** RTL mode. */
  rtl?: boolean
  /** Class name(s) for the list container. Useful for styling when using appendToBody. */
  listClassName?: string
  /** Experimental: improves list performance for large trees (visibility + IntersectionObserver). */
  isBoostedRendering?: boolean
  /** Object of SVG icons (arrowUp, arrowDown, arrowRight, attention, clear, cross, check, partialCheck). Use HTMLElement or string. Update styles after reset; use alwaysOpen for easier styling. */
  iconElements?: Partial<IconsType>
  /** Callback for input (selected value) instead of eventListener. */
  inputCallback?: (value: ValueType) => void
  /** Callback for open instead of eventListener. */
  openCallback?: (value: ValueType) => void
  /** Callback for close instead of eventListener. */
  closeCallback?: (value: ValueType) => void
  /** Callback for name-change (selected name in input) instead of eventListener. */
  nameChangeCallback?: (name: string) => void
  /** Callback for search (typed value) instead of eventListener. */
  searchCallback?: (value: string) => void
  /** Callback for open-close-group (groupId, isClosed) instead of eventListener. */
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
