import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './AppButton.module.scss';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export type ButtonVariant = 'clear' | 'outline';
export type ButtonSize = 'm' | 'l' | 'xl';
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
    fullWidth?: boolean;
}

export const AppButton = memo((props: AppButtonProps) => {
    const {
        className,
        children,
        variant = 'outline',
        square,
        size = 'm',
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [styles.square]: square,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(styles.AppButton, mods, [
                className,
                styles[variant],
                styles[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
});

AppButton.displayName = 'AppButton';
