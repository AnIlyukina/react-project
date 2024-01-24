import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';
import { LinkProps, NavLink } from 'react-router-dom';
import { memo, ReactNode } from 'react';

export type AppLinkVariant = 'primary' | 'red';
interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    variant?: AppLinkVariant;
    activeClassName?: string;
}
export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(styles.AppLink, { [activeClassName]: isActive }, [
                    className,
                    styles[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});

AppLink.displayName = 'AppLink';
