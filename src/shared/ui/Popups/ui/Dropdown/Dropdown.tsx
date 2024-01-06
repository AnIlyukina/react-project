import { Menu } from '@headlessui/react';
import styles from './Dropdown.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Fragment, ReactNode} from 'react';
import {DropdownDirection} from '@/shared/types/ui';
import {AppLink} from '@/shared/ui/AppLink/AppLink';
import popupStyles from '../../styles/Popup.module.scss';

export interface DropdownItem {
     disabled?: boolean;
     content: ReactNode;
     onClick?: () => void;
     href?: string;
}
interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {

    const { className, trigger, items, direction = 'bottomRight' } = props;
    const menuClasses = [popupStyles[direction]];
    return (
        <Menu as='div' className={classNames(styles.Dropdown , {}, [className, popupStyles.Popup])}>
            <Menu.Button className={popupStyles.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
                {items.map((item, index) => {

                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type='button'
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(styles.item, {[popupStyles.active]: active}, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} key={index} to={item.href} disabled={item.disabled} >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} key={index} disabled={item.disabled} >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}