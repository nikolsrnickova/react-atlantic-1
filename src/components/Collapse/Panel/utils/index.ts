import { ControllerPanelProps } from '../types';
import { CollapseProviderProps } from '../../context';

const checkKeyFunc = (key1: string | number, key2: string | number) => {
    return key1.toString() === key2.toString();
};
export const isActiveKey: IsActiveKeyType = (key, activeKey) => {
    const handleSome = (item: string | number) => checkKeyFunc(item, key);
    return Array.isArray(activeKey)
        ? activeKey.some(handleSome)
        : checkKeyFunc(key, activeKey);
};
export type IsActiveKeyType = (
    key: ControllerPanelProps['key'],
    activeKey: CollapseProviderProps['activeKey']
) => boolean;