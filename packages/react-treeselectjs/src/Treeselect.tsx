// Keep React in scope for JSX/runtime compatibility (e.g. older bundlers or tooling)
// biome-ignore lint/correctness/noUnusedImports: React may be required by JSX transform or tooling
import React, { type PropsWithChildren, useLayoutEffect, useRef } from 'react'
import TreeselectJS, { type IconsType, type ValueInputType, type ITreeselectParams } from 'treeselectjs'
import 'treeselectjs/dist/treeselectjs.css'

export type { DirectionType, IconsType, OptionType } from 'treeselectjs'

export type TreeselectValue = ValueInputType

interface TreeselectReactParams extends ITreeselectParams {
  onInput?: (value: TreeselectValue) => void
  onOpen?: (value: TreeselectValue) => void
  onClose?: (value: TreeselectValue) => void
  onNameChange?: (name: string) => void
  onSearch?: (value: string) => void
  onOpenCloseGroup?: (groupId: TreeselectValue, isClosed: boolean) => void
}

type TreeselectOmittedParams =
  | 'parentHtmlContainer'
  | 'listSlotHtmlComponent'
  | 'inputCallback'
  | 'openCallback'
  | 'closeCallback'
  | 'nameChangeCallback'
  | 'searchCallback'
  | 'openCloseGroupCallback'

export type TreeselectProps = Omit<TreeselectReactParams, TreeselectOmittedParams>

const isDifferentValues = (firstValue: unknown, secondValue: unknown) => {
  return JSON.stringify(firstValue) !== JSON.stringify(secondValue)
}

const isDifferentIconElements = (firstValue?: Partial<IconsType>, secondValue?: Partial<IconsType>) => {
  const firstIcons = firstValue ?? {}
  const secondIcons = secondValue ?? {}
  const iconKeys = new Set([...Object.keys(firstIcons), ...Object.keys(secondIcons)] as (keyof IconsType)[])

  return Array.from(iconKeys).some((key) => firstIcons[key] !== secondIcons[key])
}

const cloneIconElements = (iconElements?: Partial<IconsType>) => {
  return iconElements ? { ...iconElements } : undefined
}

const getResolvedTreeselectProps = (props: PropsWithChildren<TreeselectProps>) => {
  const appendToBody = props.appendToBody ?? false
  const disabled = props.disabled ?? false

  return {
    options: props.options ?? [],
    openLevel: props.openLevel ?? 0,
    appendToBody,
    alwaysOpen: !!(props.alwaysOpen && !disabled),
    showTags: props.showTags ?? true,
    tagsCountText: props.tagsCountText ?? 'elements selected',
    tagsSortFn: props.tagsSortFn ?? null,
    clearable: props.clearable ?? true,
    searchable: props.searchable ?? true,
    placeholder: props.placeholder ?? 'Select...',
    grouped: props.grouped ?? true,
    isGroupedValue: props.isGroupedValue ?? false,
    disabled,
    emptyText: props.emptyText ?? 'No results found...',
    staticList: !!(props.staticList && !appendToBody),
    id: props.id ?? '',
    ariaLabel: props.ariaLabel ?? '',
    isSingleSelect: props.isSingleSelect ?? false,
    showCount: props.showCount ?? false,
    disabledBranchNode: props.disabledBranchNode ?? false,
    direction: props.direction ?? 'auto',
    expandSelected: props.expandSelected ?? false,
    saveScrollPosition: props.saveScrollPosition ?? true,
    isIndependentNodes: props.isIndependentNodes ?? false,
    rtl: props.rtl ?? false,
    listClassName: props.listClassName ?? '',
    isBoostedRendering: props.isBoostedRendering ?? false,
  } satisfies Pick<
    TreeselectJS,
    | 'options'
    | 'openLevel'
    | 'appendToBody'
    | 'alwaysOpen'
    | 'showTags'
    | 'tagsCountText'
    | 'tagsSortFn'
    | 'clearable'
    | 'searchable'
    | 'placeholder'
    | 'grouped'
    | 'isGroupedValue'
    | 'disabled'
    | 'emptyText'
    | 'staticList'
    | 'id'
    | 'ariaLabel'
    | 'isSingleSelect'
    | 'showCount'
    | 'disabledBranchNode'
    | 'direction'
    | 'expandSelected'
    | 'saveScrollPosition'
    | 'isIndependentNodes'
    | 'rtl'
    | 'listClassName'
    | 'isBoostedRendering'
  >
}

type ResolvedTreeselectProps = ReturnType<typeof getResolvedTreeselectProps>

