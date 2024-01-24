import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import styles from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined';
export type CardPadding = '0' | '8' | '16' | '24';

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    fullWidth?: boolean;
    padding?: CardPadding;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        fullWidth,
        padding = '8',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(
                styles.Card,
                { [styles.fullWidth]: fullWidth },
                [className, styles[variant], styles[paddingClass]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';
