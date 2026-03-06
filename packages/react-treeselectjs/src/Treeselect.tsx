// Keep React in scope for JSX/runtime compatibility (e.g. older bundlers or tooling)
// biome-ignore lint/correctness/noUnusedImports: React may be required by JSX transform or tooling
import React, { type PropsWithChildren, useEffect, useRef } from 'react'
import TreeselectJS, { type ValueInputType, type ITreeselectParams } from 'treeselectjs'
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

export type TreeselectProps = Omit<
  TreeselectReactParams,
  | 'parentHtmlContainer'
  | 'listSlotHtmlComponent'
  | 'inputCallback'
  | 'openCallback'
  | 'closeCallback'
  | 'nameChangeCallback'
  | 'searchCallback'
>

const keysWithoutRender = ['value', 'id', 'options', 'iconElements', 'children']

const callbackKeysDictionary = {
  onInput: 'inputCallback',
  onOpen: 'openCallback',
  onClose: 'closeCallback',
  onNameChange: 'nameChangeCallback',
  onSearch: 'searchCallback',
  onOpenCloseGroup: 'openCloseGroupCallback',
}

const isDifferentValues = (firstValue: unknown, secondValue: unknown) => {
  return JSON.stringify(firstValue) !== JSON.stringify(secondValue)
}

const Treeselect = (props: PropsWithChildren<TreeselectProps>) => {
  const treeselectRef = useRef<HTMLDivElement | null>(null)
  const treeselectAfterListSlotRef = useRef<HTMLDivElement | null>(null)
  const treeselect = useRef<TreeselectJS | null>(null)

  if (treeselect.current) {
    let isAnyChanged = false
    Object.keys(props).forEach((key) => {
      const isTheSameValue = Object.keys(callbackKeysDictionary).includes(key)
        ? // @ts-ignore
          treeselect.current[callbackKeysDictionary[key]] === props[key]
        : // @ts-ignore
          treeselect.current[key] === props[key]
      const isWithRender = keysWithoutRender.includes(key)

      if (!isWithRender && !isTheSameValue) {
        // @ts-expect-error
        treeselect.current[key] = props[key]
        isAnyChanged = true
      }
    })

    if (isAnyChanged) {
      treeselect.current.mount()
    }
  }

  useEffect(() => {
    if (treeselect.current) {
      const isValueChanged = isDifferentValues(treeselect.current.value, props.value)

      if (isValueChanged) {
        treeselect.current.updateValue(props.value)
      }
    }
  }, [props.value])

  useEffect(() => {
    const isTreeselectIdExist = treeselect.current?.id || props.id
    if (isTreeselectIdExist && treeselect.current) {
      treeselect.current.id = props.id ?? ''
      treeselect.current.mount()
    }
  }, [props.id])

  // Run only when options change; props.value used only to sync value after options update
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — do not re-run on props.value change
  useEffect(() => {
    if (treeselect.current) {
      const isValueChanged = isDifferentValues(treeselect.current.options, props.options)

      if (isValueChanged) {
        treeselect.current.options = props.options ?? []
        treeselect.current.mount()

        // Update value if options changed
        treeselect.current.updateValue(props.value)
      }
    }
  }, [props.options])

  useEffect(() => {
    if (treeselect.current) {
      const newIconElements = { ...treeselect.current.iconElements, ...props.iconElements }
      const isValueChanged = isDifferentValues(treeselect.current.iconElements, newIconElements)

      if (isValueChanged) {
        treeselect.current.iconElements = newIconElements
        treeselect.current.mount()
      }
    }
  }, [props.iconElements])

  // Mount once, destroy on unmount; props synced via treeselect.current and other useEffects
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — run only on mount ([]), not on every prop change
  useEffect(() => {
    treeselect.current = new TreeselectJS({
      parentHtmlContainer: treeselectRef.current as HTMLDivElement,
      listSlotHtmlComponent: treeselectAfterListSlotRef.current as HTMLDivElement,
      ...props,
      inputCallback: props.onInput,
      openCallback: props.onOpen,
      closeCallback: props.onClose,
      nameChangeCallback: props.onNameChange,
      searchCallback: props.onSearch,
      openCloseGroupCallback: props.onOpenCloseGroup,
    })

    return () => {
      treeselect.current?.destroy()
    }
  }, [])

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
