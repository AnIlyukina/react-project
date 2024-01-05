import {classNames, Mods} from 'shared/lib/classNames/classNames';
import styles from './Drawer.module.scss';
import {useTranslation} from 'react-i18next';
import {ReactNode} from 'react';
import {Portal} from '../Portal/Portal';
import {Overlay} from '../Overlay/Overlay';
import {useModal} from 'shared/lib/hooks/useModal/useModal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
    const {t} = useTranslation();

    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;


    const { isMounted, isClosing, close: closeHandler} = useModal({animationDelay: 300, onClose, isOpen});

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.Drawer, mods, [className, 'app_drawer'])}>
                <Overlay onClick={closeHandler}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};