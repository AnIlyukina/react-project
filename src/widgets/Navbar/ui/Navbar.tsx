import React, {useCallback, useState } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/Modal/Modal';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';

interface NavbarProps {
    className?: string
}
export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <AppButton
                theme={ThemeButton.CLEAR}
                className={styles.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </AppButton>

            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            />
        </div>
    );
};

