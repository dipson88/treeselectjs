import { FC, PropsWithChildren } from 'react';
import { ValueInputType, ITreeselectParams } from 'treeselectjs';
export { type DirectionType, type IconsType, type OptionType } from 'treeselectjs';
export type TreeselectValue = ValueInputType;
interface TreeselectReactParams extends ITreeselectParams {
    onInput?: (value: TreeselectValue) => void;
    onOpen?: (value: TreeselectValue) => void;
    onClose?: (value: TreeselectValue) => void;
    onNameChange?: (name: string) => void;
    onSearch?: (value: string) => void;
}
export type TreeselectProps = Omit<TreeselectReactParams, 'parentHtmlContainer' | 'listSlotHtmlComponent' | 'inputCallback' | 'openCallback' | 'closeCallback' | 'nameChangeCallback' | 'searchCallback'>;
declare const Treeselect: FC<PropsWithChildren<TreeselectProps>>;
export default Treeselect;
