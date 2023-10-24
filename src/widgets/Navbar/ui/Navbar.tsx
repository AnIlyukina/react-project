import React, {useCallback, useState } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/User';

interface NavbarProps {
    className?: string
}
export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();
    
    const authData = useSelector(getUserAuthData);
    console.log(authData, 'authData');
    const dispatch = useDispatch();

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

    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <AppButton
                    theme={ThemeButton.CLEAR}
                    className={styles.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </AppButton>
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
};

