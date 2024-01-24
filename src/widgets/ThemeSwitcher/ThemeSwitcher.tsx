import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import ThemeIconDeprecated from '../../shared/assets/icon/theme-night.svg?react';
import ThemeIcon from '../../shared/assets/icon/theme.svg?react';
import {
    AppButton as AppButtonDerecated,
    ThemeButton,
} from '@/shared/ui/deprecatad/AppButton/AppButton';
import { memo } from 'react';
import { Icon as IconDerecated } from '@/shared/ui/deprecatad/Icon/Icon';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { Icon } from '@/shared/ui/redesigned/Icon/Icon';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<Icon Svg={ThemeIcon} clickable={true} onClick={toggleTheme} />}
            off={
                <AppButtonDerecated
                    theme={ThemeButton.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={toggleTheme}
                >
                    <IconDerecated
                        Svg={ThemeIconDeprecated}
                        width={40}
                        height={40}
                    ></IconDerecated>
                </AppButtonDerecated>
            }
        />
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
