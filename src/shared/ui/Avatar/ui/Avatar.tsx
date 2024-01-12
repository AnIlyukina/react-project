import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../../AppImage/AppImage';
import Profile from '../../../assets/icon/profile-page.svg?react';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}
export const Avatar = (props: AvatarProps) => {
    const { className, src, size, alt = 'аватар' } = props;

    const sizeStile = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={Profile} />;

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            alt={alt}
            src={src}
            style={sizeStile}
            className={classNames(styles.Avatar, {}, [className])}
        />
    );
};
