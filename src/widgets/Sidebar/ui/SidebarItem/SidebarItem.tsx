import {classNames} from 'shared/lib/classNames/classNames';
import styles from './SidebarItem.module.scss';
import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import React, {memo} from 'react';
import {SidebarItemType} from 'widgets/Sidebar/model/items';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
export const SidebarItem = memo((props: SidebarItemProps) => {
    const {t} = useTranslation();

    const { item, collapsed } = props;
    
    return (
        <AppLink
            to={item.path}
            className={classNames(styles.item, {[styles.collapsed]: collapsed}, [])}
            theme={AppLinkTheme.SECONDARY}
        >
            <item.Icon className={styles.icon}/>
            <span className={styles.link}>
                { t(item.text) }
            </span>
        </AppLink>
    );
});
SidebarItem.displayName = 'SidebarItem';