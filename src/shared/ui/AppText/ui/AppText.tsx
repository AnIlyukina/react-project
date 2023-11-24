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
    M = 'size_m',
    L = 'size_l',
}

export enum TextAlign {
    START = 'start',
    CENTER = 'center',
    END = 'end',
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

    return (
        <div className={classNames(styles.AppText, {}, [className, styles[theme], styles[align], styles[size]])}>
            {title &&
                <p className={styles.title}>
                    {title}
                </p>
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