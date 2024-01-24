import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NotificationButton.module.scss';
import {
    AppButton,
    ThemeButton,
} from '@/shared/ui/deprecatad/AppButton/AppButton';
import { Icon } from '@/shared/ui/deprecatad/Icon/Icon';
import NotificationIcon from '@/shared/assets/icon/notification.svg?react';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/deprecatad/Popups';
import React, { useCallback, useState } from 'react';
import { Drawer } from '@/shared/ui/deprecatad/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
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
        <AppButton theme={ThemeButton.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} />
        </AppButton>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(styles.NotificationButton, {}, [
                        className,
                    ])}
                    direction="bottomLeft"
                    trigger={trigger}
                >
                    <NotificationList className={styles.notification} />
                </Popover>
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
