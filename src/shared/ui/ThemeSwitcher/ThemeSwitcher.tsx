import {classNames} from 'shared/lib/classNames/classNames';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import LightIcon from '../../assets/icon/theme-light.svg';
import NightIcon from '../../assets/icon/theme-night.svg';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {memo} from 'react';

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <AppButton
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            { theme === Theme.LIGHT ? <LightIcon width={32} height={32}/> : <NightIcon width={32} height={32}/> }
        </AppButton>
    );
});
 