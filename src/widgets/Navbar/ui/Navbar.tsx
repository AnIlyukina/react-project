import React, {memo, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from 'entities/User';
import {Dropdown} from 'shared/ui/Dropdown/Dropdown';
import {Avatar} from 'shared/ui/Avatar/ui/Avatar';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string
}
export const Navbar = memo(({className}: NavbarProps) => {
    const { t } = useTranslation();
    
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <Dropdown
                    className={styles.dropdown}
                    direction='bottomLeft'
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Админка'),
                            href: RoutePath.admin_panel,
                        }] : []),
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        }
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar}/>}
                />
            </div>
        );
    }

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <AppButton
                theme={ThemeButton.CLEAR}
                className={styles.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </AppButton>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
});

Navbar.displayName = 'Navbar';