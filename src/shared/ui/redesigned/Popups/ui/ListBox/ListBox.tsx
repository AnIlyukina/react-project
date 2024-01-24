import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import styles from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton } from '@/shared/ui/deprecatad/AppButton/AppButton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { DropdownDirection } from '@/shared/types/ui';
import popupStyles from '../../styles/Popup.module.scss';

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
                    <AppButton disabled={readonly}>
                        {value ?? defaultValue}
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
                                        },
                                        [],
                                    )}
                                >
                                    {selected && '!!!'}
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
