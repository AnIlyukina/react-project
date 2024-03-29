import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './AppButton.module.scss';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
    fullWidth?: boolean;
}

/**
 * @deprecated
 */
export const AppButton = memo((props: AppButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(styles.AppButton, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});

AppButton.displayName = 'AppButton';
