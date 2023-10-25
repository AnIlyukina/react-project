import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';
import {Link, LinkProps} from 'react-router-dom';
import {memo, ReactNode} from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps{
    className?: string,
    children: ReactNode,
    theme?: AppLinkTheme,
}
export const AppLink  = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY
    } = props;
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}>
            {children}
        </Link>
    );
});