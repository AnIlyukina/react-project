import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './MainLayout.module.scss';
import {useTranslation} from 'react-i18next';
import {ReactElement} from 'react';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const {t} = useTranslation();

    const {
        className,
        header,
        content,
        sidebar,
        toolbar
    } = props;

    return (
        <div className={classNames(styles.MainLayout, {}, [className])}>
            <div className={styles.sidebar}>
                {sidebar}
            </div>
            <div className={styles.content}>
                {content}
            </div>
            <div className={styles.rightbar}>
                <div className={styles.header}>
                    {header}
                </div>
                <div className={styles.toolbar}>
                    {toolbar}
                </div>
            </div>
        </div>
    );
};