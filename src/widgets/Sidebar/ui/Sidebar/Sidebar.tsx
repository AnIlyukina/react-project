import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import React, {useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {AppButton, ButtonSize, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icon/about-page.svg';
import MainIcon from 'shared/assets/icon/home-page.svg';

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
                <div>
                    <AppLink
                        to={RoutePath.main}
                        className={styles.item}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        <MainIcon className={styles.icon}/>
                        <span className={styles.link}>
                            { t('Главная') }
                        </span>
                    </AppLink>
                </div>

                <div>
                    <AppLink
                        to={RoutePath.about}
                        className={styles.item}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        <AboutIcon className={styles.icon}/>
                        <span className={styles.link}>
                            { t('О странице') }
                        </span>
                    </AppLink>
                </div>
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
};
