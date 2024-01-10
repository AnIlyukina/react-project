import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { SidebarItemType } from '../../model/types/sidebar';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(
                styles.item,
                { [styles.collapsed]: collapsed },
                [],
            )}
            theme={AppLinkTheme.SECONDARY}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
    );
});
SidebarItem.displayName = 'SidebarItem';
