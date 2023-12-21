import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Flex.module.scss';
import {memo, ReactNode} from 'react';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    32: styles.gap32,
}

interface FlexProps {
    className?: string,
    children: ReactNode,
    justify?: FlexJustify,
    align?: FlexAlign,
    direction: FlexDirection,
    gap?: FlexGap,
}

export const Flex = memo((props: FlexProps) => {

    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
    } = props;



    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap]
    ]

    return (
        <div className={classNames(styles.Flex, {}, classes)}>
            {children}
        </div>
    );
});
Flex.displayName = 'Flex'