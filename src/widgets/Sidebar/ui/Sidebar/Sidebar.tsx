import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import React, {useState, memo} from 'react';
import {ThemeSwitcher} from '../../../ThemeSwitcher/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {AppButton, ButtonSize, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {SidebarItemsList} from '../../model/items';
import {SidebarItem} from '../SidebarItem/SidebarItem';
import {VStack} from 'shared/ui/Stack/VStack/VStack';

interface SidebarProps {
  className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <aside
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


            <VStack
                role='navigation'
                gap='8'
                className={styles.items}>
                {
                    SidebarItemsList.map(item => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))
                }
            </VStack>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    className={styles.lang}
                    short={collapsed}
                />
            </div>
        </aside>
    );
});

Sidebar.displayName = 'Sidebar';