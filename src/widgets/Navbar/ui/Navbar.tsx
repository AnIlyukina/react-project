import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
    className?: string
}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={styles.links}>
                <AppLink
                    to={'/'}
                    className={styles.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Главная
                </AppLink>

                <AppLink
                    to={'/about'}
                    className={styles.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    О странице
                </AppLink>
            </div>
        </div>
    );
};