const getResolvedTreeselectCallbacks = (props: PropsWithChildren<TreeselectProps>) => {
  return {
    inputCallback: props.onInput,
    openCallback: props.onOpen,
    closeCallback: props.onClose,
    nameChangeCallback: props.onNameChange,
    searchCallback: props.onSearch,
    openCloseGroupCallback: props.onOpenCloseGroup,
  } satisfies Pick<
    TreeselectJS,
    | 'inputCallback'
    | 'openCallback'
    | 'closeCallback'
    | 'nameChangeCallback'
    | 'searchCallback'
    | 'openCloseGroupCallback'
  >
}

const remountPropKeys = [
  'openLevel',
  'appendToBody',
  'alwaysOpen',
  'showTags',
  'tagsCountText',
  'tagsSortFn',
  'clearable',
  'searchable',
  'placeholder',
  'grouped',
  'isGroupedValue',
  'disabled',
  'emptyText',
  'staticList',
  'id',
  'ariaLabel',
  'isSingleSelect',
  'showCount',
  'disabledBranchNode',
  'direction',
  'expandSelected',
  'saveScrollPosition',
  'isIndependentNodes',
  'rtl',
  'listClassName',
  'isBoostedRendering',
] as const satisfies readonly (keyof ResolvedTreeselectProps)[]

const callbackPropKeys = [
  'inputCallback',
  'openCallback',
  'closeCallback',
  'nameChangeCallback',
  'searchCallback',
  'openCloseGroupCallback',
] as const satisfies readonly (keyof ReturnType<typeof getResolvedTreeselectCallbacks>)[]

const Treeselect = (props: PropsWithChildren<TreeselectProps>) => {
  const treeselectRef = useRef<HTMLDivElement | null>(null)
  const treeselectAfterListSlotRef = useRef<HTMLDivElement | null>(null)
  const treeselect = useRef<TreeselectJS | null>(null)
  const previousIconElements = useRef(cloneIconElements(props.iconElements))

  // Mount once, destroy on unmount; props synced below after React commits.
  // useLayoutEffect (not useEffect) so destroy() runs synchronously before React removes the
  // fragment's DOM nodes - TreeselectJS reparents listSlotHtmlComponent into the list markup,
  // and a deferred (passive) cleanup would run after React already tried to remove that node
  // from its original position, throwing a NotFoundError.
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — run only on mount ([]), not on every prop change
  useLayoutEffect(() => {
    const afterListSlotOriginalParent = treeselectAfterListSlotRef.current?.parentElement ?? null

    treeselect.current = new TreeselectJS({
      parentHtmlContainer: treeselectRef.current as HTMLDivElement,
      listSlotHtmlComponent: treeselectAfterListSlotRef.current as HTMLDivElement,
      ...getResolvedTreeselectProps(props),
      ...getResolvedTreeselectCallbacks(props),
      value: props.value,
      iconElements: props.iconElements,
    })

    return () => {
      // TreeselectJS moves treeselectAfterListSlotRef.current into the dropdown's own
      // markup while open/mounted. Put it back under its original React-rendered parent
      // before destroy() runs, so React's own unmount can still find and remove it from
      // where it originally placed it (otherwise removeChild throws NotFoundError).
      if (treeselectAfterListSlotRef.current && afterListSlotOriginalParent) {
        afterListSlotOriginalParent.appendChild(treeselectAfterListSlotRef.current)
      }

      treeselect.current?.destroy()
      treeselect.current = null
    }
  }, [])

  useLayoutEffect(() => {
    if (!treeselect.current) {
      return
    }

    const resolvedProps = getResolvedTreeselectProps(props)
    let shouldMount = false
    let shouldUpdateValue = false

    remountPropKeys.forEach((key) => {
      if (treeselect.current && treeselect.current[key] !== resolvedProps[key]) {
        Object.assign(treeselect.current, { [key]: resolvedProps[key] })
        shouldMount = true
      }
    })

    if (isDifferentValues(treeselect.current.options, resolvedProps.options)) {
      treeselect.current.options = resolvedProps.options
      shouldMount = true
      shouldUpdateValue = true
    }

    if (isDifferentIconElements(previousIconElements.current, props.iconElements)) {
      treeselect.current.iconElements = (props.iconElements ?? {}) as IconsType
      previousIconElements.current = cloneIconElements(props.iconElements)
      shouldMount = true
    }

    const resolvedCallbacks = getResolvedTreeselectCallbacks(props)

    callbackPropKeys.forEach((key) => {
      if (treeselect.current && treeselect.current[key] !== resolvedCallbacks[key]) {
        Object.assign(treeselect.current, { [key]: resolvedCallbacks[key] })
      }
    })

    if (shouldMount) {
      treeselect.current.mount()
    }

    if (shouldUpdateValue || isDifferentValues(treeselect.current.value, props.value)) {
      treeselect.current.updateValue(props.value)
    }
  })

  return (
    <>
      <div ref={treeselectRef} />
      <div ref={treeselectAfterListSlotRef} className="treeselect-after-list-slot">
        {props.children}
      </div>
    </>
  )
}

export default Treeselect
