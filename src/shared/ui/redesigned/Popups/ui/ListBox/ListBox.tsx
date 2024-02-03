import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import styles from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { DropdownDirection } from '@/shared/types/ui';
import popupStyles from '../../styles/Popup.module.scss';
import {AppButton} from '@/shared/ui/redesigned/AppButton/AppButton';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}
interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        label,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottomRight',
    } = props;

    const optionsClasses = [styles[direction], popupStyles.menu];

    const selectedItem =  useMemo(() => {
        return items?.find(item => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="4">
            {label && <span className={styles.label}>{label}</span>}
            <HListBox
                disabled={readonly}
                as={'div'}
                className={classNames(styles.ListBox, {}, [
                    className,
                    popupStyles.Popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={styles.trigger}>
                    <AppButton variant={'filled'} disabled={readonly}>
                        {selectedItem?.content ?? defaultValue}
                    </AppButton>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(styles.items, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        styles.item,
                                        {
                                            [popupStyles.active]: active,
                                            [styles.disabled]: item.disabled,
                                            [styles.selected]: selected,
                                        },
                                        [],
                                    )}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
