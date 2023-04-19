<template>
  <div ref="treeselectContainerRef" />
  <div
    ref="treeselectAfterListSlotRef"
    class="treeselect__after-list-slot"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref, toRaw, watch } from 'vue'
import Treeselect, { IconsType, DirectionType, OptionType, ValueType, ValueInputType } from 'treeselectjs'

export type TreeselectValue = ValueType

const keysWithoutRender = ['value', 'id']

export default defineComponent({
  name: 'Treeselect',
  props: {
    value: {
      type: [Array, Number, String] as PropType<ValueInputType>,
      default: () => []
    },
    options: {
      type: Array as PropType<OptionType[]>,
      default: () => []
    },
    openLevel: {
      type: Number,
      default: 0
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    alwaysOpen: {
      type: Boolean,
      default: false
    },
    showTags: {
      type: Boolean,
      default: true
    },
    tagsCountText: {
      type: String,
      default: 'elements selected'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    searchable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Select...'
    },
    grouped: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: 'No results found...'
    },
    staticList: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    isSingleSelect: {
      type: Boolean,
      default: false
    },
    showCount: {
      type: Boolean,
      default: false
    },
    isGroupedValue: {
      type: Boolean,
      default: false
    },
    disabledBranchNode: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String as PropType<DirectionType>,
      default: 'auto'
    },
    expandSelected: {
      type: Boolean,
      default: false
    },
    saveScrollPosition: {
      type: Boolean,
      default: true
    },
    iconElements: {
      type: Object as PropType<Partial<IconsType>>,
      default: () => ({})
    }
  },
  emits: ['input', 'open', 'close', 'name-change'],
  setup(props, { emit }) {
    const treeselectContainerRef = ref<HTMLElement | null>(null)
    const treeselectAfterListSlotRef = ref<HTMLElement | null>(null)
    const treeselect = ref<Treeselect | null>(null)

    const onInput = (value: TreeselectValue) => emit('input', value)
    const onOpen = (value: TreeselectValue) => emit('open', value)
    const onClose = (value: TreeselectValue) => emit('close', value)
    const onNameChange = (name: string) => emit('name-change', name)

    watch(
      () => props,
      (newProps) => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          const rawProps = toRaw(newProps)
          let isAnyChanged = false

          Object.keys(rawProps).forEach((key) => {
            // @ts-ignore
            const isTheSameValue = rawProps[key] === rawTreeselect[key]
            const isWithRender = keysWithoutRender.includes(key)

            if (!isWithRender && !isTheSameValue) {
              // @ts-ignore
              rawTreeselect[key] = rawProps[key]
              isAnyChanged = true
            }
          })

          if (isAnyChanged) {
            rawTreeselect.mount()
          }
        }
      },
      { deep: true }
    )

    watch(
      () => props.value,
      (newValue) => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          const rawNewValue = toRaw(newValue)
          const isValueChanged = JSON.stringify(rawTreeselect.value) !== JSON.stringify(rawNewValue)

          if (isValueChanged) {
            rawTreeselect.updateValue(rawNewValue)
          }
        }
      }
    )

    watch(
      () => props.id,
      (newId) => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          const isTreeselectIdExist = rawTreeselect.id || newId

          if (isTreeselectIdExist) {
            rawTreeselect.id = newId ?? ''
            rawTreeselect.mount()
          }
        }
      }
    )

    onMounted(() => {
      if (!treeselectContainerRef.value) {
        throw new Error('Treeselect container ref is not defined')
      }

      treeselect.value = new Treeselect({
        parentHtmlContainer: treeselectContainerRef.value,
        value: props.value,
        options: props.options,
        openLevel: props.openLevel,
        appendToBody: props.appendToBody,
        alwaysOpen: props.alwaysOpen,
        showTags: props.showTags,
        tagsCountText: props.tagsCountText,
        clearable: props.clearable,
        searchable: props.searchable,
        placeholder: props.placeholder,
        grouped: props.grouped,
        disabled: props.disabled,
        emptyText: props.emptyText,
        staticList: props.staticList,
        id: props.id,
        isSingleSelect: props.isSingleSelect,
        showCount: props.showCount,
        isGroupedValue: props.isGroupedValue,
        disabledBranchNode: props.disabledBranchNode,
        direction: props.direction,
        expandSelected: props.expandSelected,
        saveScrollPosition: props.saveScrollPosition,
        inputCallback: onInput,
        openCallback: onOpen,
        closeCallback: onClose,
        nameChangeCallback: onNameChange,
        // We need a HTMLElement as a prop here. It is an additional component at the end of list.
        // We gets HTMLElement from refs. Vue events work fine.
        listSlotHtmlComponent: treeselectAfterListSlotRef.value ?? null,
        iconElements: props.iconElements
      })
    })

    onUnmounted(() => {
      if (treeselect.value) {
        const rawTreeselect = toRaw(treeselect.value)
        rawTreeselect.destroy()
      }
    })

    return {
      treeselectContainerRef,
      treeselectAfterListSlotRef
    }
  }
})
</script>
