import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './StickyContentLayout.module.scss';
import {useTranslation} from 'react-i18next';
import {ReactElement} from 'react';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
    const { left, content, className, right} = props;
    return (
        <div className={classNames(styles.StickyContentLayout, {}, [className])}>
            {left && <div className={styles.left}>{left}</div>}
            <div className={styles.content}>{content}</div>
            {right && <div className={styles.right}>{right}</div>}
        </div>
    );
};