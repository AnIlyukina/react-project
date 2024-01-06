import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import React, {ReactNode} from 'react';
import {Portal} from '@/shared/ui/Portal/Portal';
import {Overlay} from '@/shared/ui/Overlay/Overlay';
import {useModal} from '@/shared/lib/hooks/useModal/useModal';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean,
}

export const Modal = (props: ModalProps) => {

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
            <div className={classNames(styles.Modal, mods, [className])}>
                <Overlay onClick={closeHandler}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};