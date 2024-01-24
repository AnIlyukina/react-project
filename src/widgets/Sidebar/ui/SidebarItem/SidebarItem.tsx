import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/shared/ui/deprecatad/AppLink/AppLink';
import React, { memo } from 'react';
import { SidebarItemType } from '../../model/types/sidebar';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon/Icon';

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <AppLink
                    to={item.path}
                    className={classNames(
                        styles.itemRedesigned,
                        { [styles.collapsedRedesigned]: collapsed },
                        [],
                    )}
                    activeClassName={styles.active}
                >
                    <Icon Svg={item.Icon} clickable={false} />
                    <span className={styles.link}>{t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
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
                </AppLinkDeprecated>
            }
        />
    );
});
SidebarItem.displayName = 'SidebarItem';
