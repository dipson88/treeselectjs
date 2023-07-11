export declare type DirectionType = 'auto' | 'top' | 'bottom';

export declare type IconsType = {
    arrowUp: string | HTMLElement;
    arrowDown: string | HTMLElement;
    arrowRight: string | HTMLElement;
    attention: string | HTMLElement;
    clear: string | HTMLElement;
    cross: string | HTMLElement;
    check: string | HTMLElement;
    partialCheck: string | HTMLElement;
};

declare interface ITreeselect {
    parentHtmlContainer: HTMLElement;
    value: ValueType;
    options: OptionType[];
    openLevel: number;
    appendToBody: boolean;
    alwaysOpen: boolean;
    showTags: boolean;
    tagsCountText: string;
    clearable: boolean;
    searchable: boolean;
    placeholder: string;
    grouped: boolean;
    isGroupedValue: boolean;
    listSlotHtmlComponent: HTMLElement | null;
    disabled: boolean;
    emptyText: string;
    staticList: boolean;
    id: string;
    ariaLabel: string;
    isSingleSelect: boolean;
    showCount: boolean;
    disabledBranchNode: boolean;
    direction: DirectionType;
    expandSelected: boolean;
    saveScrollPosition: boolean;
    isIndependentNodes: boolean;
    iconElements: IconsType;
    ungroupedValue: ValueOptionType[];
    groupedValue: ValueOptionType[];
    isListOpened: boolean;
    selectedName: string;
    srcElement: HTMLElement | null;
    inputCallback: ((value: ValueType) => void) | undefined;
    openCallback: ((value: ValueType) => void) | undefined;
    closeCallback: ((value: ValueType) => void) | undefined;
    nameChangeCallback: ((name: string) => void) | undefined;
    searchCallback: ((value: string) => void) | undefined;
    mount: () => void;
    updateValue: (newValue: ValueInputType) => void;
    destroy: () => void;
    focus: () => void;
    toggleOpenClose: () => void;
}

export declare interface ITreeselectParams {
    parentHtmlContainer: HTMLElement;
    value?: ValueInputType;
    options?: OptionType[];
    openLevel?: number;
    appendToBody?: boolean;
    alwaysOpen?: boolean;
    showTags?: boolean;
    tagsCountText?: string;
    clearable?: boolean;
    searchable?: boolean;
    placeholder?: string;
    grouped?: boolean;
    isGroupedValue?: boolean;
    listSlotHtmlComponent?: HTMLElement | null;
    disabled?: boolean;
    emptyText?: string;
    staticList?: boolean;
    id?: string;
    ariaLabel?: string;
    isSingleSelect?: boolean;
    showCount?: boolean;
    disabledBranchNode?: boolean;
    direction?: DirectionType;
    expandSelected?: boolean;
    saveScrollPosition?: boolean;
    isIndependentNodes?: boolean;
    iconElements?: Partial<IconsType>;
    inputCallback?: (value: ValueType) => void;
    openCallback?: (value: ValueType) => void;
    closeCallback?: (value: ValueType) => void;
    nameChangeCallback?: (name: string) => void;
    searchCallback?: (value: string) => void;
}

export declare type OptionType = {
    value: ValueOptionType;
    name: string;
    disabled?: boolean;
    htmlAttr?: object;
    children: OptionType[];
};

declare class Treeselect implements ITreeselect {
    #private;
    parentHtmlContainer: HTMLElement;
    value: ValueType;
    options: OptionType[];
    openLevel: number;
    appendToBody: boolean;
    alwaysOpen: boolean;
    showTags: boolean;
    tagsCountText: string;
    clearable: boolean;
    searchable: boolean;
    placeholder: string;
    grouped: boolean;
    isGroupedValue: boolean;
    listSlotHtmlComponent: HTMLElement | null;
    disabled: boolean;
    emptyText: string;
    staticList: boolean;
    id: string;
    ariaLabel: string;
    isSingleSelect: boolean;
    showCount: boolean;
    disabledBranchNode: boolean;
    direction: DirectionType;
    expandSelected: boolean;
    saveScrollPosition: boolean;
    isIndependentNodes: boolean;
    iconElements: IconsType;
    inputCallback: ((value: ValueType) => void) | undefined;
    openCallback: ((value: ValueType) => void) | undefined;
    closeCallback: ((value: ValueType) => void) | undefined;
    nameChangeCallback: ((name: string) => void) | undefined;
    searchCallback: ((value: string) => void) | undefined;
    ungroupedValue: ValueOptionType[];
    groupedValue: ValueOptionType[];
    allValue: ValueOptionType[];
    isListOpened: boolean;
    selectedName: string;
    srcElement: HTMLElement | null;
    constructor({ parentHtmlContainer, value, options, openLevel, appendToBody, alwaysOpen, showTags, tagsCountText, clearable, searchable, placeholder, grouped, isGroupedValue, listSlotHtmlComponent, disabled, emptyText, staticList, id, ariaLabel, isSingleSelect, showCount, disabledBranchNode, direction, expandSelected, saveScrollPosition, isIndependentNodes, iconElements, inputCallback, openCallback, closeCallback, nameChangeCallback, searchCallback }: ITreeselectParams);
    mount(): void;
    updateValue(newValue: ValueInputType): void;
    destroy(): void;
    focus(): void;
    toggleOpenClose(): void;
    scrollWindowHandler(): void;
    focusWindowHandler(e: Event): void;
    blurWindowHandler(): void;
    updateListPosition(): void;
}
export default Treeselect;

export declare type ValueInputType = ValueOptionType[] | ValueOptionType | null | undefined;

declare type ValueOptionType = string | number;

export declare type ValueType = ValueOptionType[] | ValueOptionType | null;

export { }
