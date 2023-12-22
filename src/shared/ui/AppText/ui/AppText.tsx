import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AppText.module.scss';
import {memo} from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
interface AppTextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export enum TextAlign {
    START = 'start',
    CENTER = 'center',
    END = 'end',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
}

export const AppText = memo((props: AppTextProps) => {

    const {
        className,
        title,
        text,
        theme= TextTheme.PRIMARY,
        align = TextAlign.START,
        size = TextSize.M
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size]
    return (
        <div className={classNames(styles.AppText, {}, [className, styles[theme], styles[align], styles[size]])}>
            {title &&
                <HeaderTag className={styles.title}>
                    {title}
                </HeaderTag>
            }
            {text &&
                <p className={styles.text}>
                    {text}
                </p>
            }
        </div>
    );
});

AppText.displayName = 'AppText';