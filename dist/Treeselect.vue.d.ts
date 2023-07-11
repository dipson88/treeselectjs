import { PropType } from 'vue';
import { IconsType, DirectionType, OptionType, ValueInputType } from 'treeselectjs';
export { type IconsType, type DirectionType, type OptionType } from 'treeselectjs';
export type TreeselectValue = ValueInputType;
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<ValueInputType>;
        default: () => never[];
    };
    options: {
        type: PropType<OptionType[]>;
        default: () => never[];
    };
    openLevel: {
        type: NumberConstructor;
        default: number;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagsCountText: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    grouped: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    staticList: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    isSingleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    isGroupedValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledBranchNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<DirectionType>;
        default: string;
    };
    expandSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    saveScrollPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    isIndependentNodes: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconElements: {
        type: PropType<Partial<IconsType>>;
        default: () => {};
    };
}, {
    treeselectContainerRef: import("vue").Ref<HTMLElement | null>;
    treeselectAfterListSlotRef: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "open" | "close" | "name-change" | "search" | "update:modelValue")[], "input" | "open" | "close" | "name-change" | "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<ValueInputType>;
        default: () => never[];
    };
    options: {
        type: PropType<OptionType[]>;
        default: () => never[];
    };
    openLevel: {
        type: NumberConstructor;
        default: number;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagsCountText: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    grouped: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    staticList: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    isSingleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    isGroupedValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledBranchNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<DirectionType>;
        default: string;
    };
    expandSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    saveScrollPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    isIndependentNodes: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconElements: {
        type: PropType<Partial<IconsType>>;
        default: () => {};
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onName-change"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: ValueInputType;
    options: OptionType[];
    id: string;
    iconElements: Partial<IconsType>;
    openLevel: number;
    appendToBody: boolean;
    alwaysOpen: boolean;
    showTags: boolean;
    tagsCountText: string;
    clearable: boolean;
    searchable: boolean;
    placeholder: string;
    grouped: boolean;
    disabled: boolean;
    emptyText: string;
    staticList: boolean;
    ariaLabel: string;
    isSingleSelect: boolean;
    showCount: boolean;
    isGroupedValue: boolean;
    disabledBranchNode: boolean;
    direction: DirectionType;
    expandSelected: boolean;
    saveScrollPosition: boolean;
    isIndependentNodes: boolean;
}>;
export default _sfc_main;
