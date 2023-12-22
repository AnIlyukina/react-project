import {Fragment, ReactNode, useState} from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import styles from './ListBox.module.scss'
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {AppButton} from "shared/ui/AppButton/AppButton";


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
}

type DropdownDirection = 'top' | 'bottom';

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
    } = props;

    //const optionsClasses = {styles.items}

    return (
        <HListBox
            disabled={readonly}
            as={'div'}
            className={classNames(styles.ListBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <HListBox.Button
                className={styles.trigger}
            >
                <AppButton disabled={readonly}>
                    {value ?? defaultValue}
                </AppButton>
            </HListBox.Button>
            <HListBox.Options className={styles.items}>
                {items?.map((item) => (
                    <HListBox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li className={classNames(styles.item, {
                                [styles.active]: active,
                                [styles.disabled]: item.disabled,
                            }, [])}>
                                {selected && '!!!'}
                                {item.content}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    )
}