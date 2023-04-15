import { FC, PropsWithChildren } from 'react';
import { ValueOptionType, ITreeselectParams } from 'treeselectjs';
export type TreeselectValue = ValueOptionType | ValueOptionType[];
interface TreeselectReactParams extends ITreeselectParams {
    onInput?: (value: TreeselectValue) => void;
    onOpen?: (value: TreeselectValue) => void;
    onClose?: (value: TreeselectValue) => void;
    onNameChange?: (name: string) => void;
}
export type TreeselectProps = Omit<TreeselectReactParams, 'parentHtmlContainer' | 'listSlotHtmlComponent' | 'inputCallback' | 'openCallback' | 'closeCallback' | 'nameChangeCallback'>;
declare const Treeselect: FC<PropsWithChildren<TreeselectProps>>;
export default Treeselect;
