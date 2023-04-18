import React, { FC, PropsWithChildren, useEffect, useRef } from 'react'
import TreeselectJS, { ValueType, ITreeselectParams } from 'treeselectjs'

export type TreeselectValue = ValueType

interface TreeselectReactParams extends ITreeselectParams {
  onInput?: (value: ValueType) => void
  onOpen?: (value: ValueType) => void
  onClose?: (value: ValueType) => void
  onNameChange?: (name: string) => void
}

export type TreeselectProps = Omit<
  TreeselectReactParams,
  | 'parentHtmlContainer'
  | 'listSlotHtmlComponent'
  | 'inputCallback'
  | 'openCallback'
  | 'closeCallback'
  | 'nameChangeCallback'
>

const keysWithoutRender = ['value', 'id', 'children']

const callbackKeysDictionary = {
  onInput: 'inputCallback',
  onOpen: 'openCallback',
  onClose: 'closeCallback',
  onNameChange: 'nameChangeCallback'
}

const Treeselect: FC<PropsWithChildren<TreeselectProps>> = (props) => {
  const treeselectRef = useRef<HTMLDivElement | null>(null)
  const treeselectAfterListSlotRef = useRef<HTMLDivElement | null>(null)
  const treeselect = useRef<TreeselectJS | null>(null)

  if (treeselect.current) {
    let isAnyChanged = false
    Object.keys(props).forEach((key) => {
      const isTheSameValue = Object.keys(callbackKeysDictionary).includes(key)
        // @ts-ignore
        ? treeselect.current[callbackKeysDictionary[key]] === props[key]
        // @ts-ignore
        : treeselect.current[key] === props[key]
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
      const isValueChanged = JSON.stringify(treeselect.current.value) !== JSON.stringify(props.value)

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
    treeselect.current = new TreeselectJS({
      parentHtmlContainer: treeselectRef.current as HTMLDivElement,
      listSlotHtmlComponent: treeselectAfterListSlotRef.current as HTMLDivElement,
      ...props,
      inputCallback: props.onInput,
      openCallback: props.onOpen,
      closeCallback: props.onClose,
      nameChangeCallback: props.onNameChange
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
