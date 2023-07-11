import React, { FC, PropsWithChildren, useEffect, useRef } from 'react'
import TreeselectJS, { ValueInputType, ITreeselectParams } from 'treeselectjs'

export { type DirectionType, type IconsType, type OptionType } from 'treeselectjs'

export type TreeselectValue = ValueInputType

interface TreeselectReactParams extends ITreeselectParams {
  onInput?: (value: TreeselectValue) => void
  onOpen?: (value: TreeselectValue) => void
  onClose?: (value: TreeselectValue) => void
  onNameChange?: (name: string) => void
  onSearch?: (value: string) => void
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
  onSearch: 'searchCallback'
}

const isDifferentValues = (firstValue: any, secondValue: any) => {
  return JSON.stringify(firstValue) !== JSON.stringify(secondValue)
}

const Treeselect: FC<PropsWithChildren<TreeselectProps>> = (props) => {
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
        // @ts-ignore
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

  useEffect(() => {
    if (treeselect.current) {
      const isValueChanged = isDifferentValues(treeselect.current.options, props.options)

      if (isValueChanged) {
        treeselect.current.options = props.options ?? []
        treeselect.current.mount()
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

  useEffect(() => {
    treeselect.current = new TreeselectJS({
      parentHtmlContainer: treeselectRef.current as HTMLDivElement,
      listSlotHtmlComponent: treeselectAfterListSlotRef.current as HTMLDivElement,
      ...props,
      inputCallback: props.onInput,
      openCallback: props.onOpen,
      closeCallback: props.onClose,
      nameChangeCallback: props.onNameChange,
      searchCallback: props.onSearch
    })

    return () => {
      treeselect.current?.destroy()
    }
  }, [])

  return (
    <>
      <div ref={treeselectRef} />
      <div
        ref={treeselectAfterListSlotRef}
        className="treeselect-after-list-slot"
      >
        {props.children}
      </div>
    </>
  )
}

export default Treeselect
