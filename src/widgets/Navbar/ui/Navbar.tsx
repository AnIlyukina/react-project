import React, {memo, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import {LoginModal} from 'features/AuthByUsername';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from 'entities/User';
import {Dropdown} from 'shared/ui/Popups';
import {Avatar} from 'shared/ui/Avatar/ui/Avatar';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {HStack} from 'shared/ui/Stack';
import {NotificationButton} from 'features/NotificationButton';
import {AvatarDropdown} from 'features/AvatarDropdown';

interface NavbarProps {
    className?: string
}
export const Navbar = memo(({className}: NavbarProps) => {
    const { t } = useTranslation();
    
    const authData = useSelector(getUserAuthData);

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);



    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <HStack gap='16' className={styles.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
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