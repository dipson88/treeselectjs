import { FC, PropsWithChildren } from 'react';
import { ValueType, ITreeselectParams } from 'treeselectjs';
export type TreeselectValue = ValueType;
interface TreeselectReactParams extends ITreeselectParams {
    onInput?: (value: ValueType) => void;
    onOpen?: (value: ValueType) => void;
    onClose?: (value: ValueType) => void;
    onNameChange?: (name: string) => void;
    onSearch?: (value: string) => void;
}
export type TreeselectProps = Omit<TreeselectReactParams, 'parentHtmlContainer' | 'listSlotHtmlComponent' | 'inputCallback' | 'openCallback' | 'closeCallback' | 'nameChangeCallback' | 'searchCallback'>;
declare const Treeselect: FC<PropsWithChildren<TreeselectProps>>;
export default Treeselect;
