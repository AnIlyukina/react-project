import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AvatarDropdown.module.scss';
import { useTranslation } from 'react-i18next';
import { Avatar as AvatarDeprecatad } from '@/shared/ui/deprecatad/Avatar/ui/Avatar';
import { Dropdown as DropdownDeprecatad } from '@/shared/ui/deprecatad/Popups';
import React, { useCallback } from 'react';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import {ToggleFeatures} from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import {Avatar} from '@/shared/ui/redesigned/Avatar/ui/Avatar';
import {Dropdown} from '@/shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                {
                    content: t('Админка'),
                    href: getRouteAdmin(),
                },
            ]
            : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div className={classNames(styles.AvatarDropdown, {}, [className])}>
                    <Dropdown
                        direction="bottomLeft"
                        items={items}
                        trigger={<Avatar size={40} src={authData.avatar} />}
                    />
                </div>
            }
            off={
                <div className={classNames(styles.AvatarDropdown, {}, [className])}>
                    <DropdownDeprecatad
                        direction="bottomLeft"
                        items={items}
                        trigger={<AvatarDeprecatad size={30} src={authData.avatar} />}
                    />
                </div>
            }
        />
    );
};
