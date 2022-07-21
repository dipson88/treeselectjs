type OptionType = {
    value: string;
    name: string;
    children: OptionType[];
};
interface ITreeslect {
    parentHtmlContainer: HTMLElement;
    value: string[];
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
    listSlotHtmlComponent: HTMLElement | null;
    disabled: boolean;
    emptyText: string;
    staticList: boolean;
    isListOpened: boolean;
    srcElement: HTMLElement | null;
    mount: () => void;
    updateValue: (newValue: string[]) => void;
    destroy: () => void;
    focus: () => void;
    toggleOpenClose: () => void;
}
interface ITreeslectParams {
    parentHtmlContainer: HTMLElement;
    value?: string[];
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
    listSlotHtmlComponent?: HTMLElement | null;
    disabled?: boolean;
    emptyText?: string;
    staticList?: boolean;
}
export default class Treeselect implements ITreeslect {
    #private;
    parentHtmlContainer: HTMLElement;
    value: string[];
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
    listSlotHtmlComponent: HTMLElement | null;
    disabled: boolean;
    emptyText: string;
    staticList: boolean;
    isListOpened: boolean;
    srcElement: HTMLElement | null;
    constructor({ parentHtmlContainer, value, options, openLevel, appendToBody, alwaysOpen, showTags, tagsCountText, clearable, searchable, placeholder, grouped, listSlotHtmlComponent, disabled, emptyText, staticList }: ITreeslectParams);
    mount(): void;
    updateValue(newValue: string[]): void;
    destroy(): void;
    focus(): void;
    toggleOpenClose(): void;
    scrollWindowHandler(): void;
    focusWindowHandler(e: Event): void;
    blurWindowHandler(): void;
    updateListPosition(): void;
}
export default Treeselect;
