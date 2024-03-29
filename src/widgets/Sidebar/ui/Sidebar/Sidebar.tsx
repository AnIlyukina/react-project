import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import styles from './Sidebar.module.scss';
import React, { useState, memo, useMemo } from 'react';
import { ThemeSwitcher } from '../../../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/deprecatad/LangSwitcher/LangSwitcher';
import {
    AppButton,
    ButtonSize,
    ThemeButton,
} from '@/shared/ui/deprecatad/AppButton/AppButton';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon/Icon';
import ArrowIcon from '@/shared/assets/icon/arrow-bottom.svg?react';

interface SidebarProps {
    className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        styles.SidebarRedesigned,
                        { [styles.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        size={collapsed ? 30 : 50}
                        className={styles.appLogo}
                    />
                    <VStack role="navigation" gap="8" className={styles.items}>
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={styles.collapseBtn}
                        Svg={ArrowIcon}
                        clickable={true}
                    />
                    <div className={styles.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher
                            className={styles.lang}
                            short={collapsed}
                        />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        styles.Sidebar,
                        { [styles.collapsed]: collapsed },
                        [className],
                    )}
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

                    <VStack role="navigation" gap="8" className={styles.items}>
                        {itemsList}
                    </VStack>

                    <div className={styles.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher
                            className={styles.lang}
                            short={collapsed}
                        />
                    </div>
                </aside>
            }
        />
    );
});

Sidebar.displayName = 'Sidebar';