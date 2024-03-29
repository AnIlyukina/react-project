import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';
import { CSSProperties, memo } from 'react';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

/**
 * @deprecated
 */

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const style: CSSProperties = {
        height,
        width,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(styles.Skeleton, {}, [className])}
            style={style}
        ></div>
    );
});
Skeleton.displayName = 'Skeleton';
