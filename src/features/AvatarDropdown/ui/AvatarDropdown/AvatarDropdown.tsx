import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AvatarDropdown.module.scss';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/Avatar/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import React, { useCallback } from 'react';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

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

    return (
        <div className={classNames(styles.AvatarDropdown, {}, [className])}>
            <Dropdown
                direction="bottomLeft"
                items={[
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
                ]}
                trigger={<Avatar size={30} src={authData.avatar} />}
            />
        </div>
    );
};
