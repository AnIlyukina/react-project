import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AppText.module.scss';
import {memo} from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
interface AppTextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
}
export const AppText = memo((props: AppTextProps) => {

    const {
        className,
        title,
        text,
        theme= TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(styles.AppText, {}, [className, styles[theme]])}>
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