import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AppButton.module.scss';
import {ButtonHTMLAttributes, FC} from 'react';

export enum ThemeButton {
    CLEAR = 'clear'

}
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}
export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(styles.AppButton, {}, [className, styles[theme]])}
            {...otherProps}
        >
            { children }
        </button>
    );
};