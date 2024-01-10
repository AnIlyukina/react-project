import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import styles from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    fullWidth?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        fullWidth,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(
                styles.Card,
                { [styles.fullWidth]: fullWidth },
                [className, styles[theme]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';
