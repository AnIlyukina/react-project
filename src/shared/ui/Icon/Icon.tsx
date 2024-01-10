import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Icon.module.scss';
import React, { memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, ...otherProps } = props;

    return (
        <Svg
            className={classNames(styles.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
Icon.displayName = 'Icon';
