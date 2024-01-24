import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AppLogo.module.scss';
import { memo } from 'react';
import { HStack } from '@/shared/ui/redesigned/Stack';
import AppSvg from '@/shared/assets/icon/app-image.svg?react';

interface AppLogoProps {
    className?: string;
    size?: number;
}
export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(styles.AppWrapper, {}, [className])}
        >
            <div className={styles.gradientBig}></div>
            <div className={styles.gradientSmall}></div>
            <AppSvg
                className={styles.appLogo}
                width={size}
                height={size}
                color={'black'}
            />
        </HStack>
    );
});
AppLogo.displayName = 'AppLogo';
