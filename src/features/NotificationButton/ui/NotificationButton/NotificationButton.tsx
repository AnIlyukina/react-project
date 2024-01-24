import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NotificationButton.module.scss';
import {
    AppButton as AppButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecatad/AppButton/AppButton';
import { Icon as IconDeprecated} from '@/shared/ui/deprecatad/Icon/Icon';
import NotificationIcon from '@/shared/assets/icon/notification.svg?react';
import { NotificationList } from '@/entities/Notification';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecatad/Popups';
import React, { useCallback, useState } from 'react';
import { Drawer } from '@/shared/ui/deprecatad/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import {ToggleFeatures} from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import {Icon} from '@/shared/ui/redesigned/Icon/Icon';
import {Popover} from '@/shared/ui/redesigned/Popups';
interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <AppButtonDeprecated theme={ThemeButton.CLEAR} onClick={onOpenDrawer}>
                    <IconDeprecated Svg={NotificationIcon} />
                </AppButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Popover
                            className={classNames(styles.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottomLeft"
                            trigger={trigger}
                        >
                            <NotificationList className={styles.notification} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(styles.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottomLeft"
                            trigger={trigger}
                        >
                            <NotificationList className={styles.notification} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
};
