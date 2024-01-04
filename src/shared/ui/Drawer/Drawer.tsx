import {classNames, Mods} from 'shared/lib/classNames/classNames';
import styles from './Drawer.module.scss';
import {useTranslation} from 'react-i18next';
import {ReactNode} from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import {Portal} from '../Portal/Portal';
import {Overlay} from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {
    const {t} = useTranslation();

    const { className, children, isOpen, onClose} = props;
    const { theme } = useTheme();

    const mods: Mods = {
        [styles.opened]: isOpen
    };

    return (
        <Portal>
            <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};