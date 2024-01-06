import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';
import {CSSProperties, useMemo} from 'react';

interface AvatarProps {
    className?: string,
	src?: string,
	size?: number,
	alt?: string,
}
export const Avatar = (props: AvatarProps) => {

    const {
        className,
        src,
        size,
        alt = 'аватар',
    } = props;

    const sizeStile = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);
    
    return (
        <img
            alt={alt}
            src={src}
            style={sizeStile}
            className={classNames(styles.Avatar, {}, [className])}
        />
    );
};