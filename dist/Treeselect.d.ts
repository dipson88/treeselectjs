import { FC, PropsWithChildren } from 'react';
import { ValueOptionType, ITreeselectParams } from 'treeselectjs';
type Value = ValueOptionType | ValueOptionType[];
interface TreeselectReactParams extends ITreeselectParams {
    onInput?: (value: Value) => void;
    onOpen?: (value: Value) => void;
    onClose?: (value: Value) => void;
    onNameChange?: (name: Value) => void;
}
export type TreeselectProps = Omit<TreeselectReactParams, 'parentHtmlContainer' | 'listSlotHtmlComponent' | 'inputCallback' | 'openCallback' | 'closeCallback' | 'nameChangeCallback'>;
declare const Treeselect: FC<PropsWithChildren<TreeselectProps>>;
export default Treeselect;
