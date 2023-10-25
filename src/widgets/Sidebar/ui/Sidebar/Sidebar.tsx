import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import React, {useState, useMemo, memo} from 'react';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {AppButton, ButtonSize, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {SidebarItemsList} from "../../model/items";
import {SidebarItem} from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {

    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <AppButton
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </AppButton>


            <div className={styles.items}>
                {
                    SidebarItemsList.map(item => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))
                }
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    className={styles.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
});
