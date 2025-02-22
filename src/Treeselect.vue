<template>
  <div class="vue-treeselect">
    <div ref="treeselectContainerRef" />
    <div
      ref="treeselectAfterListSlotRef"
      class="treeselect__after-list-slot"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, PropType, ref, toRaw, watch } from 'vue'
import Treeselect, { IconsType, DirectionType, OptionType, ValueInputType, TagsSortItem } from 'treeselectjs'

export { type IconsType, type DirectionType, type OptionType, type TagsSortItem } from 'treeselectjs'

export type TreeselectValue = ValueInputType

const keysWithoutRender = ['modelValue', 'options', 'id', 'iconElements']

export default defineComponent({
  name: 'VueTreeselect',
  props: {
    modelValue: {
      type: [Array, Number, String] as PropType<TreeselectValue>,
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
    tagsSortFn: {
      type: Function as PropType<(a: TagsSortItem, b: TagsSortItem) => number> | null,
      default: null
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
    ariaLabel: {
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
    isIndependentNodes: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: Boolean,
      default: false
    },
    listClassName: {
      type: String,
      default: ''
    },
    iconElements: {
      type: Object as PropType<Partial<IconsType>>,
      default: () => ({})
    }
  },
  emits: ['input', 'open', 'close', 'name-change', 'search', 'open-close-group', 'update:modelValue'],
  setup(props, { emit }) {
    const treeselectContainerRef = ref<HTMLElement | null>(null)
    const treeselectAfterListSlotRef = ref<HTMLElement | null>(null)
    const treeselect = ref<Treeselect | null>(null)

    const onInput = (modelValue: TreeselectValue) => {
      emit('update:modelValue', modelValue)
      emit('input', modelValue)
    }
    const onOpen = (value: TreeselectValue) => emit('open', value)
    const onClose = (value: TreeselectValue) => emit('close', value)
    const onNameChange = (name: string) => emit('name-change', name)
    const onSearch = (value: string) => emit('search', value)
    const onOpenCloseGroup = (groupId: TreeselectValue, isClosed: boolean) =>
      emit('open-close-group', {
        groupId,
        isClosed
      })

    const valueString = computed(() => JSON.stringify(props.modelValue))
    const optionsArrayString = computed(() => JSON.stringify(props.options))
    const iconsElementsString = computed(() => JSON.stringify(props.iconElements))

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
      () => valueString.value,
      () => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          rawTreeselect.updateValue(props.modelValue)
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

    watch(
      () => optionsArrayString.value,
      () => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          rawTreeselect.options = props.options
          rawTreeselect.mount()

          // Update value after options change
          rawTreeselect.updateValue(props.modelValue)
        }
      }
    )

    watch(
      () => iconsElementsString.value,
      () => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          rawTreeselect.iconElements = {
            ...rawTreeselect.iconElements,
            ...props.iconElements
          }
          rawTreeselect.mount()
        }
      }
    )

    onMounted(() => {
      if (!treeselectContainerRef.value) {
        throw new Error('Treeselect container ref is not defined')
      }

      treeselect.value = new Treeselect({
        parentHtmlContainer: treeselectContainerRef.value,
        value: props.modelValue,
        options: props.options,
        openLevel: props.openLevel,
        appendToBody: props.appendToBody,
        alwaysOpen: props.alwaysOpen,
        showTags: props.showTags,
        tagsCountText: props.tagsCountText,
        tagsSortFn: props.tagsSortFn,
        clearable: props.clearable,
        searchable: props.searchable,
        placeholder: props.placeholder,
        grouped: props.grouped,
        disabled: props.disabled,
        emptyText: props.emptyText,
        staticList: props.staticList,
        id: props.id,
        ariaLabel: props.ariaLabel,
        isSingleSelect: props.isSingleSelect,
        showCount: props.showCount,
        isGroupedValue: props.isGroupedValue,
        disabledBranchNode: props.disabledBranchNode,
        direction: props.direction,
        expandSelected: props.expandSelected,
        saveScrollPosition: props.saveScrollPosition,
        isIndependentNodes: props.isIndependentNodes,
        rtl: props.rtl,
        listClassName: props.listClassName,
        inputCallback: onInput,
        openCallback: onOpen,
        closeCallback: onClose,
        nameChangeCallback: onNameChange,
        searchCallback: onSearch,
        openCloseGroupCallback: onOpenCloseGroup,
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

<style lang="css">
@import 'treeselectjs/dist/treeselectjs.css';

.vue-treeselect {
  display: block;
  width: 100%;
  box-sizing: border-box;
}
</style>
