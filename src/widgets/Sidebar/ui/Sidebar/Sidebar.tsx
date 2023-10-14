import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from 'react-i18next';

interface SidebarProps {
  className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {

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
            <button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('Перевести')}
            </button>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    );
};
