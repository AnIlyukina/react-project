import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Popover.module.scss';
import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui';
import popupStyles from '../../styles/Popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, direction = 'bottomRight', children } = props;
    const menuClasses = [popupStyles[direction], popupStyles.menu];

    return (
        <HPopover
            className={classNames(styles.Popover, {}, [
                className,
                popupStyles.Popup,
            ])}
        >
            <HPopover.Button as="div" className={popupStyles.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(styles.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
