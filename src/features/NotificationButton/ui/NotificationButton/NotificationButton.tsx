import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './NotificationButton.module.scss';
import {AppButton, ThemeButton} from '@/shared/ui/AppButton/AppButton';
import {Icon} from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icon/notification.svg';
import {NotificationList} from '@/entities/Notification';
import {Popover} from '@/shared/ui/Popups';
import React, {useCallback, useState} from 'react';
import {Drawer} from '@/shared/ui/Drawer/Drawer';
import {BrowserView, MobileView} from 'react-device-detect';
import {AnimationProvider} from '@/shared/lib/components/AnimationProvider';
interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = ({className}: NotificationButtonProps) => {
    const [isOpen, setIsOpen ] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <AppButton theme={ThemeButton.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon}/>
        </AppButton>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(styles.NotificationButton, {}, [className])}
                    direction='bottomLeft'
                    trigger={trigger}>
                    <NotificationList className={styles.notification}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList/>
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
};