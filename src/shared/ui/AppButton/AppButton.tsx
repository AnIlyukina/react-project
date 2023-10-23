import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AppButton.module.scss';
import {ButtonHTMLAttributes, FC} from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}
export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {

    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(styles.AppButton, mods, [className])}
            {...otherProps}
        >
            { children }
        </button>
    );
};