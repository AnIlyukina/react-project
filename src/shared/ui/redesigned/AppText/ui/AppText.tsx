import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AppText.module.scss';
import { memo } from 'react';

export type TextVariant ='primary' | 'error' | 'accent';

export type TextAlign = 'start' | 'center' | 'end';

export type TextSize = 's' | 'm' | 'l';

interface AppTextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}


type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const AppText = memo((props: AppTextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'start',
        size = 'm',
        'data-testid': dataTestId = 'AppText',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div
            className={classNames(styles.AppText, {}, [
                className,
                styles[variant],
                styles[align],
                styles[size],
            ])}
        >
            {title && (
                <HeaderTag
                    className={styles.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={styles.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});

AppText.displayName = 'AppText';
