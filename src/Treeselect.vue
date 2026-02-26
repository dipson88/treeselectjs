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
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  toRaw,
  type ComponentObjectPropsOptions,
  type PropType,
  watch,
} from 'vue'
import Treeselect, {
  type DirectionType,
  type ITreeselectParams,
  type IconsType,
  type OptionType,
  type TagsSortItem,
  type ValueInputType,
} from 'treeselectjs'

export type { IconsType, DirectionType, OptionType, TagsSortItem } from 'treeselectjs'

/** Value type for v-model and emitted events: single id, array of ids, or null/undefined. */
export type TreeselectValue = ValueInputType

/**
 * Keys from ITreeselectParams that are not exposed as Vue props.
 * The component provides these internally (container, slot, callbacks).
 */
type TreeselectOmittedParams =
  | 'parentHtmlContainer'
  | 'listSlotHtmlComponent'
  | 'inputCallback'
  | 'openCallback'
  | 'closeCallback'
  | 'nameChangeCallback'
  | 'searchCallback'
  | 'openCloseGroupCallback'

/**
 * Props for the Vue Treeselect component.
 * Mirrors ITreeselectParams except: uses `modelValue` instead of `value` for v-model,
 * and omits container/slot/callback params (handled internally).
 * @see ITreeselectParams in treeselectjs for full option descriptions
 */
export type VueTreeselectProps = Omit<ITreeselectParams, TreeselectOmittedParams | 'value'> & {
  /** Bound value (v-model). Single id, array of ids, or null/undefined. */
  modelValue?: TreeselectValue
}

/**
 * Builds Vue prop definitions from ITreeselectParams with default values.
 * Used by the component to declare its props.
 */
const buildTreeselectProps = (): ComponentObjectPropsOptions<VueTreeselectProps> => {
  const props: Record<keyof VueTreeselectProps, { type: unknown; default: unknown }> = {
    modelValue: { type: [Array, Number, String] as PropType<TreeselectValue>, default: () => [] },
    options: { type: Array as PropType<OptionType[]>, default: () => [] },
    openLevel: { type: Number, default: 0 },
    appendToBody: { type: Boolean, default: false },
    alwaysOpen: { type: Boolean, default: false },
    showTags: { type: Boolean, default: true },
    tagsCountText: { type: String, default: 'elements selected' },
    tagsSortFn: {
      type: Function as PropType<(a: TagsSortItem, b: TagsSortItem) => number>,
      default: null,
    },
    clearable: { type: Boolean, default: true },
    searchable: { type: Boolean, default: true },
    placeholder: { type: String, default: 'Select...' },
    grouped: { type: Boolean, default: true },
    isGroupedValue: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    emptyText: { type: String, default: 'No results found...' },
    staticList: { type: Boolean, default: false },
    id: { type: String, default: '' },
    ariaLabel: { type: String, default: '' },
    isSingleSelect: { type: Boolean, default: false },
    showCount: { type: Boolean, default: false },
    disabledBranchNode: { type: Boolean, default: false },
    direction: { type: String as PropType<DirectionType>, default: 'auto' },
    expandSelected: { type: Boolean, default: false },
    saveScrollPosition: { type: Boolean, default: true },
    isIndependentNodes: { type: Boolean, default: false },
    rtl: { type: Boolean, default: false },
    listClassName: { type: String, default: '' },
    isBoostedRendering: { type: Boolean, default: false },
    iconElements: { type: Object as PropType<Partial<IconsType>>, default: () => ({}) },
  }

  return props as ComponentObjectPropsOptions<VueTreeselectProps>
}

/** Props that require a full re-mount when changed (not just property update). */
const keysWithoutRender = ['modelValue', 'options', 'id', 'iconElements']

/**
 * Vue 3 wrapper for treeselectjs: hierarchical single/multi select with tags and search.
 * All options from ITreeselectParams are supported as props (except value → use modelValue).
 * Emits: update:modelValue, input, open, close, name-change, search, open-close-group.
 * @see https://github.com/dipson88/vue-treeselectjs
 * @see ITreeselectParams in treeselectjs for option details
 */
export default defineComponent({
  name: 'VueTreeselect',
  props: buildTreeselectProps(),
  emits: {
    'update:modelValue': (_value: TreeselectValue) => true,
    input: (_value: TreeselectValue) => true,
    open: (_value: TreeselectValue) => true,
    close: (_value: TreeselectValue) => true,
    'name-change': (_name: string) => true,
    search: (_value: string) => true,
    'open-close-group': (_payload: { groupId: TreeselectValue; isClosed: boolean }) => true,
  },
  setup(props: VueTreeselectProps, { emit }) {
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
        isClosed,
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
            // @ts-expect-error
            const isTheSameValue = rawProps[key] === rawTreeselect[key]
            const isWithRender = keysWithoutRender.includes(key)

            if (!isWithRender && !isTheSameValue) {
              // @ts-expect-error
              rawTreeselect[key] = rawProps[key]
              isAnyChanged = true
            }
          })

          if (isAnyChanged) {
            rawTreeselect.mount()
          }
        }
      },
      { deep: true },
    )

    watch(
      () => valueString.value,
      () => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          rawTreeselect.updateValue(props.modelValue)
        }
      },
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
      },
    )

    watch(
      () => optionsArrayString.value,
      () => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          rawTreeselect.options = props.options ?? []
          rawTreeselect.mount()

          // Update value after options change
          rawTreeselect.updateValue(props.modelValue)
        }
      },
    )

    watch(
      () => iconsElementsString.value,
      () => {
        if (treeselect.value) {
          const rawTreeselect = toRaw(treeselect.value)
          rawTreeselect.iconElements = {
            ...rawTreeselect.iconElements,
            ...props.iconElements,
          }
          rawTreeselect.mount()
        }
      },
    )

    onMounted(() => {
      if (!treeselectContainerRef.value) {
        throw new Error('Treeselect container ref is not defined')
      }

      const { modelValue, ...restProps } = props
      const params: ITreeselectParams = {
        ...restProps,
        value: modelValue,
        parentHtmlContainer: treeselectContainerRef.value,
        listSlotHtmlComponent: treeselectAfterListSlotRef.value ?? null,
        inputCallback: onInput,
        openCallback: onOpen,
        closeCallback: onClose,
        nameChangeCallback: onNameChange,
        searchCallback: onSearch,
        openCloseGroupCallback: onOpenCloseGroup,
      }
      treeselect.value = new Treeselect(params)
    })

    onUnmounted(() => {
      if (treeselect.value) {
        const rawTreeselect = toRaw(treeselect.value)
        rawTreeselect.destroy()
      }
    })

    return {
      treeselectContainerRef,
      treeselectAfterListSlotRef,
    }
  },
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
