declare type DirectionType = 'auto' | 'top' | 'bottom';

declare type IconsType = {
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
    value: ValueOptionType[] | ValueOptionType;
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
    isSingleSelect: boolean;
    showCount: boolean;
    disabledBranchNode: boolean;
    direction: DirectionType;
    expandSelected: boolean;
    saveScrollPosition: boolean;
    iconElements: IconsType;
    ungroupedValue: ValueOptionType[];
    groupedValue: ValueOptionType[];
    isListOpened: boolean;
    selectedName: string;
    srcElement: HTMLElement | null;
    inputCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined;
    openCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined;
    closeCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined;
    nameChangeCallback: ((name: string) => void) | undefined;
    mount: () => void;
    updateValue: (newValue: ValueOptionType[] | ValueOptionType) => void;
    destroy: () => void;
    focus: () => void;
    toggleOpenClose: () => void;
}

declare interface ITreeselectParams {
    parentHtmlContainer: HTMLElement;
    value?: ValueOptionType[] | ValueOptionType;
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
    isSingleSelect?: boolean;
    showCount?: boolean;
    disabledBranchNode?: boolean;
    direction?: DirectionType;
    expandSelected?: boolean;
    saveScrollPosition?: boolean;
    iconElements?: Partial<IconsType>;
    inputCallback?: (value: ValueOptionType[] | ValueOptionType) => void;
    openCallback?: (value: ValueOptionType[] | ValueOptionType) => void;
    closeCallback?: (value: ValueOptionType[] | ValueOptionType) => void;
    nameChangeCallback?: (name: string) => void;
}

declare type OptionType = {
    value: ValueOptionType;
    name: string;
    disabled?: boolean;
    htmlAttr?: object;
    children: OptionType[];
};

declare class Treeselect implements ITreeselect {
    #private;
    parentHtmlContainer: HTMLElement;
    value: ValueOptionType[] | ValueOptionType;
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
    isSingleSelect: boolean;
    showCount: boolean;
    disabledBranchNode: boolean;
    direction: DirectionType;
    expandSelected: boolean;
    saveScrollPosition: boolean;
    iconElements: IconsType;
    inputCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined;
    openCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined;
    closeCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined;
    nameChangeCallback: ((name: string) => void) | undefined;
    ungroupedValue: ValueOptionType[];
    groupedValue: ValueOptionType[];
    isListOpened: boolean;
    selectedName: string;
    srcElement: HTMLElement | null;
    constructor({ parentHtmlContainer, value, options, openLevel, appendToBody, alwaysOpen, showTags, tagsCountText, clearable, searchable, placeholder, grouped, isGroupedValue, listSlotHtmlComponent, disabled, emptyText, staticList, id, isSingleSelect, showCount, disabledBranchNode, direction, expandSelected, saveScrollPosition, iconElements, inputCallback, openCallback, closeCallback, nameChangeCallback }: ITreeselectParams);
    mount(): void;
    updateValue(newValue: ValueOptionType[] | ValueOptionType): void;
    destroy(): void;
    focus(): void;
    toggleOpenClose(): void;
    scrollWindowHandler(): void;
    focusWindowHandler(e: Event): void;
    blurWindowHandler(): void;
    updateListPosition(): void;
}
export default Treeselect;

declare type ValueOptionType = string | number;

export { }
