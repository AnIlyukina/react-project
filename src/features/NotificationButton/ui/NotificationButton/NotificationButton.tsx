import {classNames} from 'shared/lib/classNames/classNames';
import styles from './NotificationButton.module.scss';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {Icon} from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icon/notification.svg';
import {NotificationList} from 'entities/Notification';
import {Popover} from 'shared/ui/Popups';
import React from 'react';
interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = ({className}: NotificationButtonProps) => {
    return (
        <Popover
            className={classNames(styles.NotificationButton, {}, [className])}
            direction='bottomLeft'
            trigger={(
                <AppButton theme={ThemeButton.CLEAR}>
                    <Icon Svg={NotificationIcon}/>
                </AppButton>
            )}>
            <NotificationList className={styles.notification}/>
        </Popover>
    );
};